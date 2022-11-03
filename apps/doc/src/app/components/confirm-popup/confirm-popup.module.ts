import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { PolymorphModule, PrizmButtonModule, PrizmConfirmPopupModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupComponent } from './confirm-popup.component';
import { PrizmConfirmPopupBaseExampleComponent } from './examples/base/confirm-popup-base-example.component';
import { PrizmConfirmPopupSomeComponent } from './examples/with-component/some.component';
import {
  PrizmConfirmPopupWithTemplateExampleComponent,
} from './examples/with-template/confirm-popup-with-template-example.component';
import {
  PrizmConfirmPopupWithComponentExampleComponent,
} from './examples/with-component/confirm-popup-with-component-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmConfirmPopupModule,
    PrizmButtonModule,
    RouterModule.forChild(generateRoutes(ConfirmPopupComponent)),
  ],
  declarations: [
    PrizmConfirmPopupWithTemplateExampleComponent,
    PrizmConfirmPopupWithComponentExampleComponent,
    PrizmConfirmPopupSomeComponent,
    PrizmConfirmPopupBaseExampleComponent,
    ConfirmPopupComponent
  ],
  exports: [ConfirmPopupComponent],
})
export class ConfirmPopupModule {}
