import { Directive, HostBinding, Input } from '@angular/core';
import { EditableRow } from 'primeng/table';

@Directive({
  selector: '[pzmEditableRow]',
  providers: [{ provide: EditableRow, useExisting: PrizmEditableRowDirective }],
})
export class PrizmEditableRowDirective extends EditableRow {
  /* eslint-disable @angular-eslint/no-input-rename */
  @Input('pzmEditableRowDisabled') override pEditableRowDisabled: boolean;
  @Input('pzmEditableRow') override data: any;
  @HostBinding('attr.editable') editable = true;
}
