import { FilterStateModel } from './+filter/filter.model';
import { PaginationStateModel } from './+pagination/pagination.model';
import { SortStateModel } from './+sort/sort.model';
import { ViewModeStateModel } from './+view-mode/view-mode.model';
import { ItemsStateModel } from './+items/items.model';

export interface NotesStateModel {
  filter: FilterStateModel;
  sort: SortStateModel;
  pagination: PaginationStateModel;
  viewMode: ViewModeStateModel;
  items: ItemsStateModel;
}
