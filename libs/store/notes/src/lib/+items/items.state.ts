import { Injectable } from '@angular/core';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { State, Action, Selector, StateContext } from '@ngxs/store';

import { Note } from '@notes-angular/models';
import { CreateItem, SaveItem, RemoveItem, GetItems } from './items.actions';
import {
  CreateNotePayload,
  GetNotesPayload,
  ItemsStateModel,
  RemoveNotePayload,
  SaveNotePayload,
} from './items.model';
import { ItemsService } from './items.service';
import { defer } from 'rxjs';
import { LoadingState } from './+loading/loading.state';


@State<ItemsStateModel>({
  name: 'items',
  defaults: {
    notes: [],
    totalCount: 0,
  },
  children: [LoadingState],
})
@Injectable()
export class ItemsState {
  constructor(private itemsService: ItemsService) {}

  @Selector()
  public static items(state: ItemsStateModel): Note[] {
    return state.notes;
  }

  @Selector()
  public static totalCount(state: ItemsStateModel): number {
    return state.totalCount;
  }

  @Action(GetItems)
  public getItems(
    { patchState, getState }: StateContext<ItemsStateModel>,
    { filter, sort, pagination, update }: GetNotesPayload
  ) {
    const sourceItems: Note[] = getState().notes;

    return this.itemsService.getNotes(filter, sort, pagination).pipe(
      map(({ notes, totalCount }) => ({
        totalCount,
        notes: update ? [...sourceItems, ...notes] : notes,
      })),
      tap(({ notes, totalCount }) => patchState({ notes, totalCount }))
    );
  }

  @Action(CreateItem)
  public createItem(
    _state: StateContext<ItemsStateModel>,
    { title, message }: CreateNotePayload
  ) {
    return this.itemsService.createNote(title, message);
  }

  @Action(SaveItem)
  public saveItem(
    { getState }: StateContext<ItemsStateModel>,
    { id, title, message }: SaveNotePayload
  ) {
    return defer(() => getState().notes).pipe(
      filter((note: Note) => note.id === id),
      switchMap((note: Note) =>
        this.itemsService.saveNote(id, { ...note, title, message })
      )
    );
  }

  @Action(RemoveItem)
  public removeItem(
    _state: StateContext<ItemsStateModel>,
    { id }: RemoveNotePayload
  ) {
    return this.itemsService.removeNote(id);
  }
}
