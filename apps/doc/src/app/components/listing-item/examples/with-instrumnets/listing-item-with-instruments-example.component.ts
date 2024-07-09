import { Component, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsLocationDot } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-listing-item-with-instrumnets-example',
  templateUrl: './listing-item-with-instruments-example.component.html',
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 16px;
        background-color: var(--prizm-background-fill-secondary);
      }

      prizm-listing-item {
        max-width: 300px;
      }
    `,
  ],
})
export class PrizmListingItemWithInstrumnetsExampleComponent {
  readonly cells = [
    {
      title: 'My List Item',
      disabled: false,
      selected: false,
      count: 10,
    },
    {
      title: 'My Selected List Item',
      disabled: false,
      selected: true,
      count: 9,
    },
    {
      title: 'My Disabled List Item',
      disabled: true,
      selected: false,
      count: 0,
    },
  ];

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsLocationDot);
  }
}
