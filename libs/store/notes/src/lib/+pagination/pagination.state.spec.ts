import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ClearPage, SetPageIndex, SetPageSize } from './pagination.actions';
import { Pagination } from './pagination.model';
import { PaginationState } from './pagination.state';

describe('PaginationState', () => {
  let store: Store;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxsModule.forRoot([PaginationState])],
      }).compileComponents();
      store = TestBed.inject(Store);
    })
  );

  it('setPageIndex', () => {
    store.dispatch(new SetPageIndex(1));

    const pagination: Pagination = store.selectSnapshot(
      PaginationState.pagination
    );
    expect(pagination).toEqual({ pageSize: 10, pageIndex: 1 });
  });

  it('setPageSize', () => {
    store.dispatch(new SetPageSize(20));

    const pagination: Pagination = store.selectSnapshot(
      PaginationState.pagination
    );
    expect(pagination).toEqual({ pageSize: 20, pageIndex: 0 });
  });

  it('clearPage', () => {
    store.dispatch(new ClearPage());

    const pagination: Pagination = store.selectSnapshot(
      PaginationState.pagination
    );
    expect(pagination).toEqual({ pageSize: 10, pageIndex: 0 });
  });
});
