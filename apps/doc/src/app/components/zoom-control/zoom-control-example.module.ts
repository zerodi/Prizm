import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomControlExampleComponent } from './zoom-control-example.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ZoomControlExampleBasicComponent } from './examples/zoom-control-example-basic/zoom-control-example-basic.component';
import {
  PrizmButtonModule,
  PrizmDataListModule,
  PrizmDropdownControllerModule,
  PrizmDropdownHostModule,
  PrizmIconModule,
  PrizmInputTextModule,
  PrizmPanelModule,
  PrizmSelectModule,
} from '@digital-plant/zui-components';

@NgModule({
  declarations: [ZoomControlExampleComponent, ZoomControlExampleBasicComponent],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmIconModule,
    RouterModule.forChild(generateRoutes(ZoomControlExampleComponent)),
    PrizmPanelModule,
    PrizmInputTextModule,
    PrizmSelectModule,
    PrizmDropdownHostModule,
    PrizmDataListModule,
    PrizmButtonModule,
    PrizmDropdownControllerModule,
  ],
})
export class ZoomControlExampleModule {}