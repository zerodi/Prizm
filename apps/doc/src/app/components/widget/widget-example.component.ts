import { ChangeDetectionStrategy, Component, TemplateRef, inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PolymorphContent, PrizmWidgetIcons } from '@prizm-ui/components';
import { prizmPure } from '@prizm-ui/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCircle, prizmIconsUsersKey } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-widget-example',
  templateUrl: './widget-example.component.html',
  styleUrls: ['./widget-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetExampleComponent {
  public header = 'Содержимое виджета';
  public title = 'Заголовок виджета';
  public icons: PrizmWidgetIcons[] = [];
  public iconVariants: ReadonlyArray<PolymorphContent | null> = [
    ['user-circle', 'user-circle', 'users-key'],
    '',
    ['users-key'],
  ];
  public content = 'Содержимое виджета';

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/widget-base-example.component.ts?raw'),
    HTML: import('./examples/base/widget-base-example.component.html?raw'),
  };

  public readonly exampleWithButtons: TuiDocExample = {
    TypeScript: import('./examples/with-buttons/widget-with-buttons-example.component.ts?raw'),
    HTML: import('./examples/with-buttons/widget-with-buttons-example.component.html?raw'),
  };

  public readonly exampleWithTemplates: TuiDocExample = {
    TypeScript: import('./examples/with-templates/widget-with-templates-example.component.ts?raw'),
    HTML: import('./examples/with-templates/widget-with-templates-example.component.html?raw'),
  };

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsUserCircle, prizmIconsUsersKey);
  }

  @prizmPure
  public getIconVariants(...templates: TemplateRef<unknown>[]): ReadonlyArray<PolymorphContent | null> {
    return [...templates, ...this.iconVariants];
  }
  @prizmPure
  public getHeaderVariants(...templates: TemplateRef<unknown>[]): ReadonlyArray<PolymorphContent | null> {
    return [null, ...templates];
  }
}
