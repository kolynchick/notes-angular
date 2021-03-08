import { Injectable } from '@angular/core';
import { GetNotesRequestDTO, GetNotesResponseDTO } from '@notes-angular/dto';
import { Note } from '@notes-angular/models';
import { getRangeDate } from '@notes-angular/common';
import { omit } from 'lodash';
import { Observable } from 'rxjs';
import { Filter } from '../+filter/filter.model';
import { Pagination } from '../+pagination/pagination.model';
import { Sort } from '../+sort/sort.model';
import { ItemsApiService } from './items.api.service';

@Injectable()
export class ItemsService {
  constructor(private api: ItemsApiService) {}

  public getNotes(
    { createStartDate, createEndDate }: Filter,
    { field, direction }: Sort,
    { pageIndex, pageSize }: Pagination
  ): Observable<GetNotesResponseDTO> {
    const rangeDate: [Date, Date] = getRangeDate(
      createStartDate,
      createEndDate
    );

    const body: GetNotesRequestDTO = {
      sort: {
        field,
        direction,
      },
      filter: {
        createDate: {
          start: +rangeDate[0],
          end: +rangeDate[1],
        },
      },
      pagination: {
        first: pageIndex * pageSize,
        max: pageSize,
      },
    };
    return this.api.getNotes(body);
  }

  public createNote(title: string, message: string): Observable<Note> {
    return this.api.createNote({
      title,
      message,
      createDate: Date.now(),
    });
  }

  public saveNote(id: string, note: Note): Observable<Note> {
    return this.api.saveNote(id, omit(note, 'id'));
  }

  public removeNote(id: string): Observable<void> {
    return this.api.removeNote(id);
  }
}
