import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button.component';
import { PrizmOutlineButtonsExampleComponent } from './examples/outline/outline-buttons-example.component';
import { PrizmFilledButtonsExampleComponent } from './examples/filled/filled-buttons-example.component';
import { PrizmButtonComponent, PrizmCounterModule } from '@prizm-ui/components';
import { PrizmGhostButtonsExampleComponent } from './examples/ghost/ghost-buttons-example.component';
import { prizmIconsButtonsExampleComponent } from './examples/icons/icons-buttons-example.component';
import { PrizmButtonWithCounterExampleComponent } from './examples/counter/button-with-counter-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonComponent,
    PrizmCounterModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ButtonComponent)),

    PrizmFilledButtonsExampleComponent,
    PrizmOutlineButtonsExampleComponent,
    prizmIconsButtonsExampleComponent,
    PrizmGhostButtonsExampleComponent,
    PrizmButtonWithCounterExampleComponent,
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
