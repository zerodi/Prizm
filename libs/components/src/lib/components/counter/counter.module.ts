import { NgModule } from '@angular/core';
import { PrizmCounterDirective } from './counter.directive';
import { PrizmCounterComponent } from './counter.component';

/**
 * use standalone
 * */
@NgModule({
  imports: [PrizmCounterDirective, PrizmCounterComponent],
  exports: [PrizmCounterDirective, PrizmCounterComponent],
})
export class PrizmCounterModule {}
