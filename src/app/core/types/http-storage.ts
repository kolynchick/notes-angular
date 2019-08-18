

import { Note } from './note';
import { Observable } from 'rxjs';

export interface NoteAPI {

  get(id?: string): Observable<Note | Note[]>;

  put(message: string): Observable<Note>;

  patch(id: string, message: string): Observable<Note[]>;

  delete(id: string): Observable<Note[]>;
}
