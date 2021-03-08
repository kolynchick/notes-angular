export interface Pagination {
  pageIndex: number;
  pageSize: number;
}

export type PaginationStateModel = Pagination;

export interface SetPageIndexPayload {
  pageIndex: number;
}

export interface SetPageSizePayload {
  pageSize: number;
}
