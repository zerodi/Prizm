import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  PrizmOverlayControl,
  PrizmOverlayService,
  PrizmOverlaySlidePlacement,
  PrizmOverlaySlidePosition,
} from '@prizm-ui/components';

export interface TreeNode {
  readonly text: string;
  readonly icon?: string;
  readonly children?: readonly TreeNode[];
}

@Component({
  selector: 'prizm-tree-in-modal-example',
  templateUrl: './tree-in-modal-example.component.html',
  styles: [
    `
      .box {
        height: 100%;
        padding: 1rem;
        width: 100%;
        min-width: 300px;
        background-color: var(--prizm-background-fill-overlay);
        border-right: 1px solid var(--prizm-background-stroke);
        color: var(--prizm-text-icon-secondary);
      }

      .modal-button {
        width: 100%;
      }
    `,
  ],
})
export class TreeInModalExampleComponent implements OnInit, OnDestroy {
  @ViewChild('someTemplate', { read: TemplateRef, static: true })
  templateRef!: TemplateRef<unknown>;

  private control?: PrizmOverlayControl;
  constructor(private readonly overlay: PrizmOverlayService) {}

  ngOnInit() {
    const position = new PrizmOverlaySlidePosition({
      // Pass position placement
      placement: PrizmOverlaySlidePlacement.LEFT,
    });

    this.control = this.overlay
      .position(position)
      .config({
        closeOnDocClick: true,
      })
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
