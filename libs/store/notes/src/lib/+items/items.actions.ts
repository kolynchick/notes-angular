import { Filter } from '../+filter/filter.model';
import { Pagination } from '../+pagination/pagination.model';
import { Sort } from '../+sort/sort.model';

export class CreateItem {
  public static readonly type = '[NotesView][Items] Create a new item';
  constructor(public title?: string, public message?: string) {}
}

export class SaveItem {
  public static readonly type = '[NotesView][Items] Save item';
  constructor(
    public id: string,
    public title?: string,
    public message?: string
  ) {}
}

export class RemoveItem {
  public static readonly type = '[NotesView][Items] Remove item';
  constructor(public id: string) {}
}

export class GetItems {
  public static readonly type = '[NotesView][Items] Get items from backend';
  constructor(
    public filter: Filter,
    public sort: Sort,
    public pagination: Pagination,
    public update?: boolean
  ) {}
}
