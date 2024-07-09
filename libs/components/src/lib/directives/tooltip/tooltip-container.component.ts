import { Component, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { map } from 'rxjs/operators';
import { PrizmHintContainerComponent } from '../hint/hint-container.component';

@Component({
  selector: 'prizm-tooltip-container',
  template: `
    <div class="box prizm-font-main-body-14" prizmFocusTrap>
      <prizm-scrollbar visibility="hidden">
        <ng-container *polymorphOutlet="content() as data; context: context">
          <div class="content">{{ data }}</div>
        </ng-container>
      </prizm-scrollbar>

      <ng-container [ngSwitch]="position$ | async">
        <!--        <prizm-icon class="arrow-icon" *ngSwitchCase="'r'" iconClass="chevrons-menu-left"></prizm-icon>-->
        <!--        <prizm-icon class="arrow-icon" *ngSwitchCase="'rb'" iconClass="chevrons-menu-left"></prizm-icon>-->
        <!--        <prizm-icon class="arrow-icon" *ngSwitchCase="'rt'" iconClass="chevrons-menu-left"></prizm-icon>-->
        <!--        <prizm-icon class="arrow-icon" *ngSwitchCase="'l'" iconClass="chevrons-menu-right"></prizm-icon>-->
        <!--        <prizm-icon class="arrow-icon" *ngSwitchCase="'lb'" iconClass="chevrons-menu-right"></prizm-icon>-->
        <!--        <prizm-icon class="arrow-icon" *ngSwitchCase="'lt'" iconClass="chevrons-menu-right"></prizm-icon>-->
        <!--        <prizm-icon class="arrow-icon" *ngSwitchCase="'tl'" iconClass="chevrons-dropdown"></prizm-icon>-->
        <!--        <prizm-icon class="arrow-icon" *ngSwitchCase="'tr'" iconClass="chevrons-dropdown"></prizm-icon>-->
        <!--        <prizm-icon class="arrow-icon" *ngSwitchCase="'b'" iconClass="chevrons-dropup"></prizm-icon>-->
        <!--        <prizm-icon class="arrow-icon" *ngSwitchCase="'bl'" iconClass="chevrons-dropup"></prizm-icon>-->
        <!--        <prizm-icon class="arrow-icon" *ngSwitchCase="'br'" iconClass="chevrons-dropup"></prizm-icon>-->

        <prizm-icons-full class="arrow-icon" *ngSwitchCase="'r'" name="chevron-left"></prizm-icons-full>
        <prizm-icons-full class="arrow-icon" *ngSwitchCase="'rb'" name="chevron-left"></prizm-icons-full>
        <prizm-icons-full class="arrow-icon" *ngSwitchCase="'rt'" name="chevron-left"></prizm-icons-full>
        <prizm-icons-full class="arrow-icon" *ngSwitchCase="'l'" name="chevron-right"></prizm-icons-full>
        <prizm-icons-full class="arrow-icon" *ngSwitchCase="'lb'" name="chevron-right"></prizm-icons-full>
        <prizm-icons-full class="arrow-icon" *ngSwitchCase="'lt'" name="chevron-right"></prizm-icons-full>
        <prizm-icons-full class="arrow-icon" *ngSwitchCase="'tl'" name="triangle-down"></prizm-icons-full>
        <prizm-icons-full class="arrow-icon" *ngSwitchCase="'tr'" name="triangle-down"></prizm-icons-full>
        <prizm-icons-full class="arrow-icon" *ngSwitchCase="'b'" name="triangle-up"></prizm-icons-full>
        <prizm-icons-full class="arrow-icon" *ngSwitchCase="'bl'" name="triangle-up"></prizm-icons-full>
        <prizm-icons-full class="arrow-icon" *ngSwitchCase="'br'" name="triangle-up"></prizm-icons-full>
      </ng-container>
    </div>
  `,
  styleUrls: ['./tooltip-container.component.less'],
  providers: [PrizmDestroyService],
})
export class PrizmTooltipContainerComponent extends PrizmHintContainerComponent implements OnInit {
  position$ = this.prizmOverlayControl.position.pos$.pipe(map(({ extra }) => extra));

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
