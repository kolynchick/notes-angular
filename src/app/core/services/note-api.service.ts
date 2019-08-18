import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as uniqid from 'uniqid';

import { NoteAPI, Note } from '../types';
import { NoteStorage } from './note-storage.service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteAPIService implements NoteAPI {

  constructor(
    private storage: NoteStorage
  ) { }

  public get = (id?: string): Observable<Note | Note[]> =>
    new Observable<Note | Note[]>((subscriber: Subscriber<Note | Note[]>) => {

      if (!id) {
        subscriber.next(this.storage.get());
        return;
      }

      const note: Note | undefined = this.storage.get().find(
        (item: Note) => item.id === id);

      if (!note) {
        subscriber.next(note);
      } else {
        subscriber.error('The note isn\'t found');
      }
    }).pipe(
      delay(Number((Math.random() * 1000).toFixed(0)))
    )

  public put = (message: string): Observable<Note> =>
    new Observable<Note>((subscriber: Subscriber<Note>) => {
      const nextState: Note[] = [...this.storage.get()];
      const newNote: Note = {
        id: uniqid(),
        message,
        timestamp: Date.now()
      };
      nextState.push(newNote);

      const response = this.storage.set(nextState);

      if (response.success) {
        subscriber.next(newNote);
      } else {
        subscriber.error(response.message);
      }
    }).pipe(
      delay(Number((Math.random() * 1000).toFixed(0)))
    )

  public patch = (id: string, message: string): Observable<Note[]> =>
    new Observable<Note[]>((subscriber: Subscriber<Note[]>) => {
      console.log(this.storage.get());
      const changeIndex: number = this.storage.get().findIndex(
        (item: Note) => item.id === id);

      if (changeIndex === -1) {
        subscriber.error('The note doesn\'t exist');
        return;
      }

      const nextState: Note[] = [...this.storage.get()];
      const nextStateNote: Note = nextState[changeIndex];

      nextState[changeIndex] = {
        id: nextStateNote.id,
        timestamp: Date.now(),
        message
      };

      const response = this.storage.set(nextState);

      if (response.success) {
        subscriber.next(nextState);
      } else {
        subscriber.error(response.message);
      }
      
    }).pipe(
      delay(Number((Math.random() * 1000).toFixed(0)))
    )

  public delete = (id: string): Observable<Note[]> =>
    new Observable<Note[]>((subscriber: Subscriber<Note[]>) => {
      const removeIndex: number = this.storage.get().findIndex(
        (item: Note) => item.id === id);

      if (removeIndex === -1) {
        subscriber.error('The note doesn\'t exist');
        return;
      }

      const nextState: Note[] = this.storage.get().filter(
        (item: Note, index: number) => removeIndex !== index);
      const response = this.storage.set(nextState);

      if (response.success) {
        subscriber.next(nextState);
      } else {
        subscriber.error(response.message);
      }
      
    }).pipe(
      delay(Number((Math.random() * 1000).toFixed(0)))
    )

}
