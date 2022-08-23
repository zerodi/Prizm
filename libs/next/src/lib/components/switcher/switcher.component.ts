import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ISwitcher, SwitcherSize, SwitcherType } from './switcher.interface';

@Component({
  selector: 'zui-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherComponent {
  @Input() public size: SwitcherSize = 'l';
  @Input() public type: SwitcherType = 'inner';
  @Input() public switchers: ISwitcher[] = [];
  @Input() public selectedSwitcherIdx = 0;

  @Output() public switcherSelection: EventEmitter<number> = new EventEmitter();

  public selectSwitcher(idx: number): void {
    if (this.selectedSwitcherIdx !== idx) {
      this.switcherSelection.emit(idx);
      this.selectedSwitcherIdx = idx;
    }
  }
}