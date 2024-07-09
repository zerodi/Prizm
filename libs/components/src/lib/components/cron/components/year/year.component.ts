import { ChangeDetectionStrategy, Component, Inject, Input, ViewChild } from '@angular/core';
import { PrizmCronUiYearState } from '../../cron-ui-year.state';
import { PrizmCronUiBaseType } from '../../model';
import { UntypedFormControl } from '@angular/forms';
import { PrizmChipsComponent } from '../../../chips';
import { PRIZM_CRON } from '../../../../tokens/i18n';
import { Observable } from 'rxjs';
import { PrizmLanguageCron } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-cron-year',
  styleUrls: ['./year.component.less', '../../cron-element.component.less'],
  templateUrl: './year.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronYearComponent {
  @Input() specifiedList: PrizmCronUiBaseType[] = [];
  public deletable = true;
  public requiredInputControl = new UntypedFormControl('');
  public chipsControl = new UntypedFormControl([]);
  public yearForAdd: string | null = null;
  public chipses: string[] = [];
  public readonly allowedYear = /[0-9]/g;
  @ViewChild(PrizmChipsComponent, { static: true }) chipsComponent!: PrizmChipsComponent;

  constructor(
    @Inject(PRIZM_CRON) public readonly cronI18n$: Observable<PrizmLanguageCron['cron']>,
    public readonly cronUiState: PrizmCronUiYearState
  ) {}

  public removedChips(value: string[]): void {
    const correctedValue = this.corrector(value);
    this.chipses = correctedValue;
    this.saveSpecified(correctedValue.join(', '));
  }

  public onEnter(value: any, chipsComponent: PrizmChipsComponent): void {
    if (!value) return;
    const str = value.toString();
    this.yearForAdd = null;

    this.chipses.push(str);
    this.chipses = this.corrector(this.chipses);
    this.saveSpecified(this.chipses.join(', '));
  }

  public join(str: string[]): string {
    return str.join(', ');
  }

  public corrector(str: string[]): string[] {
    const result = str
      .reduce((base: number[], i) => {
        const trimmed = i.replace(/[ ]+/g, '');
        const int = parseInt(trimmed, 10);

        if (!trimmed) {
          return base;
        }

        if (!int) return base;
        if (int < 1900) return base;
        if (int > 2999) base.push(2999);
        else base.push(int);

        return base;
      }, [])
      .sort()
      .map(i => i.toString());

    return Array.from(new Set(result));
  }

  public saveSpecified(str: string): void {
    return this.cronUiState.updateSpecified(str.replace(/[ ]+/g, '').split(','));
  }
}
