import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmButtonComponent } from '../../../button';
import { PrizmInputCommonModule } from '../../../input/common/input-common.module';
import { PrizmInputTextComponent } from '../../../input';

@Component({
  selector: 'prizm-navigation-menu-search',
  templateUrl: './prizm-navigation-menu-search.component.html',
  styleUrls: ['./prizm-navigation-menu-search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
  standalone: true,
  imports: [PrizmButtonComponent, ReactiveFormsModule, PrizmInputCommonModule, PrizmInputTextComponent],
})
export class PrizmNavigationMenuSearchComponent extends PrizmAbstractTestId implements AfterViewInit {
  @ViewChild('searchInput', {
    read: ElementRef,
  })
  public searchInput!: ElementRef<HTMLInputElement>;

  @Output() searchChange = new EventEmitter<string>();

  @Input() searchDebounce!: number;

  @Input() placeholder!: string;
  override readonly testId_ = 'ui_navigation_menu_search';

  public searchFormControl: UntypedFormControl = new UntypedFormControl('');

  constructor(private destroy$: PrizmDestroyService) {
    super();
  }

  ngAfterViewInit(): void {
    this.searchFormControl.valueChanges
      .pipe(debounceTime(this.searchDebounce || 0), takeUntil(this.destroy$))
      .subscribe(this.searchChange);

    this.searchInput.nativeElement.focus();
  }
}
