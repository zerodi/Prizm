import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PolymorphContent, PrizmAppearance, PrizmAppearanceType, PrizmSize } from '@prizm-ui/components';
import { PRIZM_ICONS_NAMES } from '@prizm-ui/icons/base/names';
import { prizmIconsFullProvideLazyLoader } from '@prizm-ui/icons-loader/full';

@Component({
  selector: 'prizm-split-button-example',
  templateUrl: './split-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .box {
        margin-bottom: 2rem;

        .title {
          margin-bottom: 0.5rem;
        }

        .content {
          display: flex;
          gap: 1rem;
        }
      }
    `,
  ],
  providers: [prizmIconsFullProvideLazyLoader()],
})
export class SplitButtonComponent {
  sizeVariants: ReadonlyArray<PrizmSize> = ['s', 'm', 'xm', 'l', 'xl'];
  size: PrizmSize = this.sizeVariants[0];

  public clickIcon!: void;
  public clickButton!: void;

  iconVariants: ReadonlyArray<PolymorphContent<{ size: PrizmSize }>> = [...PRIZM_ICONS_NAMES];
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
  content = 'Button Name';
  showLoader = false;

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleSplit: TuiDocExample = {
    TypeScript: import('./examples/split/split-buttons-example.component.ts?raw'),
    HTML: import('./examples/split/split-buttons-example.component.html?raw'),
  };

  readonly exampleWithDropdown: TuiDocExample = {
    TypeScript: import('./examples/with-dropdown/split-buttons-with-dropdown-example.component?raw'),
    HTML: import('./examples/with-dropdown/split-buttons-with-dropdown-example.component.html?raw'),
    Module: import('./examples/with-dropdown/split-buttons-with-dropdown-example.module?raw'),
  };
}
