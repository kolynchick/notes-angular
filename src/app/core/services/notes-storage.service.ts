import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as uniqid from 'uniqid';

import { NotesStorageInterface, Note } from '../types';

@Injectable({
  providedIn: 'root'
})
export class NotesStorageService implements NotesStorageInterface {

  private readonly maxLength: number = 500;
  private readonly defaultMessageError: string =
    `Length of message more than ${this.maxLength}`;
  private readonly keyStorage: string = 'notes';
  private storage: Array<Note>;

  constructor(
    private snackBar: MatSnackBar
  ) {
    const storage: string = window.localStorage.getItem(this.keyStorage) || '[]';
    this.storage = JSON.parse(storage);
  }

  public get = (id?: string): Observable<Note | Note[]> =>
    new Observable<Note | Note[]>((subscriber: Subscriber<Note | Note[]>) => {
      if (id) {
        const note: Note | undefined = this.storage.find(
          (item: Note) => item.id === id);

        if (!note) {
          subscriber.next(note);
        } else {
          subscriber.error('The note isn\'t found');
        }
      } else {
        subscriber.next(this.storage);
      }
  }).pipe(
    delay(Number((Math.random() * 1000).toFixed(0)))
  )

  public put = (message: string): Observable<Note> =>
    new Observable<Note>((subscriber: Subscriber<Note>) => {
      const nextState: Note[] = [...this.storage];
      const newNote: Note = {
        id: uniqid(),
        message,
        timestamp: Date.now()
      };
      nextState.push(newNote);
      if (this.saveStorage(nextState)) {
        subscriber.next(newNote);
      } else {
        this.snackBar.open(this.defaultMessageError, '', {
          duration: 2000
        });
        subscriber.error(this.defaultMessageError);
      }
  }).pipe(
    delay(Number((Math.random() * 1000).toFixed(0)))
  )

  public patch = (id: string, message: string): Observable<Note[]> =>
    new Observable<Note[]>((subscriber: Subscriber<Note[]>) => {
      const changeIndex: number = this.storage.findIndex((item: Note) =>
        item.id === id);

      if (changeIndex === -1) {
        subscriber.error('The note doesn\'t exist');
      } else {
        const nextState: Note[] = [...this.storage];
        const nextStateNote: Note = nextState[changeIndex];
        nextState[changeIndex] = {
          id: nextStateNote.id,
          timestamp: Date.now(),
          message
        };
        if (this.saveStorage(nextState)) {
          subscriber.next(nextState);
        } else {
          this.snackBar.open(this.defaultMessageError, '', {
            duration: 2000
          });
          subscriber.error(this.defaultMessageError);
        }
      }
  }).pipe(
    delay(Number((Math.random() * 1000).toFixed(0)))
  )

  public delete = (id: string): Observable<Note[]> =>
    new Observable<Note[]>((subscriber: Subscriber<Note[]>) => {
      const removeIndex: number = this.storage.findIndex(
        (item: Note) => item.id === id);

      if (removeIndex === -1) {
        subscriber.error('The note doesn\'t exist');
      } else {
        const nextState: Note[] = this.storage.filter(
          (item: Note, index: number) => removeIndex !== index);
        if (this.saveStorage(nextState)) {
          subscriber.next(nextState);
        } else {
          this.snackBar.open(this.defaultMessageError, '', {
            duration: 2000
          });
          subscriber.error(this.defaultMessageError);
        }
      }
  }).pipe(
    delay(Number((Math.random() * 1000).toFixed(0)))
  )

  private saveStorage = (storage: Note[]): boolean => {
    const isValid = this.isValid(storage);

    if (isValid) {
      this.storage = [...storage];
      window.localStorage.setItem(
        this.keyStorage,
        JSON.stringify(this.storage)
      );
    }

    return isValid;
  }

  private isValid = (storage: Note[]) =>
    storage.every(function(item: Note) {
      this.messageLength += item.message.length;
        return this.messageLength < this.maxLength;
    }, {messageLength: 0, maxLength: this.maxLength})

}
