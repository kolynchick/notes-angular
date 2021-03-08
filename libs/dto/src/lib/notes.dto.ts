import { SortDirection } from '@angular/material/sort';
import { Note } from '@notes-angular/models';
import { RangeDate } from './common.models';

export type CreateNoteRequestDTO = Omit<Note, 'id'>;
export type CreateNoteResponseDTO = Note;

export type GetNoteByIdResponseDTO = Note;

export interface GetNotesRequestDTO {
  ids?: Note['id'][];
  filter?: NoteFilterDTO;
  pagination?: NotePaginationDTO;
  sort?: NoteSortDTO;
}

export interface GetNotesResponseDTO {
  notes: Note[];
  totalCount: number;
}

export interface NoteSortDTO {
  field: string;
  direction: SortDirection;
}

export interface NoteFilterDTO {
  createDate: RangeDate;
}

export interface NotePaginationDTO {
  first: number;
  max: number;
}

export type SaveNoteRequestDTO = Omit<Note, 'id'>;
export type SaveNoteResponseDTO = Note;

export type RemoveNoteResponseDTO = void;
