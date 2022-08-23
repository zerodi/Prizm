import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ZuiMenuItem } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-nav-menu-basic-example',
  templateUrl: './nav-menu-basic-example.component.html',
  styleUrls: ['./nav-menu-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuBasicExampleComponent {
  public navigationList: ZuiMenuItem[] = [
    {
      label: 'А приложение 1',
    },
    {
      label: 'А приложение 2',
    },
    {
      label: 'Приложение 1',
    },
    {
      label: 'Приложение 2',
    },
    {
      label: 'Приложение 3',
    },
    {
      label: 'Приложение 4',
    },
  ];
}