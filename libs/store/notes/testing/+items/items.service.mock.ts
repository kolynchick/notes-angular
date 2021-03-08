import { Injectable } from '@angular/core';
import { GetNotesResponseDTO } from '@notes-angular/dto';
import { Note } from '@notes-angular/models';
import { Filter, Pagination, Sort } from '@notes-angular/store/notes';
import { Observable, of } from 'rxjs';

@Injectable()
export class ItemsServiceMock {
  public getNotes(
    { createStartDate, createEndDate }: Filter,
    { field, direction }: Sort,
    { pageIndex, pageSize }: Pagination
  ): Observable<GetNotesResponseDTO> {
    return of({ notes: [], totalCount: 0 });
  }

  public createNote(title: string, message: string): Observable<Note> {
    return of({ id: '1', title: '', message: '', createDate: 0 });
  }

  public saveNote(id: string, note: Note): Observable<Note> {
    return of({ id: '1', title: '', message: '', createDate: 0 });
  }

  public removeNote(id: string): Observable<void> {
    return of(undefined);
  }
}
