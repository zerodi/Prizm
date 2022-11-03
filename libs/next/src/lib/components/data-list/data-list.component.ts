import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, HostBinding,
  Inject,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { PZM_DATALIST_OPTIONS, PrizmDataListOptions } from './data-list-options';
import { pzmDefaultProp } from '../../decorators';
import { PrizmScrollbarVisibility } from '../scrollbar';
import {
  PZM_DROPDOWN_CONTROLLER,
  PZM_DROPDOWN_DEFAULT_MAX_HEIGHT,
  PZM_DROPDOWN_DEFAULT_MIN_HEIGHT,
  PrizmDropdownControllerDirective,
} from '../../directives/dropdown-controller';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'pzm-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'pzm-data-list',
    '[class.default]': 'defaultStyle',
  },
})
export class PrizmDataListComponent implements OnInit {
  @Input() defaultStyle = true;

  @Input()
  @pzmDefaultProp()
  iconOff = this.options.empty;

  @Input()
  @pzmDefaultProp()
  scroll: PrizmScrollbarVisibility = 'auto';

  @HostBinding('attr.testId')
  readonly testId = 'pzm_data_list';

  constructor(
    @Inject(PZM_DROPDOWN_CONTROLLER)
    @Optional()
    private readonly controller: PrizmDropdownControllerDirective | null,
    @Inject(PZM_DATALIST_OPTIONS)
    public readonly options: PrizmDataListOptions,
    private readonly destroy$: PrizmDestroyService,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  get minDropdownHeight(): string {
    return (this.controller?.minHeight ?? PZM_DROPDOWN_DEFAULT_MIN_HEIGHT) + 'px';
  }

  get maxDropdownHeight(): string {
    return (this.controller?.maxHeight ?? PZM_DROPDOWN_DEFAULT_MAX_HEIGHT) + 'px';
  }

  ngOnInit(): void {
    this.controller?.changes$
      .pipe(
        tap(() => this.cdRef.markForCheck()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}

