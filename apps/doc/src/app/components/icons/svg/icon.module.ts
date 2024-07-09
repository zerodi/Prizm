import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';
import { PrizmIconSvgBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PrizmIconsSvgComponent } from '@prizm-ui/icons';
import { PrizmIconSvgSvgExampleComponent } from './examples/svg/icon-svg-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmIconsSvgComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(IconComponent)),
  ],
  declarations: [PrizmIconSvgBaseExampleComponent, PrizmIconSvgSvgExampleComponent, IconComponent],
  exports: [IconComponent],
})
export class IconModule {}
