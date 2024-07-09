import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { PrizmI18nService, PrizmInputValidationTexts } from '@prizm-ui/components';
import { InputValidationCustomTextsService } from './input-validation-custom-texts.service';

@Component({
  selector: 'prizm-input-validation-custom-example',
  templateUrl: './input-validation-custom-example.component.html',
  styleUrls: ['./input-validation-custom-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmI18nService,
    {
      provide: PrizmInputValidationTexts,
      useClass: InputValidationCustomTextsService,
    },
  ],
})
export class InputValidationCustomExampleComponent {
  public requiredInputControl = new UntypedFormControl('Значение', Validators.required);
}
