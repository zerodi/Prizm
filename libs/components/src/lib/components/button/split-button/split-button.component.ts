import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmSize } from '../../../util';
import { PrizmAppearance, PrizmAppearanceType } from '../../../types';
import { PolymorphContent } from '../../../directives';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { PrizmButtonComponent } from '../button.component';

@Component({
  selector: 'prizm-split-button',
  styleUrls: ['./split-button.component.less'],
  templateUrl: './split-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
  standalone: true,
  imports: [PrizmButtonComponent],
})
export class PrizmSplitButtonComponent extends PrizmAbstractTestId {
  @Input()
  @HostBinding('attr.data-size')
  size!: PrizmSize;

  /** can pass template or icon class */
  @Input()
  icon: PolymorphContent<{ size: PrizmSize }> = 'triangle-down';

  @Input()
  @HostBinding('attr.data-appearance')
  appearance!: PrizmAppearance;

  @Input()
  @HostBinding('attr.data-appearance-type')
  appearanceType!: PrizmAppearanceType;

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  showLoader = false;

  @Output()
  clickIcon = new EventEmitter<void>();

  @Output()
  clickButton = new EventEmitter<void>();

  override readonly testId_ = 'ui_split_button';

  @ViewChild('buttonRef', { static: true, read: ElementRef }) buttonEl!: ElementRef;
  @ViewChild('iconButtonRef', { static: true, read: ElementRef }) iconButtonEl!: ElementRef;

  public updateZIndex(el: ElementRef, focused: boolean): void {
    el.nativeElement.style.zIndex = focused ? '1' : '';
  }
}
