export interface Filter {
  createStartDate: number;
  createEndDate: number;
}

export type FilterStateModel = Filter;

export interface SetFilterPayload {
  filter: Filter;
}
