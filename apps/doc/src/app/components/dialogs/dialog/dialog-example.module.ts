import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmDialogModule,
  PrizmInputCommonModule,
  PrizmInputSelectModule,
  PrizmInputTextModule,
  PrizmRadioButtonModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogExampleComponent } from './dialog-example.component';
import { PrizmDialogServiceExampleComponent } from './examples/base/dialog-base-example.component';
import { PrizmDialogServiceWithButtonsExampleComponent } from './examples/with-buttons/dialog-with-buttons-example.component';
import { PrizmDialogServiceWithParentExampleComponent } from './examples/with-parent/dialog-with-parent-example.component';
import { PrizmDialogServiceResultHandlingExampleComponent } from './examples/result/dialog-result-handling-example.component';
import { PrizmDialogOuterHeaderExampleComponent } from './examples/outher-header/dialog-outher-header-example.component';
import { PrizmDialogCustomServiceExampleComponent } from './examples/custom-service/dialog-custom-service-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PrizmInputTextModule,
    PolymorphModule,
    PrizmButtonModule,
    PrizmDialogModule,
    PrizmRadioButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(DialogExampleComponent)),
    PrizmInputCommonModule,
    PrizmInputSelectModule,
    PrizmDialogCustomServiceExampleComponent,
  ],
  declarations: [
    PrizmDialogOuterHeaderExampleComponent,
    PrizmDialogServiceExampleComponent,
    PrizmDialogServiceWithButtonsExampleComponent,
    PrizmDialogServiceWithParentExampleComponent,
    PrizmDialogServiceResultHandlingExampleComponent,
    DialogExampleComponent,
  ],
  exports: [DialogExampleComponent],
})
export class DialogExampleModule {}
