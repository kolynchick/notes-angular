export class SetPageIndex {
  public static readonly type = '[NotesView][Pagination] set page index';
  constructor(public pageIndex: number) {}
}

export class SetPageSize {
  public static readonly type = '[NotesView][Pagination] set page size';
  constructor(public pageSize: number) {}
}

export class ClearPage {
  public static readonly type = '[NotesView][Pagination] clear page';
}
