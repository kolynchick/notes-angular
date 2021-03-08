import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Sort, SetSortPayload, SortStateModel, SetSortDirectionPayload, SetSortFieldPayload } from './sort.model';
import { SetSort, SetSortDirection, SetSortField } from './sort.actions';
import { SortDirection } from '@angular/material/sort';

@State<SortStateModel>({
  name: 'sort',
  defaults: {
    field: 'createDate',
    direction: 'desc',
  },
})
@Injectable()
export class SortState {
  @Selector()
  public static sort(state: Sort): Sort {
    return state;
  }

  @Selector()
  public static sortField(state: Sort): string {
    return state.field;
  }

  @Selector()
  public static sortDirection(state: Sort): SortDirection {
    return state.direction;
  }

  @Action(SetSort)
  public setSort(
    { patchState }: StateContext<SortStateModel>,
    { field, direction }: SetSortPayload
  ): void {
    patchState({ field, direction });
  }

  @Action(SetSortDirection)
  public setSortDirection(
    { patchState }: StateContext<SortStateModel>,
    { direction }: SetSortDirectionPayload
  ): void {
    patchState({ direction });
  }

  @Action(SetSortField)
  public setSortField(
    { patchState }: StateContext<SortStateModel>,
    { field }: SetSortFieldPayload
  ): void {
    patchState({ field });
  }
}
