import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PRIZM_TOOLTIP_DEFAULT_OPTIONS,
  PrizmAppearance,
  PrizmAppearanceType,
  PrizmDialogSize,
  PrizmOverlayOutsidePlacement,
  PrizmSize,
  PrizmTooltipOptions,
} from '@prizm-ui/components';
import { PRIZM_ICONS_NAMES } from '@prizm-ui/icons/base/names';

@Component({
  selector: 'prizm-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipExampleComponent {
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public pseudoState = '';
  public focusable = false;
  public sizeVariants: PrizmDialogSize[] = ['m', 'l'];
  size: PrizmDialogSize = this.sizeVariants[0];
  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;

  iconVariants: ReadonlyArray<PolymorphContent<{ size: PrizmSize }>> = ['', ...PRIZM_ICONS_NAMES];
  icon: PolymorphContent<{ size: PrizmSize }> = this.iconVariants[0];
  iconRight: PolymorphContent<{ size: PrizmSize }> = this.iconVariants[0];
  appearanceVariants: ReadonlyArray<PrizmAppearance> = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ];
  appearance: PrizmAppearance = this.appearanceVariants[0];

  appearanceTypeVariants: ReadonlyArray<PrizmAppearanceType> = ['fill', 'outline', 'ghost'];
  appearanceType: PrizmAppearanceType = this.appearanceTypeVariants[0];
  disabled = false;
  showLoader = false;
  public testIdPostfix!: string;
  public content = 'Тестовое содержимое';
  public prizmAutoReposition = false;
  public prizmTooltipShow = true;
  public prizmTooltipCanShow = true;

  public readonly prizmTooltipDirectionVariants: ReadonlyArray<PrizmTooltipOptions['direction']> =
    Object.values(PrizmOverlayOutsidePlacement);

  public prizmTooltipDirection: PrizmTooltipOptions['direction'] = PRIZM_TOOLTIP_DEFAULT_OPTIONS.direction;

  public readonly prizmTooltipThemeVariants: ReadonlyArray<PrizmTooltipOptions['theme']> = [
    null,
    'dark',
    'light',
  ];
  public prizmTooltipTheme: PrizmTooltipOptions['theme'] = PRIZM_TOOLTIP_DEFAULT_OPTIONS.theme;

  public prizmTooltipId = 'tooltip-id';

  public prizmTooltipShowDelay: number = PRIZM_TOOLTIP_DEFAULT_OPTIONS.showDelay;

  public prizmTooltipHideDelay: number = PRIZM_TOOLTIP_DEFAULT_OPTIONS.hideDelay;

  public prizmTooltipHost: HTMLElement | null = null;

  public readonly prizmTooltipVariants = ['Tooltip'];

  public prizmTooltip: PolymorphContent = this.prizmTooltipVariants[0];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/tooltip-base-example.component.ts?raw'),
    HTML: import('./examples/base/tooltip-base-example.component.html?raw'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('./examples/with-template/tooltip-with-template-example.component.ts?raw'),
    HTML: import('./examples/with-template/tooltip-with-template-example.component.html?raw'),
  };

  readonly exampleWithContext: TuiDocExample = {
    TypeScript: import('./examples/with-custom-context/tooltip-with-custom-context-example.component.ts?raw'),
    HTML: import('./examples/with-custom-context/tooltip-with-custom-context-example.component.html?raw'),
  };

  readonly exampleWithComponent: TuiDocExample = {
    TypeScript: import('./examples/with-component/tooltip-with-component-example.component.ts?raw'),
    HTML: import('./examples/with-component/tooltip-with-component-example.component.html?raw'),
  };
}
