import { Note } from '@notes-angular/models';
import { Filter } from '../+filter/filter.model';
import { Pagination } from '../+pagination/pagination.model';
import { Sort } from '../+sort/sort.model';

export interface FilerNote {
  createDate: [number, number];
}

export interface GetNotesPayload {
  filter: Filter;
  sort: Sort;
  pagination: Pagination;
  update?: boolean;
}

export interface CreateNotePayload {
  title: string;
  message: string;
}

export interface RemoveNotePayload {
  id: string;
}

export interface SaveNotePayload {
  id: string;
  title: string;
  message: string;
}

export interface ItemsStateModel {
  notes: Note[];
  totalCount: number;
}
