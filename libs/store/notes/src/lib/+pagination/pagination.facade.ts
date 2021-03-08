import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { SetPageIndex, SetPageSize, ClearPage } from './pagination.actions';

import { PaginationState } from './pagination.state';
import { Pagination } from './pagination.model';

@Injectable()
export class PaginationFacade {
  constructor(private store: Store) {}

  public getPagination(): Observable<Pagination> {
    return this.store.select(PaginationState.pagination);
  }

  public setPageIndex(pageIndex: number): Observable<void> {
    return this.store.dispatch(new SetPageIndex(pageIndex));
  }

  public setPageSize(pageSize: number): Observable<void> {
    return this.store.dispatch(new SetPageSize(pageSize));
  }

  public clearPagination(): Observable<void> {
    return this.store.dispatch(new ClearPage());
  }
}
