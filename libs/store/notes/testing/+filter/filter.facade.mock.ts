import { Injectable } from '@angular/core';
import { Filter } from '@notes-angular/store/notes';
import { Observable, of } from 'rxjs';

@Injectable()
export class FilterFacadeMock {
  public getFilter(): Observable<Filter> {
    return of({ createStartDate: 0, createEndDate: 0 });
  }

  public setFilter(filter: Filter): Observable<void> {
    return of(undefined);
  }

  public clearFilter(): Observable<void> {
    return of(undefined);
  }
}
