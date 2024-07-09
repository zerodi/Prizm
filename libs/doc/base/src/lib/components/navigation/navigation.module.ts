import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TuiActiveZoneModule, TuiAutoFocusModule, TuiLetModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiExpandModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiModeModule,
  TuiScrollbarModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiAccordionModule, TuiInputModule } from '@taiga-ui/kit';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { TuiScrollIntoViewLinkModule } from '../../directives/scroll-into-view/scroll-into-view.module';
import { TuiDocNavigationComponent } from './navigation.component';
import { PrizmChipsItemComponent, PrizmToggleComponent } from '@prizm-ui/components';
import { PrizmCallFuncPipe, PrizmLetDirective } from '@prizm-ui/helpers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PrizmToggleComponent,
    PolymorpheusModule,
    TuiScrollIntoViewLinkModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiActiveZoneModule,
    TuiLetModule,
    TuiModeModule,
    TuiLinkModule,
    TuiExpandModule,
    TuiHostedDropdownModule,
    TuiDropdownModule,
    TuiAccordionModule,
    PrizmCallFuncPipe,
    TuiScrollbarModule,
    TuiSvgModule,
    PrizmLetDirective,
    TuiDataListModule,
    TuiAutoFocusModule,
    PrizmChipsItemComponent,
  ],
  declarations: [TuiDocNavigationComponent],
  exports: [TuiDocNavigationComponent],
})
export class PrizmDocNavigationModule {}
