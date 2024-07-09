import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PrizmAppearance,
  PrizmAppearanceType,
  PrizmBaseDialogContext,
  PrizmDialogOptions,
  PrizmDialogService,
  PrizmDialogSize,
  PrizmOverlayInsidePlacement,
  PrizmOverscrollMode,
  PrizmScrollbarVisibility,
  PrizmSize,
} from '@prizm-ui/components';
import { generatePolymorphVariants } from '../../../util';
import { prizmPure } from '@prizm-ui/core';
import { PRIZM_ICONS_NAMES } from '@prizm-ui/icons/base/names';

@Component({
  selector: 'prizm-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExampleComponent {
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public pseudoState = '';
  public focusable = false;

  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;
  public readonly visibilityVariants: ReadonlyArray<PrizmScrollbarVisibility> = ['auto', 'hidden', 'visible'];
  public visibility: PrizmScrollbarVisibility = this.visibilityVariants[0];

  iconVariants: ReadonlyArray<PolymorphContent<{ size: PrizmSize }>> = ['', ...PRIZM_ICONS_NAMES];
  icon: PolymorphContent<{ size: PrizmSize }> = this.iconVariants[0];
  iconRight: PolymorphContent<{ size: PrizmSize }> = this.iconVariants[0];
  appearanceVariants: ReadonlyArray<PrizmAppearance> = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ];
  appearance: PrizmAppearance = this.appearanceVariants[0];

  appearanceTypeVariants: ReadonlyArray<PrizmAppearanceType> = ['fill', 'outline', 'ghost'];
  appearanceType: PrizmAppearanceType = this.appearanceTypeVariants[0];
  disabled = false;
  showLoader = false;

  public overscrollVariants: ReadonlyArray<PrizmOverscrollMode> = ['scroll', 'all', 'none'];
  public overscroll: PrizmOverscrollMode = this.overscrollVariants[0];
  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(PrizmOverlayInsidePlacement);
  public position: PrizmOverlayInsidePlacement = PrizmOverlayInsidePlacement.CENTER;
  public backdrop = false;
  public height = 'auto';
  public width = '500px';
  public closeWord = 'Продолжить';
  public sizeVariants: PrizmDialogSize[] = ['m', 'l'];
  public size: PrizmDialogSize = 'm';
  public closeable = true;
  public header = 'Static_title_h3 - 16 Medium';
  public content = 'Базовый текст для диалога';
  public footer: PolymorphContent<PrizmBaseDialogContext<any, PrizmDialogOptions<any, any>>> | null = null;
  public dismissible = true;

  public readonly exampleModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public readonly exampleBasic: TuiDocExample = {
    TypeScript: import('./examples/base/dialog-base-example.component.ts?raw'),
    HTML: import('./examples/base/dialog-base-example.component.html?raw'),
  };

  public readonly exampleCustomService: TuiDocExample = {
    TypeScript: import('./examples/custom-service/dialog-custom-service-example.component.ts?raw'),
    HTML: import('./examples/custom-service/dialog-custom-service-example.component.html?raw'),
    Service: import('./examples/custom-service/my-custom-service.ts?raw'),
  };

  public readonly exampleWightOuterHeader: TuiDocExample = {
    TypeScript: import('./examples/outher-header/dialog-outher-header-example.component.ts?raw'),
    HTML: import('./examples/outher-header/dialog-outher-header-example.component.html?raw'),
  };

  public readonly exampleWithButtons: TuiDocExample = {
    TypeScript: import('./examples/with-buttons/dialog-with-buttons-example.component.ts?raw'),
    HTML: import('./examples/with-buttons/dialog-with-buttons-example.component.html?raw'),
  };

  public readonly exampleWithParent: TuiDocExample = {
    TypeScript: import('./examples/with-parent/dialog-with-parent-example.component.ts?raw'),
    HTML: import('./examples/with-parent/dialog-with-parent-example.component.html?raw'),
  };

  public readonly exampleResulthandling: TuiDocExample = {
    TypeScript: import('./examples/result/dialog-result-handling-example.component.ts?raw'),
    HTML: import('./examples/result/dialog-result-handling-example.component.html?raw'),
  };

  constructor(@Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService) {}

  @prizmPure
  public generatePolymorphVariants(...content: PolymorphContent[]): any[] {
    return generatePolymorphVariants(...content);
  }

  public show(): void {
    this.dialogService
      .open(this.content, {
        closeable: this.closeable,
        backdrop: this.backdrop,
        header: this.header,
        width: this.width,
        footer: this.footer,
        height: this.height,
        overscroll: this.overscroll,
        scrollbarVisibility: this.visibility,
        position: this.position,
        closeWord: this.closeWord,
        size: this.size,
        dismissible: this.dismissible,
      })
      .subscribe(result => console.log('result from dialog', { result }));
  }
}
