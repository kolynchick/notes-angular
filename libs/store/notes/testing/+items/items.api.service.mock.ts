import { Injectable } from '@angular/core';
import {
  CreateNoteRequestDTO,
  CreateNoteResponseDTO,
  GetNotesRequestDTO,
  GetNotesResponseDTO,
  RemoveNoteResponseDTO,
  SaveNoteRequestDTO,
  SaveNoteResponseDTO,
} from '@notes-angular/dto';
import { Observable, of } from 'rxjs';

@Injectable()
export class ItemsApiServiceMock {
  public getNotes(
    body: GetNotesRequestDTO = {}
  ): Observable<GetNotesResponseDTO> {
    return of({ notes: [], totalCount: 0 });
  }

  public createNote(
    body: CreateNoteRequestDTO
  ): Observable<CreateNoteResponseDTO> {
    return of({ id: '1', title: '', message: '', createDate: 0 });
  }

  public saveNote(
    id: string,
    body: SaveNoteRequestDTO
  ): Observable<SaveNoteResponseDTO> {
    return of({ id: '1', title: '', message: '', createDate: 0 });
  }

  public removeNote(id: string): Observable<RemoveNoteResponseDTO> {
    return of(undefined);
  }
}
