import { Story } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { getProducts } from '../data';
import { ZyfraTableComponent } from '../../zyfra-table.component';

const Template: Story<ZyfraTableComponent> = (args) => ({
  template: `
    <zyfra-button label="Reset sort" (onClick)="table.resetSort()"></zyfra-button>

    <br><br>

    <zyfra-table
      #table
      [title]="title"
      [value]="value"
      (sort)="sort($event)"
    >
      <ng-template zyfraTableTemplate="header">
        <tr>
          <th zyfraSortableColumn="code">Code <zyfra-sort-icon field="code"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="name">Name <zyfra-sort-icon field="name"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="category">Category <zyfra-sort-icon field="category"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="quantity">Quantity <zyfra-sort-icon field="quantity"></zyfra-sort-icon></th>
          <th zyfraSortableColumn="price">Price <zyfra-sort-icon field="price"></zyfra-sort-icon></th>
        </tr>
      </ng-template>

      <ng-template zyfraTableTemplate="body" let-product>
        <tr [zyfraRow]="product">
          <td>{{product.code}}</td>
          <td>{{product.name}}</td>
          <td>{{product.category}}</td>
          <td style="text-align: right;">{{product.quantity}}</td>
          <td style="text-align: right;">{{product.price | currency: 'USD'}}</td>
        </tr>
      </ng-template>
    </zyfra-table>
  `,
  component: ZyfraTableComponent,
  props: {
    ...args,
    sort: action('sort'),
  },
});

export const Sort = Template.bind({});

Sort.args = {
  value: [...getProducts()],
  title: 'Сортировка по одному столбцу',
};