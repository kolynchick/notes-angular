import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { SetFilter, ClearFilter } from './filter.actions';

import { FilterState } from './filter.state';
import { Filter } from './filter.model';

@Injectable()
export class FilterFacade {
  constructor(private store: Store) {}

  public getFilter(): Observable<Filter> {
    return this.store.select(FilterState.filter);
  }

  public setFilter(filter: Filter): Observable<void> {
    return this.store.dispatch(new SetFilter(filter));
  }

  public clearFilter(): Observable<void> {
    return this.store.dispatch(new ClearFilter());
  }
}
