import { Injectable } from '@angular/core';
import {
  State,
  Action,
  Selector,
  StateContext,
  NgxsOnInit,
  Store,
} from '@ngxs/store';
import { Filter, FilterStateModel, SetFilterPayload } from './filter.model';
import { SetFilter, ClearFilter } from './filter.actions';

@State<FilterStateModel>({
  name: 'filter',
  defaults: {
    createStartDate: 0,
    createEndDate: 0,
  },
})
@Injectable()
export class FilterState implements NgxsOnInit {
  constructor(private store: Store) {}
  @Selector()
  public static filter(state: FilterStateModel): Filter {
    return state;
  }

  @Action(SetFilter)
  public setFilter(
    { patchState }: StateContext<FilterStateModel>,
    { filter: { createStartDate, createEndDate } }: SetFilterPayload
  ): void {
    patchState({
      createStartDate: createStartDate,
      createEndDate: createEndDate,
    });
  }

  @Action(ClearFilter)
  public clearFilter({ patchState }: StateContext<FilterStateModel>): void {
    const currentDate: Date = new Date();
    currentDate.setDate(1); // First date of current month

    patchState({
      createStartDate: currentDate.getTime(),
      createEndDate: Date.now(),
    });
  }

  ngxsOnInit({ getState }: StateContext<FilterStateModel>): void {
    const { createStartDate, createEndDate } = getState();

    if (!createStartDate || !createEndDate) {
      this.store.dispatch(new ClearFilter());
    }
  }
}
