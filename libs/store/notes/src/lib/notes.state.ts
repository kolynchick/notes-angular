import { Injectable } from '@angular/core';
import { State, Action, StateContext, Store } from '@ngxs/store';

import { GetNotes, LoadMoreNotes } from './notes.actions';
import { NotesStateModel } from './notes.model';
import { SortState } from './+sort/sort.state';
import { PaginationState } from './+pagination/pagination.state';
import { ViewModeState } from './+view-mode/view-mode.state';
import { FilterState } from './+filter/filter.state';
import { GetItems } from './+items/items.actions';
import { ItemsState } from './+items/items.state';
import { ClearPage } from './+pagination/pagination.actions';

@State<NotesStateModel>({
  name: 'notes',
  children: [
    FilterState,
    SortState,
    PaginationState,
    ViewModeState,
    ItemsState,
  ],
})
@Injectable()
export class NotesState {
  constructor(private store: Store) {}

  @Action(GetNotes)
  public getNotesView({ getState }: StateContext<NotesStateModel>) {
    const { filter, sort, pagination } = getState();

    this.store.dispatch(new ClearPage());
    this.store.dispatch(new GetItems(filter, sort, pagination));
  }

  @Action(LoadMoreNotes)
  public loadMoreNotes({ getState }: StateContext<NotesStateModel>) {
    const { filter, sort, pagination } = getState();

    this.store.dispatch(new GetItems(filter, sort, pagination, true));
  }
}
