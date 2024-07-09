import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  PrizmTableCellSorter,
  PrizmTableCellSorterHandler,
  PrizmTableCellStatus,
  prizmTableDefaultColumnSort,
  PrizmTableSorterService,
} from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsMagnifyingGlass } from '@prizm-ui/icons/full/source';
import { BehaviorSubject } from 'rxjs';
import { delay, map, switchMap, tap } from 'rxjs/operators';

export interface ITableProduct {
  id?: number;
  status?: PrizmTableCellStatus;
  code: number;
  name: string;
  category: string;
  count: number;
  children?: ITableProduct[];
}
export const TABLE_EXAMPLE_SORT: ITableProduct[] = [
  {
    code: 8,
    name: 'Углексилый газ',
    category: 'Premium',
    count: 99,
  },
  {
    code: 1,
    name: 'Полиуретан',
    category: 'Premium',
    count: 3000,
  },
  {
    code: 2,
    name: 'Полиэстер',
    category: 'Active',
    count: 123,
    status: 'success',
  },
  {
    code: 3,
    name: 'Эпоксидная смола',
    category: 'Sport',
    count: 56000,
    status: 'success',
  },
  {
    code: 4,
    name: 'Пропант',
    category: 'Sport+',
    count: 539,
  },
  {
    code: 5,
    name: 'Полибетон',
    category: 'Premium',
    count: 23,
    status: 'danger',
  },
  {
    code: 6,
    name: 'Полиуретан',
    category: 'Premium',
    count: 99,
  },
  {
    code: 7,
    name: 'Пропант',
    category: 'Premium',
    count: 23,
    status: 'warning',
  },
  {
    code: 9,
    name: 'Водород',
    category: 'Premium',
    count: 23,
  },
  {
    code: 10,
    name: 'Компаунд',
    category: 'Premium',
    count: 99,
  },
];

@Component({
  selector: 'prizm-table-server-sort-example',
  templateUrl: './table-server-sort-example.component.html',
  styleUrls: ['./table-server-sort-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmTableSorterService],
})
export class TableServerSortExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];
  public sorter = prizmTableDefaultColumnSort;
  public products: ITableProduct[] = TABLE_EXAMPLE_SORT;

  public searchString: string | null = null;
  public searchAllowedProducts$$ = new BehaviorSubject<ITableProduct[]>(this.products);

  public sorter$$ = new BehaviorSubject<PrizmTableCellSorter<ITableProduct>[]>([]);
  public readonly data$ = this.sorter$$.pipe(
    tap(() => this.showLoader$.next(true)),
    switchMap((sort: PrizmTableCellSorter<ITableProduct>[]) => {
      return this.searchAllowedProducts$$.pipe(
        delay(3000),
        map(data => {
          return this.tableSorterService.sort(
            data,
            sort.map(i => ({
              ...i,
              sorter: prizmTableDefaultColumnSort as PrizmTableCellSorterHandler<ITableProduct>,
            }))
          );
        })
      );
    }),
    tap(() => this.showLoader$.next(false))
  );
  public showLoader$ = new BehaviorSubject(false);

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(private readonly tableSorterService: PrizmTableSorterService<ITableProduct>) {
    this.iconsFullRegistry.registerIcons(prizmIconsMagnifyingGlass);
  }

  public search<T extends keyof ITableProduct>(value: string, key: T): void {
    this.searchString = value.toLowerCase();

    const searchAllowedProducts = this.products.filter(product =>
      (product[key] as string).toLowerCase().includes(this.searchString as string)
    );
    this.searchAllowedProducts$$.next(searchAllowedProducts);
  }

  public updateSort(sort: PrizmTableCellSorter<any>[]): void {
    this.sorter$$.next(sort);
  }
}
