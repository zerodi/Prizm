import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { PrizmToastService } from '@prizm-ui/components';
import { RawLoaderContent } from '@taiga-ui/addon-doc';
import { copyToClipboard } from '../../../../../../src/app/util';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'prizm-theme-for-designers',
  templateUrl: './theme-for-designers.component.html',
  styleUrls: ['./theme-for-designers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeForDesignersComponent {
  public readonly hex: RawLoaderContent = import('./../examples/hex.md?raw');
  public readonly style: RawLoaderContent = import('./../examples/style.md?raw');
  public readonly token: RawLoaderContent = import('./../examples/token.md?raw');
  public readonly libs = [
    {
      name: '🎨 Prizm. Variable Palette',
      description: 'Палитра для привязки к токенам',
    },
    {
      name: '🎨 Prizm. Variable Colors',
      description: 'Токены',
    },
  ];

  public readonly tokens: { name: string; description: string; variable: string; groupName?: string }[] = [
    {
      groupName: 'Text-Icon',
      name: 'Primary',
      description: 'Заголовок',
      variable: '--prizm-text-icon-primary',
    },
    {
      name: 'Secondary',
      description: 'Параграф текста',
      variable: '--prizm-text-icon-secondary',
    },
    {
      name: 'Tertiary',
      description: 'Описание',
      variable: '--prizm-text-icon-tertiary',
    },
    {
      name: 'Disable',
      description: 'Цвет заблокированных текстовых блоков',
      variable: '--prizm-text-icon-disable',
    },
    {
      name: 'Revers',
      description: 'Для контента в хинтах и тутипах',
      variable: '--prizm-text-icon-reverse',
    },
    {
      name: 'Link',
      description: 'Ссылка',
      variable: '--prizm-text-icon-link',
    },
    {
      name: 'Link-Hover',
      description: 'Цвет наведения на ссылку',
      variable: '--prizm-text-icon-link-hover',
    },
    {
      name: 'Link-Visited',
      description: 'Цвет посещенной ссылки',
      variable: '--prizm-text-icon-link-visited',
    },
    {
      groupName: 'Background',
      name: 'Fill-Primary',
      description: 'Тело виджета',
      variable: '--prizm-background-fill-primary',
    },
    {
      name: 'Fill-Secondary',
      description: 'Подложка виджета',
      variable: '--prizm-background-fill-secondary',
    },
    {
      name: 'Fill-Revers',
      description: 'Тело хинта и тултипа',
      variable: '--prizm-background-fill-reverse',
    },
    {
      name: 'Stroke',
      description: 'Обводка виджета',
      variable: '--prizm-background-stroke',
    },
    {
      name: 'Overlay',
      description: 'Заливка при появлении модального окна',
      variable: '--prizm-background-fill-overlay',
    },
    {
      name: 'Focus',
      description: 'Обводка фокуса для навигации с клавиатуры',
      variable: '--prizm-background-stroke-focus',
    },
    {
      name: 'Fill-Overlay',
      description: 'Цвет всех всплывающих окон',
      variable: '--prizm-background-fill-overlay',
    },
    {
      name: 'Fill-Blanket',
      description: 'Подложка модальных окон',
      variable: '--prizm-background-fill-blanket',
    },
    {
      name: 'Fill-Panel',
      description: 'Заливка панели без перекраски в темной теме',
      variable: '--prizm-background-fill-panel',
    },
    {
      groupName: 'Status',
      name: 'Info-Primary-Default',
      description: 'Основной цвет для информационного статуса',
      variable: '--prizm-status-info-primary-default',
    },
    {
      name: 'Info-Secondary-Default',
      description: 'Дополнительный цвет для информационного статуса',
      variable: '--prizm-status-info-secondary-defaul',
    },
    {
      name: 'None-Primary-Default',
      description: 'Основной цвет отсутствия статуса',
      variable: '--prizm-status-none-primary-default',
    },
    {
      name: 'None-Secondary-Default',
      description: 'Дополнительный цвет отсутствия статуса',
      variable: '--prizm-status-none-secondary-default',
    },
    {
      name: 'Success-Primary-Default',
      description: 'Основной цвет для успешного статуса',
      variable: '--prizm-status-success-primary-default',
    },
    {
      name: 'Success-Secondary-Default',
      description: 'Дополнительный цвет для успешного статуса',
      variable: '--prizm-status-success-secondary-default',
    },
    {
      name: 'Attention-Primary-Default',
      description: '⚠️ Основной цвет для ??? статуса',
      variable: '--prizm-status-attention-primary-default',
    },
    {
      name: 'Attention-Secondary-Default',
      description: '⚠️ Дополнительный цвет для ??? статуса',
      variable: '--prizm-status-attention-secondary-default',
    },
    {
      name: 'Warning-Primary-Default',
      description: 'Основной цвет для предупредительного статуса',
      variable: '--prizm-status-warning-primary-default',
    },
    {
      name: 'Warning-Secondary-Default',
      description: 'Дополнительный цвет для предупредительного статуса',
      variable: '--prizm-status-warning-secondary-default',
    },
    {
      name: 'Alarm-Primary-Default',
      description: 'Основной цвет для тревожного статуса',
      variable: '-prizm-status-alarm-primary-default',
    },
    {
      name: 'Alarm-Secondary-Default',
      description: 'Дополнительный цвет для тревожного статуса',
      variable: '--prizm-status-alarm-secondary-default',
    },
    {
      groupName: 'Index',
      name: 'Plan',
      description: 'Плановые показатели',
      variable: '--prizm-index-plan',
    },
    {
      name: 'Fact',
      description: 'Фактические показатели',
      variable: '--prizm-index-fact',
    },
    {
      name: 'Success',
      description: '⚠️ Успешные показатели',
      variable: '',
    },
    {
      name: 'Danger',
      description: '⚠️ ??? показатели',
      variable: '',
    },
    {
      name: 'Warning',
      description: '⚠️ Предупредительные показатели',
      variable: '',
    },
    {
      name: 'Alarm',
      description: '⚠️ Тревожные статусы',
      variable: '',
    },
    {
      groupName: 'Table',
      name: 'Fill-Row-Zebra_Default',
      description: 'Зебра в таблице',
      variable: '--prizm-table-fill-row-zebra_default',
    },
    {
      name: 'Fill-Header-Default',
      description: 'Шапка колонки таблицы',
      variable: '--prizm-table-fill-header-default',
    },
    {
      name: 'Stroke-Cell-Default',
      description: 'Обводка ячеек таблицы',
      variable: '--prizm-table-stroke-cell-default',
    },
    {
      name: 'Fill-Header-Hover',
      description: 'Шапка колонки таблицы при наведении',
      variable: '-prizm-table-fill-header-hover',
    },
    {
      name: 'Fill-Row-Hover',
      description: 'Строка таблицы при наведении',
      variable: '--prizm-table-fill-row-hover',
    },
    {
      name: 'Fill-Row-Active',
      description: 'Выбранная строка таблицы',
      variable: '--prizm-table-fill-row-active',
    },
    {
      name: 'Fill-Cell-Disable',
      description: 'Заблокированная ячейка таблицы',
      variable: '--prizm-table-fill-cell-disable',
    },
    {
      name: 'Stroke-Cell-Hover',
      description: 'Обводка ячейки таблицы при наведении',
      variable: '--prizm-table-stroke-cell-hover',
    },
    {
      name: 'Stroke-Cell-Active',
      description: 'Обводка активной ячейки таблицы',
      variable: '--prizm-table-stroke-cell-active',
    },
    {
      groupName: 'Status',
      name: 'Info-Primary-Hover',
      description: 'Основной цвет для информационного статуса при наведении',
      variable: '--prizm-status-info-primary-hover',
    },
    {
      name: 'Info-Secondary-Hover',
      description: 'Дополнительный цвет для информационного статуса при наведении',
      variable: '--prizm-status-info-secondary-hover',
    },
    {
      name: 'None-Primary-Hover',
      description: 'Основной цвет отсутствия статуса при наведении',
      variable: '--prizm-status-none-primary-hover:',
    },
    {
      name: 'None-Secondary-Hover',
      description: 'Дополнительный цвет отсутствия статуса при наведении',
      variable: '--prizm-status-none-secondary-hover:',
    },
    {
      name: 'Success-Primary-Hover',
      description: 'Основной цвет для успешного статуса при наведении',
      variable: '--prizm-status-success-primary-hover',
    },
    {
      name: 'Success-Secondary-Hover',
      description: 'Дополнительный цвет для успешного статуса при наведении',
      variable: '--prizm-status-success-secondary-hover',
    },
    {
      name: 'Attention-Primary-Hover',
      description: '⚠️ Основной цвет для ??? статуса при наведении',
      variable: '--prizm-status-attention-primary-hover',
    },
    {
      name: 'Attention-Secondary-Hover',
      description: '⚠️ Дополнительный цвет для ??? статуса при наведении',
      variable: '--prizm-status-attention-secondary-hover',
    },
    {
      name: 'Warning-Primary-Hover',
      description: 'Основной цвет для предупредительного статуса при наведении',
      variable: '--prizm-status-warning-primary-hover',
    },
    {
      name: 'Warning-Secondary-Hover',
      description: 'Дополнительный цвет для предупредительного статуса при наведении',
      variable: '--prizm-status-warning-secondary-hover',
    },
    {
      name: 'Alarm-Primary-Hover',
      description: 'Основной цвет для тревожного статуса при наведении',
      variable: '--prizm-status-alarm-primary-hover',
    },
    {
      name: 'Alarm-Secondary-Hover',
      description: 'Дополнительный цвет для тревожного статуса при наведении',
      variable: '--prizm-status-alarm-secondary-hover',
    },
    {
      groupName: 'Form',
      name: 'Fill-Default',
      description: 'Заливка для элементов форм',
      variable: '--prizm-form-fill-default',
    },
    {
      name: 'Fill-Disable',
      description: 'Заливка для заблокированных элементов форм',
      variable: '--prizm-form-fill-disable',
    },
    {
      name: 'Stroke-Default',
      description: 'Обводка для элементов форм',
      variable: '--prizm-form-stroke-default',
    },
    {
      name: 'Stroke-Hover',
      description: 'Обводка для элементов форм при наведении',
      variable: '--prizm-form-stroke-hover',
    },
    {
      name: 'Stroke-Disable',
      description: 'Обводка для заблокированных элементов форм',
      variable: '--prizm-form-stroke-disable',
    },
    {
      name: 'Active',
      description: 'Заливка/Обводка для активных элементов форм',
      variable: '--prizm-form-active',
    },
    {
      name: 'Active-Hover',
      description: 'Заливка/Обводка для активных элементов форм при наведении',
      variable: '--prizm-form-active-hover',
    },
    {
      name: 'Active-Disable',
      description: '❓Заливка для заблокированных активных элементов форм',
      variable: '--prizm-form-active-disable',
    },
    {
      groupName: 'Button',
      name: 'Primary-Solid-Default',
      description: 'Основная залитая/контурная кнопка',
      variable: '--prizm-button-primary-solid-default',
    },
    {
      name: 'Primary-Solid-Hover',
      description: 'Основная залитая/контурная кнопка при наведении',
      variable: '-prizm-button-primary-solid-hover',
    },
    {
      name: 'Primary-Solid-Active',
      description: 'Основная залитая/контурная кнопка при нажатии/активации',
      variable: '--prizm-button-primary-solid-active',
    },
    {
      name: 'Primary-Ghost-Active',
      description: 'Основная прозрачная кнопка при нажатии/активации',
      variable: '--prizm-button-primary-ghost-active',
    },
    {
      name: 'Secondary-Solid-Hover',
      description: 'Второстепенная залитая/контурная кнопка при наведении',
      variable: '--prizm-button-secondary-solid-hover',
    },
    {
      name: 'Secondary-Solid-Active',
      description: 'Второстепенная залитая/контурная кнопка при нажатии/активации',
      variable: '--prizm-button-secondary-solid-active',
    },
    {
      name: 'Secondary-Ghost-Active',
      description: 'Второстепенная прозрачная кнопка при нажатии/активации',
      variable: '--prizm-button-secondary-ghost-active',
    },
    {
      name: 'Success-Solid-Default',
      description: 'Успешная залитая/контурная кнопка',
      variable: '--prizm-button-success-solid-default',
    },
    {
      name: 'Success-Solid-Hover',
      description: 'Успешная залитая/контурная кнопка при наведении',
      variable: '--prizm-button-success-solid-hover',
    },
    {
      name: 'Success-Solid-Active',
      description: 'Успешная залитая/контурная кнопка при нажатии/активации',
      variable: '--prizm-button-success-solid-active',
    },
    {
      name: 'Success-Ghost-Active',
      description: 'Успешная прозрачная кнопка при нажатии/активации',
      variable: '--prizm-button-success-ghost-active',
    },
    {
      name: 'Warning-Solid-Default',
      description: 'Предупредительная залитая/контурная кнопка',
      variable: '--prizm-button-warning-solid-default',
    },
    {
      name: 'Warning-Solid-Hover',
      description: 'Предупредительная залитая/контурная кнопка при наведении',
      variable: '-prizm-button-warning-solid-hover',
    },
    {
      name: 'Warning-Solid-Active',
      description: 'Предупредительная залитая/контурная кнопка при нажатии/активации',
      variable: '--prizm-button-warning-solid-active',
    },
    {
      name: 'Warning-Ghost-Active',
      description: 'Предупредительная прозрачная кнопка при нажатии/активации',
      variable: '--prizm-button-warning-ghost-active',
    },
    {
      name: 'Alarm-Solid-Default',
      description: 'Тревожная залитая/контурная кнопка',
      variable: '--prizm-button-alarm-solid-default',
    },
    {
      name: 'Alarm-Solid-Hover',
      description: 'Тревожная залитая/контурная кнопка при наведении',
      variable: '--prizm-button-alarm-solid-hover',
    },
    {
      name: 'Alarm-Solid-Active',
      description: 'Тревожная залитая/контурная кнопка при нажатии/активации',
      variable: '--prizm-button-alarm-solid-active',
    },
    {
      name: 'Alarm-Ghost-Active',
      description: 'Тревожная прозрачная кнопка при нажатии/активации',
      variable: '--prizm-button-alarm-ghost-active',
    },
    {
      name: 'Ghost-Hover',
      description: 'Прозрачная кнопка при наведении',
      variable: '--prizm-button-ghost-hover',
    },
    {
      name: '	Disable❓',
      description: 'Заблокированная кнопка',
      variable: '--prizm-button-disable',
    },
    {
      groupName: 'Shadow',
      name: 'Shadow',
      description: 'Цвет теней',
      variable: '--prizm-shadow-color',
    },
    {
      name: 'Shadow-Big-Top',
      description: 'Большая тень сверху',
      variable: '--prizm-shadow-big-top',
    },
    {
      name: 'Shadow-Big-Right',
      description: 'Большая тень справа',
      variable: '--prizm-shadow-big-right',
    },
    {
      name: 'Shadow-Big-Left',
      description: 'Большая тень слева',
      variable: '--prizm-shadow-big-left',
    },
    {
      name: 'Shadow-Big-Bottom',
      description: 'Большая тень снизу',
      variable: '--prizm-shadow-big-bottom',
    },
    {
      name: 'Shadow-Mini-Top',
      description: 'Маленькая тень сверху',
      variable: '--prizm-shadow-mini-top',
    },
    {
      name: 'Shadow-Mini-Right',
      description: 'Маленькая тень справа',
      variable: '--prizm-shadow-mini-right',
    },
    {
      name: 'Shadow-Mini-Left',
      description: 'Маленькая тень слева',
      variable: '--prizm-shadow-mini-left',
    },
    {
      name: 'Shadow-Mini-Bottom',
      description: 'Маленькая тень снизу',
      variable: '--prizm-shadow-mini-bottom',
    },
  ];

  constructor(
    @Inject(Clipboard) public readonly clipboard: Clipboard,
    private readonly toastService: PrizmToastService
  ) {}

  public copy(value: string): void {
    copyToClipboard(value, this.clipboard, this.toastService);
  }
}
