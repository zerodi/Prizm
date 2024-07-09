import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PolymorphContent, PrizmContextWithImplicit, PrizmSizeL, PrizmSizeM } from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-skeleton-example',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {
  active = true;
  isText = false;
  isRounded = false;
  isShort = false;
  public readonly toggleControl = new UntypedFormControl();

  readonly iconVariants: ReadonlyArray<PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>>> =
    [
      '',
      'temp-selection-checkbox-marked-circle-chanel',
      'temp-selection-checkbox-marked-circle-chanel',
      'angle-left',
      'angle-right',
    ];
  iconOn: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>> = this.iconVariants[0];
  iconOff: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>> = this.iconVariants[0];
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/skeleton-base-example.component.ts?raw'),
    HTML: import('./examples/base/skeleton-base-example.component.html?raw'),
  };
}
