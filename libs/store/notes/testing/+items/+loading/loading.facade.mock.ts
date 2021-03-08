import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoadingFacadeMock {
  public getLoading(): Observable<boolean> {
    return of(false);
  }

  public loadingStart(): Observable<void> {
    return of(undefined);
  }

  public loadingCompleted(): Observable<void> {
    return of(undefined);
  }
}
