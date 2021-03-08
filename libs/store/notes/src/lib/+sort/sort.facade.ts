import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';

import { SetSort, SetSortDirection, SetSortField } from './sort.actions';

import { SortState } from './sort.state';
import { Sort } from './sort.model';


@Injectable()
export class SortFacade {
  constructor(private store: Store) {}

  public getSort(): Observable<Sort> {
    return this.store.select(SortState.sort);
  }

  public getSortField(): Observable<string> {
    return this.store.select(SortState.sortField);
  }

  public getSortDirection(): Observable<SortDirection> {
    return this.store.select(SortState.sortDirection);
  }

  public setSort(field: string, direction: SortDirection): Observable<void> {
    return this.store.dispatch(new SetSort(field, direction));
  }

  public setSortField(field: string): Observable<void> {
    return this.store.dispatch(new SetSortField(field));
  }

  public setSortDirection(direction: SortDirection): Observable<void> {
    return this.store.dispatch(new SetSortDirection(direction));
  }
}
