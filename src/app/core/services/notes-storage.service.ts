import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { delay } from 'rxjs/operators';

import { NotesStorageInterface, Note } from '../types';

@Injectable({
  providedIn: 'root'
})
export class NotesStorageService implements NotesStorageInterface {

  private readonly maxLength = 500;
  private readonly keyStorage: string = 'notes';
  private storage: Array<Note>;

  constructor() {
    const storage: string = window.localStorage.getItem(this.keyStorage) || '[]';
    this.storage = JSON.parse(storage);
  }  

  public get = (timestamp?: number): Observable<Note | Note[]> => 
    new Observable<Note | Note[]>((subscriber: Subscriber<Note | Note[]>) => {
      if (timestamp) {
        const note: Note | undefined = this.storage.find(
          (item: Note) => item.timestamp === timestamp);
        
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
  );
  
  public put = (message: string): Observable<Note[]> =>
    new Observable<Note[]>((subscriber: Subscriber<Note[]>) => {
      const nextState = [...this.storage];
      nextState.push({
        message,
        timestamp: Date.now()
      });
      if (this.saveStorage(nextState)) {
        subscriber.next(nextState);
      } else {
        subscriber.error(`Length of message more than ${this.maxLength}`);
      }
  }).pipe(
    delay(Number((Math.random() * 1000).toFixed(0)))
  ); 
  
  public patch = (note: Note): Observable<Note[]> => 
    new Observable<Note[]>((subscriber: Subscriber<Note[]>) => {
      const changeIndex: number = this.storage.findIndex((item: Note) => 
        item.timestamp === note.timestamp);
      
      if (changeIndex === -1) {
        subscriber.error('The note doesn\'t exist');
      } else {
        const nextState: Note[] = [...this.storage];
        nextState[changeIndex] = note;
        if (this.saveStorage(nextState)) {
          subscriber.next(nextState);
        } else {
          subscriber.error(`Length of message more than ${this.maxLength}`);
        }
      }
  }).pipe(
    delay(Number((Math.random() * 1000).toFixed(0)))
  );

  public delete = (timestamp: number): Observable<Note[]> => 
    new Observable<Note[]>((subscriber: Subscriber<Note[]>) => {
      
      const removeIndex: number = 
        this.getNoteByTimestamp(this.storage, timestamp);
      
      if (removeIndex === -1) {
        subscriber.error('The note doesn\'t exist');
      } else {
        const nextState: Note[] = this.storage.filter(
          (_item: Note, index: number) => removeIndex !== index);

        if (this.saveStorage(nextState)) {
          subscriber.next(nextState);
        } else {
          subscriber.error(`Length of message more than ${this.maxLength}`);
        }
      }
  }).pipe(
    delay(Number((Math.random() * 1000).toFixed(0)))
  );

  private isValid = (storage: Note[]) => !storage.some(function(item: Note) {
    this.messageLength += item.message.length;
    return this.messageLength > this.maxLength;
  }, {messageLength: 0})


  private getNoteByTimestamp = (storage: Note[], timestamp: number): number => 
    storage.findIndex((item: Note) => item.timestamp === timestamp)

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
}