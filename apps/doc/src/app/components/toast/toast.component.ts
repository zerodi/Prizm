import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PrizmToastAppearance,
  PrizmToastOptions,
  PrizmToastPosition,
  PrizmToastService,
} from '@prizm-ui/components';
import { prizmPure } from '@prizm-ui/core';

@Component({
  selector: 'prizm-example-example',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleMessageInfo: TuiDocExample = {
    TypeScript: import('./examples/message-info-example/message-info-example.component.ts?raw'),
    HTML: import('./examples/message-info-example/message-info-example.component.html?raw'),
  };

  readonly exampleMessageWarning: TuiDocExample = {
    TypeScript: import('./examples/message-warning-example/message-warning-example.component.ts?raw'),
    HTML: import('./examples/message-warning-example/message-warning-example.component.html?raw'),
  };

  readonly exampleMessageDanger: TuiDocExample = {
    TypeScript: import('./examples/message-danger-example/message-danger-example.component.ts?raw'),
    HTML: import('./examples/message-danger-example/message-danger-example.component.html?raw'),
  };

  readonly exampleMessageSuccess: TuiDocExample = {
    TypeScript: import('./examples/message-success-example/message-success-example.component.ts?raw'),
    HTML: import('./examples/message-success-example/message-success-example.component.html?raw'),
  };

  readonly exampleMessageSecondary: TuiDocExample = {
    TypeScript: import('./examples/message-secondary-example/message-secondary-example.component.ts?raw'),
    HTML: import('./examples/message-secondary-example/message-secondary-example.component.html?raw'),
  };

  readonly exampleToast: TuiDocExample = {
    TypeScript: import('./examples/toast-example/toast-example.component.ts?raw'),
    HTML: import('./examples/toast-example/toast-example.component.html?raw'),
  };

  readonly exampleInnerHtml: TuiDocExample = {
    TypeScript: import('./examples/inner-html/toast-inner-html-example.component.ts?raw'),
    HTML: import('./examples/inner-html/toast-inner-html-example.component.html?raw'),
  };

  readonly appearanceVariants: ReadonlyArray<PrizmToastAppearance> = [
    'info',
    'success',
    'warning',
    'danger',
    'secondary',
  ];
  appearance: PrizmToastAppearance = this.appearanceVariants[0];

  readonly containerId = 'test-inline-container';
  readonly positionVariants: ReadonlyArray<PrizmToastOptions['position']> = [
    PrizmToastPosition.TOP_RIGHT,
    PrizmToastPosition.TOP_LEFT,
    PrizmToastPosition.TOP_MIDDLE,
    PrizmToastPosition.BOTTOM_RIGHT,
    PrizmToastPosition.BOTTOM_LEFT,
    PrizmToastPosition.BOTTOM_MIDDLE,
    this.containerId,
  ];
  position: PrizmToastOptions['position'] = this.positionVariants[0];
  timer = 3000;
  isPlatform = false;
  id = '';

  title: PolymorphContent = 'Заголовок';
  content: PolymorphContent = 'Содержимое';

  constructor(private readonly toastService: PrizmToastService) {}

  @prizmPure
  public getContentVariants(template: TemplateRef<Record<string, unknown>>): readonly PolymorphContent[] {
    return [
      'Привет',
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      'Lorem',
      template,
    ];
  }

  public showToast(): void {
    this.toastService.create(this.content, {
      timer: this.timer,
      appearance: this.appearance,
      position: this.position,
      isPlatform: this.isPlatform,
      id: this.id,
      title: this.title,
    });
  }
}
