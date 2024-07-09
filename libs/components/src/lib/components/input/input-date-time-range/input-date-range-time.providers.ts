import { forwardRef, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PrizmDayRange } from '../../../@core/date-time';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { PRIZM_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { PRIZM_DATE_TIME_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PRIZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { prizmReplayControlValueChangesFactory } from '../../../util/common/replay-control-value-changes-factory';

export const RANGE_TIME_STREAM_FACTORY = <T extends PrizmDayRange>(
  control: NgControl | null,
  valueTransformer: PrizmControlValueTransformer<T>
): Observable<T | null> | null => prizmReplayControlValueChangesFactory<T>(control, valueTransformer);

export const PRIZM_INPUT_DATE_TIME_RANGE_PROVIDERS = [
  {
    provide: PRIZM_CALENDAR_DATA_STREAM,
    deps: [
      [new Optional(), new Self(), NgControl],
      [new Optional(), forwardRef(() => PRIZM_DATE_TIME_RANGE_VALUE_TRANSFORMER)],
    ],
    useFactory: RANGE_TIME_STREAM_FACTORY,
  },
  PRIZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
];
