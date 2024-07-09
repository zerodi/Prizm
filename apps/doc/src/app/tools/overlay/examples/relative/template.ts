import { Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  PrizmOverlayControl,
  PrizmOverlayOutsidePlacement,
  PrizmOverlayRelativePosition,
  PrizmOverlayService,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-overlay-relative',
  templateUrl: './template.html',
  styles: [
    `
      .box {
        background: darkseagreen;
        padding: 8px;
        display: inline-block;
        color: white;
        margin-top: 3px;
      }
    `,
  ],
})
export class PrizmOverlayExampleRelativeComponent implements OnInit, OnDestroy {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef!: ElementRef;
  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef!: TemplateRef<unknown>;

  private control?: PrizmOverlayControl;
  constructor(private readonly overlay: PrizmOverlayService) {}

  public ngOnInit(): void {
    const position = new PrizmOverlayRelativePosition({
      // Pass position placement
      placement: PrizmOverlayOutsidePlacement.BOTTOM_LEFT,
      // Pass source element
      element: this.elementRef.nativeElement,
      // On scroll re calculate position
      autoReposition: true,
    });

    this.control = this.overlay
      .position(position)
      .config({
        closeOnDocClick: true,
        backdrop: false,
      })
      // PASS TEMPLATE
      .content(this.templateRef)
      .create();
  }

  ngOnDestroy(): void {
    this.control?.destroy();
  }

  public open(): void {
    this.control?.open();
  }

  public close(): void {
    this.control?.close();
  }

  public toggle(): void {
    this.control?.toggle();
  }
}
