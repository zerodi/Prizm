import { NgModule } from '@angular/core';
import { PolymorphOutletDirective } from './directives/outlet';
import { PolymorphTemplate } from './directives/template';

@NgModule({
  imports: [PolymorphOutletDirective, PolymorphTemplate],
  exports: [PolymorphOutletDirective, PolymorphTemplate],
})
export class PolymorphModule {}
