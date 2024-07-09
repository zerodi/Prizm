import { PolymorphContent } from '../../directives/polymorph';

export enum PrizmToastPosition {
  TOP_MIDDLE = 'tm',
  TOP_LEFT = 'tl',
  TOP_RIGHT = 'tr',
  BOTTOM_MIDDLE = 'bm',
  BOTTOM_LEFT = 'bl',
  BOTTOM_RIGHT = 'br',
}

export type PRIZM_TOAST_ID = string;
export type PRIZM_TOAST_CONTAINER_ID = string;

export type PrizmToastAppearance = 'info' | 'success' | 'warning' | 'danger' | 'secondary';

export type PrizmToastOptions = {
  position?: PrizmToastPosition | PRIZM_TOAST_CONTAINER_ID;
  /* weight - use for DESC sorting */
  weight?: number;
  title?: PolymorphContent;
  data?: Record<string, unknown>;
  appearance?: PrizmToastAppearance;
  id?: PRIZM_TOAST_ID;
  timer?: number;
  autoClose?: boolean;
  context?: Record<string, unknown>;
  show?: boolean;
  isPlatform?: boolean;
};
