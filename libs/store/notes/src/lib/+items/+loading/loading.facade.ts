import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { LoadingCompleted, LoadingStart } from './loading.actions';

import { LoadingState } from './loading.state';

@Injectable()
export class LoadingFacade {
  constructor(private store: Store) {}

  public getLoading(): Observable<boolean> {
    return this.store.select(LoadingState.loading);
  }

  public loadingStart(): Observable<void> {
    return this.store.dispatch(new LoadingStart());
  }

  public loadingCompleted(): Observable<void> {
    return this.store.dispatch(new LoadingCompleted());
  }
}
