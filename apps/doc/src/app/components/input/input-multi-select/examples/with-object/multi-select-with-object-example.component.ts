import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmMultiSelectIdentityMatcher,
  PrizmMultiSelectItemStringifyFunc,
  PrizmMultiSelectItemStringifyItem,
  PrizmMultiSelectSearchMatcher,
} from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCheck } from '@prizm-ui/icons/full/source';

type PrizmItem = {
  id: number;
  name: string;
};
@Component({
  selector: 'prizm-multi-select-with-object-example',
  templateUrl: './multi-select-with-object-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmInputMultiSelectWithObjectExampleComponent {
  readonly items: PrizmItem[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'США' },
    { id: 3, name: 'ОАЭ' },
  ];
  readonly selectAllItem = { id: -1, name: 'Выбрать все' };
  readonly valueControl = new UntypedFormControl([{ id: 3 }]);
  readonly searchMatcher: PrizmMultiSelectSearchMatcher<PrizmItem> = (search: string, item: PrizmItem) => {
    return item.name?.toLowerCase().includes(search.toLowerCase());
  };
  readonly identityMatcher: PrizmMultiSelectIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {
    return a?.id === b?.id;
  };
  readonly stringify: PrizmMultiSelectItemStringifyFunc<PrizmItem> = (
    item: PrizmMultiSelectItemStringifyItem<PrizmItem>
  ) => {
    return item.obj?.name;
  };

  protected readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsUserCheck);
  }
}
