import { Filter } from './filter.model';

export class SetFilter {
  public static readonly type = '[NotesView][Filter] set filter';
  constructor(public filter: Filter) {}
}

export class ClearFilter {
  public static readonly type = '[NotesView][Filter] set default filter';
}
