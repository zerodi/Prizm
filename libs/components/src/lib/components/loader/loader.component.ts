import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  TemplateRef,
} from '@angular/core';
import { prizmIsNativeFocusedIn } from '../../util/is-native-focused-in';
import { prizmBlurNativeFocused } from '../../util/blur-native-focused';
import { PrizmSize, prizmSizeBigger } from '../../util/size-bigger';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'prizm-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class PrizmLoaderComponent extends PrizmAbstractTestId {
  @Input()
  size: PrizmSize = 's';

  @Input()
  inheritColor = false;

  @Input()
  overlay = false;

  @Input()
  textContent: TemplateRef<unknown> | null = null;

  @Input()
  set showLoader(value: BooleanInput) {
    if (value && this.focused) {
      prizmBlurNativeFocused(this.documentRef);
    }

    this.loading = coerceBooleanProperty(value);
  }

  @HostBinding('class._loading')
  loading = true;

  override readonly testId_ = 'ui_loader';

  constructor(
    @Inject(DOCUMENT) private readonly documentRef: Document,
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>
  ) {
    super();
  }

  get hasOverlay(): boolean {
    return this.overlay && this.loading;
  }

  get hasText(): boolean {
    return !!this.textContent;
  }

  get isHorizontal(): boolean {
    return !prizmSizeBigger(this.size);
  }

  get focused(): boolean {
    return prizmIsNativeFocusedIn(this.elementRef.nativeElement);
  }
}
