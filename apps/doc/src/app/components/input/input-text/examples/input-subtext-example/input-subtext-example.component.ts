import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-input-subtext-example',
  templateUrl: './input-subtext-example.component.html',
  styleUrls: ['./input-subtext-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSubtextExampleComponent {
  text = 'Введенный текст';
  maxLength = 30;
}
