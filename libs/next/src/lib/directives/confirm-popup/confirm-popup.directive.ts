/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { PrizmConfirmPopupContainerComponent } from './confirm-popup-container.component';
import {
  PZM_CONFIRM_POPUP_OPTIONS,
  PrizmConfirmPopupButton,
  PrizmConfirmPopupContext,
  PrizmConfirmPopupOptions,
} from './confirm-popup-options';
import { pzmDefaultProp, pzmRequiredSetter } from '../../decorators';
import { PolymorphContent } from '../polymorph';
import { pzmGenerateId } from '../../util';
import { PrizmConfirmDialogButton, PrizmConfirmDialogResultDefaultType } from '../../components/dialogs/confirm-dialog';
import { PrizmAppearance, PrizmAppearanceType } from '../../types';
import { PZM_HINT_OPTIONS, PrizmHintOptions } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';

@Directive({
    selector: '[pzmConfirmPopup]:not(ng-container)',
    providers: [
      PrizmDestroyService,
      {
        provide: PZM_HINT_OPTIONS,
        useExisting: forwardRef(() => PZM_CONFIRM_POPUP_OPTIONS)
      }
    ],
    exportAs: 'pzmConfirmPopup'
})
export class PrizmConfirmPopupDirective<T extends Record<string, unknown>> extends PrizmHintDirective<PrizmConfirmPopupOptions> {
  @Input('pzmConfirmPopupMode')
  @pzmDefaultProp()
  override pzmHintMode: PrizmHintOptions['mode'] = this.options.mode;

  @Input('pzmAutoReposition')
  @pzmDefaultProp()
  override pzmAutoReposition: PrizmHintOptions['autoReposition'] = this.options.autoReposition;

  @Input('pzmConfirmPopupDirection')
  @pzmDefaultProp()
  override pzmHintDirection: PrizmHintOptions['direction'] = this.options.direction;

  @Input('pzmConfirmPopupId')
  @pzmDefaultProp()
  override pzmHintId: string = 'hintId_' + pzmGenerateId();

  @Input('pzmConfirmPopupShowDelay')
  @pzmDefaultProp()
  override pzmHintShowDelay: PrizmHintOptions['showDelay'] = this.options.showDelay;

  @Input('pzmConfirmPopupHideDelay')
  @pzmDefaultProp()
  override pzmHintHideDelay: PrizmHintOptions['hideDelay'] = this.options.hideDelay;

  @Input()
  @pzmDefaultProp()
  public size = this.options.size;

  @Input('pzmConfirmPopupHost')
  @pzmDefaultProp()
  override pzmHintHost: HTMLElement | null = null;

  @Output()
  @pzmDefaultProp()
  public completeWith = new EventEmitter<PrizmConfirmDialogResultDefaultType | unknown>();

  @Input('pzmConfirmPopup')
  @pzmRequiredSetter()
  override set pzmHint(value: PolymorphContent | null) {
    if (!value) {
      this.content = '';
      return;
    }

    this.content = value;
  }

  @Input()
  @pzmDefaultProp()
  pzmConfirmPopupTitle = '';

  @Input() confirmButton?: PrizmConfirmPopupButton | string;
  @Input() supportButton?: PrizmConfirmPopupButton | string;
  @Input() cancelButton?: PrizmConfirmPopupButton | string;


  protected override readonly containerComponent = PrizmConfirmPopupContainerComponent;
  protected override readonly onHoverActive = false;

  @HostListener('document:click', ['$event.target']) public onClick(target: HTMLElement): void {
    this.show$.next(this.elementRef.nativeElement.contains(target));
  }

  protected override getContext(): PrizmConfirmPopupContext {
    const context = {
      size: this.size,
      mode: this.pzmHintMode,
      reposition: this.pzmAutoReposition,
      direction: this.pzmHintDirection,
      completeWith: (value: PrizmConfirmPopupButton) => {
        this.completeWith.next(value);
      },
      id: this.pzmHintId,
      showDelay: this.pzmHintShowDelay,
      hideDelay: this.pzmHintHideDelay,
      title: this.pzmConfirmPopupTitle,
      host: this.host,
      confirmButton: this.confirmButton,
      supportButton: this.supportButton,
      cancelButton: this.cancelButton,
    } as PrizmConfirmPopupContext;
    this.safeUpdateButtonsWithDefaultStyles(context);
    return context;
  }


  private generateButton(
    options: PrizmConfirmPopupContext,
    button: PrizmConfirmDialogButton | string,
    defaultText: string,
    defaultComplete: PrizmConfirmDialogResultDefaultType,
    defaultAppearance?: PrizmAppearance,
    defaultAppearanceType?: PrizmAppearanceType,
  ): PrizmConfirmDialogButton {
    const buttonText = (typeof button === 'string'
        ? button
        : button?.text
    ) ?? defaultText;
    const btn = ((typeof button === 'string' ? {} : button) ?? {}) as Partial<PrizmConfirmDialogButton>;

    const result =  {
      ...btn,
      text: buttonText,
      size: btn.size ?? options.size,
      // TODO remove any type
      action: (ctx: any): void => {
        if (typeof btn.action === 'function') btn.action(ctx as any);
        options.completeWith(defaultComplete);
      },
      appearance: btn.appearance ?? defaultAppearance,
      appearanceType: btn.appearanceType ?? defaultAppearanceType
    };

    return result;
  }

  private safeUpdateButtonsWithDefaultStyles(
    options: PrizmConfirmPopupContext
  ): void {
    const supportButton = this.generateButton(
      options,
      options.supportButton,
      'Выйти без сохранения',
      PrizmConfirmDialogResultDefaultType.support,
      'danger',
      'outline'
    );

    const confirmButton = this.generateButton(
      options,
      options.confirmButton,
      'Подтвердить',
      PrizmConfirmDialogResultDefaultType.confirmed,
      'primary'
    );

    const cancelButton = this.generateButton(
      options,
      options.cancelButton,
      'Отмена',
      PrizmConfirmDialogResultDefaultType.cancel,
      'secondary',
      'ghost'
    );

    options.confirmButton = confirmButton;
    options.cancelButton = cancelButton;
    options.supportButton = supportButton;
  }
}
