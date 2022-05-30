import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
} from '@angular/core';
import {ZUI_BUTTON_OPTIONS, ZuiAppearance, ZuiAppearanceType, ZuiButtonOptions, ZuiContent} from "./button-options";
import {AbstractZuiInteractive} from "../../abstract/interactive";
import {isNativeFocused} from "../../util/is-native-focused";
import {ZuiSize} from "../../util/size-bigger";
import {ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import {watch} from "@taiga-ui/cdk";
import {takeUntil, tap} from "rxjs/operators";
import {zuiPressedObservable} from "../../directives/observables/zui-pressed-observable";

@Component({
  selector: 'zui-button,zuiButton',
  styleUrls: ['./button.component.less'],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ZuiDestroyService,
  ],
})
export class ZuiButtonComponent extends AbstractZuiInteractive {
  @Input()
  @HostBinding('attr.data-size')
  size: ZuiSize = this.options.size;

  /** can pass template or icon class */
  @Input()
  icon: ZuiContent<unknown>;

  @Input()
  @HostBinding('attr.data-appearance')
  appearance: ZuiAppearance = this.options.appearance;

  @Input()
  @HostBinding('attr.data-appearance-type')
  appearanceType: ZuiAppearanceType = this.options.appearanceType;

  @Input()
  disabled = false;

  @Input()
  showLoader = false;

  get focused(): boolean {
    return !this.showLoader && isNativeFocused(this.elementRef.nativeElement);
  }

  constructor(
    @Inject(ZUI_BUTTON_OPTIONS) private readonly options: ZuiButtonOptions,
    private readonly elementRef: ElementRef,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly destroy$: ZuiDestroyService,
  ) {
    super();

    zuiPressedObservable(elementRef.nativeElement, {
      onlyTrusted: true,
    })
      .pipe(
        tap(pressed => {this.updatePressed(pressed)}),
        watch(changeDetectorRef),
        takeUntil(destroy$)
      ).subscribe();
  }
}