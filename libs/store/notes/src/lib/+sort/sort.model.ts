import { SortDirection } from '@angular/material/sort';

export interface Sort {
  field: string;
  direction: SortDirection;
}

export type SortStateModel = Sort;

export interface SetSortPayload {
  field: string;
  direction: SortDirection;
}

export interface SetSortDirectionPayload {
  direction: SortDirection;
}

export interface SetSortFieldPayload {
  field: string;
}