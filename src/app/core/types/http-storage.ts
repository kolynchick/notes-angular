

import { Note } from './note';
import { Observable } from 'rxjs';

export interface NotesStorageInterface {

  get(timestamp?: number): Observable<Note | Note[]>;

  put(message: string): Observable<Note[]>;

  patch(note: Note): Observable<Note[]>;

  delete(timestamp: number): Observable<Note[]>;
}