import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { LoadingStateModel } from './loading.model';
import { LoadingCompleted, LoadingStart } from './loading.actions';

@State<LoadingStateModel>({
  name: 'loading',
  defaults: {
    loading: false,
  },
})
@Injectable()
export class LoadingState {
  @Selector()
  public static loading(state: LoadingStateModel): boolean {
    return state.loading;
  }

  @Action(LoadingStart)
  public loadingStart({ patchState }: StateContext<LoadingStateModel>): void {
    patchState({ loading: true });
  }

  @Action(LoadingCompleted)
  public loadingCompleted({
    patchState,
  }: StateContext<LoadingStateModel>): void {
    patchState({ loading: false });
  }
}
