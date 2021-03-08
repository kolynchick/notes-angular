import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Sort } from '@notes-angular/store/notes';
import { Observable, of } from 'rxjs';

@Injectable()
export class SortFacadeMock {
  public getSort(): Observable<Sort> {
    return of({ field: 'createDate', direction: 'desc' });
  }

  public getSortField(): Observable<string> {
    return of('createDate');
  }

  public getSortDirection(): Observable<SortDirection> {
    return of('desc');
  }

  public setSort(field: string, direction: SortDirection): Observable<void> {
    return of(undefined);
  }

  public setSortField(field: string): Observable<void> {
    return of(undefined);
  }

  public setSortDirection(direction: SortDirection): Observable<void> {
    return of(undefined);
  }
}
