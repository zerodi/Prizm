import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmInputCommonModule,
  PrizmInputIconButtonModule,
  PrizmInputSelectModule,
  PrizmRadioButtonModule,
  PrizmScrollbarModule,
  PrizmSidebarModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar.component';
import { PrizmSidebarServiceExampleComponent } from './examples/base/base.component';
import { PrizmSidebarTopBottomExampleComponent } from './examples/top-bottom/top-bottom.component';
import { PrizmSidebarHiddenFooterExampleComponent } from './examples/hidden-footer/hidden-footer.component';
import { PrizmSidebarCustomCloseGuardExampleComponent } from './examples/custom-close-guard/custom-close-guard.component';
import { PrizmSidebarCustomHeaderTemplateExampleComponent } from './examples/custom-header-template/custom-header-template.component';
import { PrizmSidebarCustomButtonTemplateExampleComponent } from './examples/custom-button/custom-button-template.component';
import { PrizmSidebarCustomWrapperStyleExampleComponent } from './examples/custom-wrapper-style/custom-wrapper-style.component';
import { PrizmSidebarWithParentExampleComponent } from './examples/with-parent/with-parent.component';
import { PrizmSidebarOnlyConfirmButtonExampleComponent } from './examples/only-confirm-button/only-confirm-button.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmButtonModule,
    PrizmSidebarModule,
    PrizmInputIconButtonModule,
    PrizmScrollbarModule,
    PrizmRadioButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(SidebarComponent)),
    PrizmInputCommonModule,
    PrizmInputSelectModule,
  ],
  declarations: [
    PrizmSidebarOnlyConfirmButtonExampleComponent,
    PrizmSidebarCustomWrapperStyleExampleComponent,
    PrizmSidebarCustomHeaderTemplateExampleComponent,
    PrizmSidebarCustomCloseGuardExampleComponent,
    PrizmSidebarCustomButtonTemplateExampleComponent,
    PrizmSidebarServiceExampleComponent,
    PrizmSidebarTopBottomExampleComponent,
    PrizmSidebarHiddenFooterExampleComponent,
    PrizmSidebarWithParentExampleComponent,
    SidebarComponent,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
