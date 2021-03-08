import { SortDirection } from '@angular/material/sort';

export interface Note {
  id: string;
  createDate: number;
  title: string;
  message: string;
}

export interface NoteFilter {
  createDate: [number, number];
}

export interface NoteSort {
  field: 'createDate';
  direction: SortDirection
}

export interface NotePagination {
  pageSize: number;
  pageIndex: number;
}