import { AbstractPrizmDialogService } from '../../../abstract/dialog.service';
import { Injectable } from '@angular/core';
import { PrizmDialogComponent } from './dialog.component';
import { PrizmOverlayInsidePlacement } from '../../../modules/overlay';
import { PrizmDialogOptions } from './dialog.models';

export const PRIZM_DIALOG_DEFAULT_OPTIONS: PrizmDialogOptions = {
  size: 'm',
  required: false,
  closeable: true,
  content: '',
  footer: '',
  position: PrizmOverlayInsidePlacement.CENTER,
  dismissible: true,
  header: '',
  outerHeader: '',
} as const;

@Injectable({
  providedIn: 'root',
})
export class PrizmDialogService extends AbstractPrizmDialogService<PrizmDialogOptions> {
  protected readonly component = PrizmDialogComponent;
  protected readonly defaultOptions: PrizmDialogOptions = PRIZM_DIALOG_DEFAULT_OPTIONS;
}
