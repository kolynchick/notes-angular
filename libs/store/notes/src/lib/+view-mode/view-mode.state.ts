import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import {
  ToggleToBigTilesViewMode,
  ToggleToSmallTilesViewMode,
  ToggleToLinesViewMode,
} from './view-mode.actions';
import { ViewMode, ViewModeStateModel } from './view-mode.model';

@State<ViewModeStateModel>({
  name: 'viewMode',
  defaults: {
    viewMode: 'big-tiles',
  },
})
@Injectable()
export class ViewModeState {

  @Selector()
  public static viewMode(state: ViewModeStateModel): ViewMode {
    return state.viewMode;
  }

  @Action(ToggleToBigTilesViewMode)
  public toggleToBigTilesViewMode({
    patchState,
  }: StateContext<ViewModeStateModel>): void {
    patchState({ viewMode: 'big-tiles' });
  }

  @Action(ToggleToSmallTilesViewMode)
  public toggleToSmallTilesViewMode({
    patchState,
  }: StateContext<ViewModeStateModel>): void {
    patchState({ viewMode: 'small-tiles' });
  }

  @Action(ToggleToLinesViewMode)
  public toggleToLinesViewMode({
    patchState,
  }: StateContext<ViewModeStateModel>): void {
    patchState({ viewMode: 'lines' });
  }
}
