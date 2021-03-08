import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { ViewMode } from './view-mode.model';
import {
  ToggleToBigTilesViewMode,
  ToggleToSmallTilesViewMode,
  ToggleToLinesViewMode,
} from './view-mode.actions';

import { ViewModeState } from './view-mode.state';

@Injectable()
export class ViewModeFacade {
  constructor(private store: Store) {}

  public getViewMode(): Observable<ViewMode> {
    return this.store.select(ViewModeState.viewMode);
  }

  public toggleToBigTilesViewMode(): Observable<void> {
    return this.store.dispatch(new ToggleToBigTilesViewMode());
  }

  public toggleToSmallTilesViewMode(): Observable<void> {
    return this.store.dispatch(new ToggleToSmallTilesViewMode());
  }

  public toggleToLinesViewMode() {
    return this.store.dispatch(new ToggleToLinesViewMode());
  }
}
