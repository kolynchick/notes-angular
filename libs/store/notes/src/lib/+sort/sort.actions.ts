import { SortDirection } from '@angular/material/sort';

export class SetSort {
  public static readonly type = '[NotesView][Sort] set sort';
  constructor(public field: string, public direction: SortDirection) {}
}

export class SetSortDirection {
  public static readonly type = '[NotesView][Sort] set sort direction';
  constructor(public direction: SortDirection) {}
}

export class SetSortField {
  public static readonly type = '[NotesView][Sort] set sort field';
  constructor(public field: string) {}
}

export class ClearSort {
  public static readonly type = '[NotesView][Sort] clear sort';
}
