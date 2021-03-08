import { Injectable } from '@angular/core';
import { Note } from '@notes-angular/models';
import { Observable, of } from 'rxjs';

@Injectable()
export class ItemsFacadeMock {
  public getItems(): Observable<Note[]> {
    return of([]);
  }

  public getTotalCount(): Observable<number> {
    return of(0);
  }

  public createItem(title: string, message: string): Observable<void> {
    return of(undefined);
  }

  public saveItem(id: string, title: string, message: string) {
    return of(undefined);
  }

  public removeItem(id: string): Observable<void> {
    return of(undefined);
  }
}
