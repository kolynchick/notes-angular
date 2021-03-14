import { Injectable } from '@nestjs/common';
import { GetNotesResponseDTO, RemoveNoteResponseDTO } from '@notes-angular/dto';
import { Note } from '@notes-angular/models';
import { Observable, of } from 'rxjs';

@Injectable()
export class NoteServiceMock {
  public getNotes(): Observable<GetNotesResponseDTO> {
    return of({
      notes: [],
      totalCount: 0,
    });
  }

  public getNoteById(id: string): Observable<Note> {
    return of({ id, title: '', message: '', createDate: 0 });
  }

  public createNote(): Observable<Note> {
    return of({ id: '1', title: '', message: '', createDate: 0 });
  }

  public saveNote(id: string): Observable<Note> {
    return of({ id, title: '', message: '', createDate: 0 });
  }

  public removeNote(): Observable<RemoveNoteResponseDTO> {
    return of(undefined);
  }
}
