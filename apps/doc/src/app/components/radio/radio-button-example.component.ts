import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { UntypedFormControl } from '@angular/forms';

type TRadioButtonSize = 'm' | 'l' | 's';

@Component({
  templateUrl: './radio-button-example.component.html',
  styleUrls: ['./radio-button-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesRadioButtonComponent {
  public value = 'property1';
  public label = 'Свойство 1';
  public name = 'name';
  public disabled = false;
  public control = new UntypedFormControl();
  public sizeVariants: TRadioButtonSize[] = ['m', 'l', 's'];
  public size: TRadioButtonSize = this.sizeVariants[1];

  readonly exampleBasicRadio: TuiDocExample = {
    TypeScript: import('./examples/radio-button-basic-example/radio-button-basic-example.component?raw'),
    HTML: import('./examples/radio-button-basic-example/radio-button-basic-example.component.html?raw'),
    LESS: import('./examples/radio-button-basic-example/radio-button-basic-example.component.less?raw'),
  };
  readonly exampleSmallRadio: TuiDocExample = {
    TypeScript: import('./examples/small-example/radio-button-small-example.component?raw'),
    HTML: import('./examples/small-example/radio-button-small-example.component.html?raw'),
    LESS: import('./examples/small-example/radio-button-small-example.component.less?raw'),
  };
  readonly exampleBigRadio: TuiDocExample = {
    TypeScript: import('./examples/big-example/radio-button-big-example.component?raw'),
    HTML: import('./examples/big-example/radio-button-big-example.component.html?raw'),
    LESS: import('./examples/big-example/radio-button-big-example.component.less?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
