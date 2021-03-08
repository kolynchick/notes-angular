import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class NotesFacadeMock {
  public getNotesFromBackend(): Observable<void> {
    return of(undefined);
  }

  public loadMoreNotes(): Observable<void> {
    return of(undefined);
  }

  public handleActions() {
    return of(undefined);
  }
}
