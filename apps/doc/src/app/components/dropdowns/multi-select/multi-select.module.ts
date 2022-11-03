import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { MultiSelectComponent } from './multi-select.component';
import { PolymorphModule, PrizmIconModule, PrizmMultiSelectModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  PrizmMultiSelectWithTemplateExampleComponent,
} from './examples/with-template/multi-select-with-template-example.component';
import { PrizmMultiSelectBaseExampleComponent } from './examples/base/multi-select-base-example.component';
import {
  PrizmMultiSelectWithSearchExampleComponent,
} from './examples/with-search/multi-select-with-search-example.component';
import {
  PrizmMultiSelectWithObjectExampleComponent,
} from './examples/with-object/multi-select-with-object-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmMultiSelectModule,
    PrizmIconModule,
    RouterModule.forChild(generateRoutes(MultiSelectComponent)),
  ],
  declarations: [
    PrizmMultiSelectBaseExampleComponent,
    PrizmMultiSelectWithSearchExampleComponent,
    PrizmMultiSelectWithTemplateExampleComponent,
    PrizmMultiSelectWithObjectExampleComponent,
    MultiSelectComponent
  ],
  exports: [MultiSelectComponent],
})
export class MultiSelectModule {}
