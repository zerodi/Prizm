import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { PrizmDay, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-time-required-example',
  templateUrl: './input-layout-date-time-required-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeRequiredExampleComponent {
  public readonly value = new UntypedFormControl(
    [new PrizmDay(2017, 2, 15), new PrizmTime(12, 30)],
    [Validators.required]
  );

  public readonly customErrorValue = new UntypedFormControl(
    [new PrizmDay(2017, 2, 15), new PrizmTime(12, 30)],
    [Validators.required]
  );
}
