import { Injectable } from '@angular/core';
import { Pagination } from '@notes-angular/store/notes';
import { Observable, of } from 'rxjs';

@Injectable()
export class PaginationFacadeMock {
  public getPagination(): Observable<Pagination> {
    return of({ pageSize: 0, pageIndex: 0 });
  }

  public setPageIndex(pageIndex: number): Observable<void> {
    return of(undefined);
  }

  public setPageSize(pageSize: number): Observable<void> {
    return of(undefined);
  }

  public clearPagination(): Observable<void> {
    return of(undefined);
  }
}
