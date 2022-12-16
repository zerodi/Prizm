import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import { PrizmShadowType, PrizmShadowTypeEnum } from '@prizm-ui/components';

@Component({
  selector: 'prizm-toggle-example',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShadowComponent {
  readonly valueVariants: ReadonlyArray<PrizmShadowType> = [
    PrizmShadowTypeEnum.miniBottom,
    PrizmShadowTypeEnum.miniTop,
    PrizmShadowTypeEnum.miniRight,
    PrizmShadowTypeEnum.miniLeft,
    PrizmShadowTypeEnum.bigTop,
    PrizmShadowTypeEnum.bigBottom,
    PrizmShadowTypeEnum.bigLeft,
    PrizmShadowTypeEnum.bigRight,
  ];
  value: PrizmShadowType = PrizmShadowTypeEnum.bigRight;

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/shadow-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/shadow-base-example.component.html'),
  };
}
