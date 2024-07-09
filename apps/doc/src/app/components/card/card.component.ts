import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmShadowType, PrizmShadowTypeEnum } from '@prizm-ui/components';
import { PrizmDocCodeDemoService } from '../../code-demo/code-demo.service';

@Component({
  selector: 'prizm-card-example',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  content =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

  readonly shadowVariants: ReadonlyArray<PrizmShadowType> = [
    PrizmShadowTypeEnum.miniBottom,
    PrizmShadowTypeEnum.miniTop,
    PrizmShadowTypeEnum.miniRight,
    PrizmShadowTypeEnum.miniLeft,
    PrizmShadowTypeEnum.bigTop,
    PrizmShadowTypeEnum.bigBottom,
    PrizmShadowTypeEnum.bigLeft,
    PrizmShadowTypeEnum.bigRight,
  ];
  shadow: PrizmShadowType = PrizmShadowTypeEnum.miniBottom;
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/card-base-example.component.ts?raw'),
    HTML: import('./examples/base/card-base-example.component.html?raw'),
  };
}
