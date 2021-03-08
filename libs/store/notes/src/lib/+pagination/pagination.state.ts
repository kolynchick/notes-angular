import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import {
  Pagination,
  PaginationStateModel,
  SetPageSizePayload,
  SetPageIndexPayload,
} from './pagination.model';
import { SetPageIndex, SetPageSize, ClearPage } from './pagination.actions';

@State<PaginationStateModel>({
  name: 'pagination',
  defaults: {
    pageIndex: 0,
    pageSize: 10,
  },
})
@Injectable()
export class PaginationState {
  @Selector()
  public static pagination(state: Pagination): Pagination {
    return state;
  }

  @Action(SetPageIndex)
  public setPageIndex(
    { patchState }: StateContext<PaginationStateModel>,
    { pageIndex }: SetPageIndexPayload
  ): void {
    patchState({ pageIndex });
  }

  @Action(SetPageSize)
  public setPageSize(
    { patchState }: StateContext<PaginationStateModel>,
    { pageSize }: SetPageSizePayload
  ): void {
    patchState({ pageSize });
  }

  @Action(ClearPage)
  public clearPage({ patchState }: StateContext<PaginationStateModel>): void {
    patchState({
      pageIndex: 0,
      pageSize: 10,
    });
  }
}
