import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SetSort, SetSortDirection, SetSortField } from './sort.actions';
import { SortState } from './sort.state';

describe('SortState', () => {
  let store: Store;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxsModule.forRoot([SortState])],
      }).compileComponents();
      store = TestBed.inject(Store);
    })
  );

  it('setSort', () => {
    store.dispatch(new SetSort('createDate', 'desc'));

    expect(store.selectSnapshot(SortState.sort)).toEqual({
      field: 'createDate',
      direction: 'desc',
    });
  });

  it('setSortDirection', () => {
    store.dispatch(new SetSortDirection('desc'));
    expect(store.selectSnapshot(SortState.sortDirection)).toEqual('desc');
  });

  it('setSortField', () => {
    store.dispatch(new SetSortField('createDate'));
    expect(store.selectSnapshot(SortState.sortField)).toEqual('createDate');
  });
});
