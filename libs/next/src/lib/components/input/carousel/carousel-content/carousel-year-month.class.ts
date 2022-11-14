import { pzmDefaultCarouselControlsState, PrizmCarouselContent } from './carousel-content.interface';

export type PrizmCarouselPrizmCarouselYearMonthValue = { year: number; month: number };

export class PrizmCarouselYearMonth implements PrizmCarouselContent {
  currentValue: PrizmCarouselPrizmCarouselYearMonthValue = undefined;

  public min: PrizmCarouselPrizmCarouselYearMonthValue = { month: 1, year: Number.NEGATIVE_INFINITY };
  public max: PrizmCarouselPrizmCarouselYearMonthValue = { month: 12, year: Number.POSITIVE_INFINITY };

  constructor(min?: PrizmCarouselPrizmCarouselYearMonthValue, max?: PrizmCarouselPrizmCarouselYearMonthValue) {
    if (min) {
      this.min = min;
    }

    if (max) {
      this.min = min;
    }
  }

  public controlsState = { ...pzmDefaultCarouselControlsState };

  public setCurrentValue(element: PrizmCarouselPrizmCarouselYearMonthValue): void {
    this.currentValue = element;
    this.updateControlsState();
  }

  get currentValueNotSet(): boolean {
    return this.currentValue === undefined;
  }

  public left(): void {
    const newValue = { ...this.currentValue, year: this.currentValue.year - 1 };
    if (['gt', 'eq'].includes(this.compare(newValue, this.min))) {
      this.currentValue = { ...newValue };
    } else {
      this.currentValue = { ...this.min };
    }

    this.updateControlsState();
  }

  public stepLeft(): void {
    if (this.currentValue.month === 1) {
      this.currentValue = { year: this.currentValue.year - 1, month: 12 };
    } else {
      this.currentValue = { ...this.currentValue, month: this.currentValue.month - 1 };
    }

    this.updateControlsState();
  }

  public stepRight(): void {
    if (this.currentValue.month === 12) {
      this.currentValue = { year: this.currentValue.year + 1, month: 1 };
    } else {
      this.currentValue = { ...this.currentValue, month: this.currentValue.month + 1 };
    }

    this.updateControlsState();
  }

  public right(): void {
    const newValue = { ...this.currentValue, year: this.currentValue.year + 1 };
    if (['lt', 'eq'].includes(this.compare(newValue, this.max))) {
      this.currentValue = { ...newValue };
    } else {
      this.currentValue = { ...this.max };
    }

    this.updateControlsState();
  }

  private updateControlsState(): void {
    if (this.currentValue === undefined) {
      this.controlsState.leftCtrlDisabled = true;
      this.controlsState.stepleftCtrlDisabled = true;
      this.controlsState.stepRightCtrlDisabled = true;
      this.controlsState.rightCtrlDisabled = true;
      return;
    }

    if (this.compare(this.currentValue, this.min) === 'eq') {
      this.controlsState.leftCtrlDisabled = true;
      this.controlsState.stepleftCtrlDisabled = true;
      this.controlsState.stepRightCtrlDisabled = false;
      this.controlsState.rightCtrlDisabled = false;
      return;
    }

    if (this.compare(this.currentValue, this.max) === 'eq') {
      this.controlsState.leftCtrlDisabled = false;
      this.controlsState.stepleftCtrlDisabled = false;
      this.controlsState.stepRightCtrlDisabled = true;
      this.controlsState.rightCtrlDisabled = true;
      return;
    }

    this.controlsState.leftCtrlDisabled = false;
    this.controlsState.stepleftCtrlDisabled = false;
    this.controlsState.stepRightCtrlDisabled = false;
    this.controlsState.rightCtrlDisabled = false;
  }

  private compare(
    value1: PrizmCarouselPrizmCarouselYearMonthValue,
    value2: PrizmCarouselPrizmCarouselYearMonthValue
  ): 'lt' | 'eq' | 'gt' {
    if (value1.year < value2.year) {
      return 'lt';
    }

    if (value1.year > value2.year) {
      return 'gt';
    }

    if (value1.year === value2.year) {
      if (value1.month < value2.month) {
        return 'lt';
      }

      if (value1.month > value2.month) {
        return 'gt';
      }
      return 'eq';
    }

    return 'eq';
  }
}
