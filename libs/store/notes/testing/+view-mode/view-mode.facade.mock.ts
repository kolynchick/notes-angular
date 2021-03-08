import { Injectable } from '@angular/core';
import { ViewMode } from '@notes-angular/store/notes';
import { Observable, of } from 'rxjs';

@Injectable()
export class ViewModeFacadeMock {
  public getViewMode(): Observable<ViewMode> {
    return of('lines');
  }

  public toggleToBigTilesViewMode(): Observable<void> {
    return of(undefined);
  }

  public toggleToSmallTilesViewMode(): Observable<void> {
    return of(undefined);
  }

  public toggleToLinesViewMode() {
    return of(undefined);
  }
}
