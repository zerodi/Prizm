import { Component } from '@angular/core';

@Component({
  selector: 'pzm-confirm-popup-some-component',
  template: `
    <div>Header</div>
    <div class="button-box">
      <button pzmButton *ngFor="let item of items">{{ item }}</button>
    </div>
    <div>Footer</div>
  `,
  styles: [
    `
      .button-box {
        display: grid;
        grid-template-rows: 1fr;
        gap: 8px;
      }

      button {
        width: 100%;
      }
    `,
  ],
})
export class PrizmConfirmPopupSomeComponent {
  readonly items = ['Edit', 'Download', 'Rename', 'Edit', 'Download', 'Rename', 'Delete'];
}
