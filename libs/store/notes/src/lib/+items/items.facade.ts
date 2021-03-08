import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Note } from '@notes-angular/models';
import { Observable } from 'rxjs';
import { CreateItem, RemoveItem, SaveItem } from './items.actions';

import { ItemsState } from './items.state';

@Injectable()
export class ItemsFacade {
  constructor(private store: Store) {}

  public getItems(): Observable<Note[]> {
    return this.store.select(ItemsState.items);
  }

  public getTotalCount(): Observable<number> {
    return this.store.select(ItemsState.totalCount);
  }

  public createItem(title: string, message: string): Observable<void> {
    return this.store.dispatch(new CreateItem(title, message));
  }

  public saveItem(id: string, title: string, message: string) {
    return this.store.dispatch(new SaveItem(id, title, message));
  }

  public removeItem(id: string): Observable<void> {
    return this.store.dispatch(new RemoveItem(id));
  }
}
