import {ZuiOverlayPositionMeta} from '../models';
import {ZuiOverlayAbstractPosition} from './position';

export class ZuiOverlayFullscreenPosition extends ZuiOverlayAbstractPosition {
  public getPositions(): ZuiOverlayPositionMeta {
    return { top: 0, left: 0, width: '100%', height: '100%', position: 'fixed' };
  }
}
