import { Injectable } from '@angular/core';
import { Actions, Store, ofActionSuccessful } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetFilter } from './+filter/filter.actions';
import { CreateItem, RemoveItem, SaveItem } from './+items/items.actions';
import { SetPageSize } from './+pagination/pagination.actions';
import { SetSort, SetSortDirection, SetSortField } from './+sort/sort.actions';
import { GetNotes, LoadMoreNotes } from './notes.actions';

@Injectable()
export class NotesFacade {
  constructor(private store: Store, private actions: Actions) {}

  public getNotesFromBackend(): Observable<void> {
    return this.store.dispatch(new GetNotes());
  }

  public loadMoreNotes(): Observable<void> {
    return this.store.dispatch(new LoadMoreNotes());
  }

  public handleActions(): Observable<void> {
    return this.actions.pipe(
      ofActionSuccessful(
        SetSort,
        SetSortField,
        SetSortDirection,
        SetFilter,
        SetPageSize,
        CreateItem,
        SaveItem,
        RemoveItem
      )
    );
  }
}
