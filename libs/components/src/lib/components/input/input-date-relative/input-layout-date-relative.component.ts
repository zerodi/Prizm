import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  inject,
  Inject,
  Injector,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDestroyService, PrizmPluckPipe } from '@prizm-ui/helpers';
import { PrizmLanguageInputLayoutDateRelative } from '@prizm-ui/i18n';
import { BehaviorSubject, Observable, takeUntil, tap } from 'rxjs';

import {
  getDefaultRelativeDateMenuItems,
  IdByGroup,
  RelativeDateDirectionId,
  RelativeDateMenuItem,
  RelativeDateMenuItems,
  RelativeDatePeriodId,
  RelativeDateTimeId,
} from './input-date-relative.models';
import { ParseTextInput, RenderText, UpdateActiveItem } from './input-date-relative.utils';
import { PrizmInputControl, PrizmInputNgControl, PrizmInputStatusTextDirective } from '../common';
import { PRIZM_DATE_RIGHT_BUTTONS, PRIZM_INPUT_LAYOUT_DATE_RELATIVE } from '../../../tokens';
import { PrizmDateButton } from '../../../types';
import { prizmI18nInitWithKey } from '../../../services';
import { prizmIsNativeFocusedIn } from '../../../util';
import { CommonModule } from '@angular/common';
import { PolymorphOutletDirective, PrizmLifecycleDirective } from '../../../directives';
import { PrizmInputTextModule } from '../input-text';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import { PrizmInputLayoutDateRelativeDirective } from './input-layout-date-relative.directive';
import { PrizmDataListComponent } from '../../data-list';
import { PrizmListingItemComponent } from '../../listing-item';
import { PrizmIconsComponent } from '@prizm-ui/icons';
import { PrizmIconsFullRegistry, PrizmIconsRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsLetterTime,
  prizmIconsCirclePlus,
  prizmIconsMinusCircle,
  prizmIconsLetterYear,
  prizmIconsLetterMonth,
  prizmIconsLetterDay,
  prizmIconsLetterHour,
  prizmIconsLetterMinute,
  prizmIconsLetterSecond,
  prizmIconsSymbolAsterisk,
} from '@prizm-ui/icons/base/source';
import { prizmIconsClockRotateRight } from '@prizm-ui/icons/full/source';

const MenuItems: RelativeDateMenuItems = getDefaultRelativeDateMenuItems();

@Component({
  selector: 'prizm-input-layout-date-relative',
  templateUrl: './input-layout-date-relative.component.html',
  styleUrls: ['./input-layout-date-relative.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutDateRelativeComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateRelativeComponent },
    ...prizmI18nInitWithKey(PRIZM_INPUT_LAYOUT_DATE_RELATIVE, 'inputLayoutDateRelative'),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    PolymorphOutletDirective,
    PrizmLifecycleDirective,
    FormsModule,
    PrizmInputTextModule,
    PrizmPluckPipe,
    ReactiveFormsModule,
    PrizmInputLayoutDateRelativeDirective,
    PrizmDropdownHostComponent,
    PrizmDataListComponent,
    PrizmListingItemComponent,
    PrizmIconsComponent,
  ],
})
export class PrizmInputLayoutDateRelativeComponent
  extends PrizmInputNgControl<string | null>
  implements OnInit
{
  readonly nativeElementType = 'input-layout-date-relative';
  readonly hasClearButton = true;
  readonly iconsRegistry = inject(PrizmIconsRegistry);
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  @ViewChild(PrizmInputStatusTextDirective, { static: true })
  override statusText!: PrizmInputStatusTextDirective;

  @ViewChild('focusableElementRef', { read: ElementRef })
  public override readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  public placeholder = 'Выберите относительное время';

  @Input()
  @prizmDefaultProp()
  public canOpen = true;

  @Input()
  @prizmDefaultProp()
  extraButtonInjector: Injector = this.injector;

  override readonly testId_ = 'ui_input_date_relative';

  public isOpen = false;

  // public value = new UntypedFormControl('', Validators.pattern(ValidationPattern));
  public timeItems: RelativeDateMenuItem<RelativeDateTimeId>[] = [...MenuItems.time];
  public directionItems: RelativeDateMenuItem<RelativeDateDirectionId>[] = [...MenuItems.direction];
  public periodItems: RelativeDateMenuItem<RelativeDatePeriodId>[] = [...MenuItems.period];

  private activeTimeId!: RelativeDateTimeId;
  private activeDirectionId!: RelativeDateDirectionId;
  private activePeriodId!: RelativeDatePeriodId;
  private activeNumber = '';
  private activeWrongFormat = false;

  public rightButtons$!: BehaviorSubject<PrizmDateButton[]>;

  constructor(
    @Inject(Injector) injector: Injector,
    @Inject(PRIZM_INPUT_LAYOUT_DATE_RELATIVE)
    public readonly dictionary$: Observable<PrizmLanguageInputLayoutDateRelative['inputLayoutDateRelative']>
  ) {
    super(injector);

    this.iconsRegistry.registerIcons(
      prizmIconsSymbolAsterisk,
      prizmIconsLetterTime,
      prizmIconsCirclePlus,
      prizmIconsMinusCircle,
      prizmIconsLetterYear,
      prizmIconsLetterMonth,
      prizmIconsLetterDay,
      prizmIconsLetterHour,
      prizmIconsLetterMinute,
      prizmIconsLetterSecond
    );

    this.iconsFullRegistry.registerIcons(prizmIconsClockRotateRight);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
    this.ngControl.valueChanges
      ?.pipe(
        tap((value: string) => this.valueChange(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public valueChange(value: string) {
    this.parseInputValue(value);
    this.actualizeMenu();
    if (!this.activeWrongFormat) {
      if (this.activePeriodId && !this.activeNumber) {
        this.activeNumber = '1';
        this.actualizeInput();
        return;
      }
    }
    this.updateTouchedAndValue(value);
  }

  public onMenuItemClick(event: MouseEvent, item: RelativeDateMenuItem): void {
    event.stopImmediatePropagation();
    switch (item.groupId) {
      case 'time':
        this.activeTimeId = <IdByGroup<'time'>>item.id;
        break;

      case 'direction':
        this.activeDirectionId = <IdByGroup<'direction'>>item.id;
        break;

      case 'period':
        this.activePeriodId = <IdByGroup<'period'>>item.id;
        if (!this.activeNumber) {
          this.activeNumber = '1';
        }
        break;
    }

    this.actualizeMenu();
    this.actualizeInput();
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Parses control input value
   */
  private parseInputValue(value: string): void {
    const model = ParseTextInput(value);

    this.activeTimeId = model.time;
    this.activeDirectionId = model.direction;
    this.activeNumber = model.number;
    this.activePeriodId = model.period;
    this.activeWrongFormat = !!model.wrongFormat;
  }

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement?.nativeElement
      ? (this.focusableElement?.nativeElement as HTMLInputElement)
      : null;
  }

  public get focused(): boolean {
    return !!(
      this.focusableElement?.nativeElement && prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
    );
  }

  /**
   * Set control input as text
   */
  private actualizeInput(): void {
    const stringValue = RenderText({
      time: this.activeTimeId,
      number: this.activeNumber,
      direction: this.activeDirectionId,
      period: this.activePeriodId,
    });
    this.updateTouchedAndValue(stringValue);
  }

  public override clear(ev: MouseEvent): void {
    this.parseInputValue('');
    this.updateValue(null);
    this.actualizeMenu();
    if (this.nativeFocusableElement) this.nativeFocusableElement.value = '';
  }

  /**
   * Actualize menu items, as radio group button
   */
  private actualizeMenu(): void {
    this.timeItems = UpdateActiveItem(this.timeItems, this.activeTimeId);
    this.directionItems = UpdateActiveItem(this.directionItems, this.activeDirectionId);
    this.periodItems = UpdateActiveItem(this.periodItems, this.activePeriodId);
  }

  public onOpenChange(state: boolean): void {
    this.isOpen = state;
  }

  public safeOpenModal(): void {
    if (!this.isOpen && !this.disabled) {
      this.isOpen = true;
      this.changeDetectorRef.markForCheck();
    } else {
      this.isOpen = false;
    }
  }

  private updateTouchedAndValue(value: string | null): void {
    this.markAsTouched();
    this.updateValue(value);
  }
}
