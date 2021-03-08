import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CreateNoteRequestDTO,
  CreateNoteResponseDTO,
  GetNotesRequestDTO,
  GetNotesResponseDTO,
  RemoveNoteResponseDTO,
  SaveNoteRequestDTO,
  SaveNoteResponseDTO,
} from '@notes-angular/dto';

@Injectable()
export class ItemsApiService {
  constructor(private http: HttpClient) {}

  public getNotes(body: GetNotesRequestDTO = {}): Observable<GetNotesResponseDTO> {
    return this.http.post<GetNotesResponseDTO>('/note/getList', body);
  }

  public createNote(
    body: CreateNoteRequestDTO
  ): Observable<CreateNoteResponseDTO> {
    return this.http.post<CreateNoteResponseDTO>('/note', body);
  }

  public saveNote(
    id: string,
    body: SaveNoteRequestDTO
  ): Observable<SaveNoteResponseDTO> {
    return this.http.patch<SaveNoteResponseDTO>(`/note/${id}`, body);
  }

  public removeNote(id: string): Observable<RemoveNoteResponseDTO> {
    return this.http.delete<RemoveNoteResponseDTO>(`/note/${id}`);
  }
}
