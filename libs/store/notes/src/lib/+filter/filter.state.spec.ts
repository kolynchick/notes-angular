import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, StateContext, Store } from '@ngxs/store';
import { ClearFilter, SetFilter } from './filter.actions';
import { Filter } from './filter.model';
import { FilterState } from './filter.state';

describe('FilterState', () => {
  let store: Store;
  let state: FilterState;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxsModule.forRoot([FilterState])],
      }).compileComponents();
      store = TestBed.inject(Store);
      state = TestBed.inject(FilterState);
    })
  );

  it('setFilter', () => {
    const expected: Filter = { createStartDate: 0, createEndDate: 0 };
    store.dispatch(new SetFilter(expected));

    expect(store.selectSnapshot(FilterState.filter)).toEqual(expected);
  });

  it('clearFilter', () => {
    store.dispatch(new ClearFilter());

    expect(store.selectSnapshot(FilterState.filter)).toBeDefined();
  });

  it('ngxsOnInit', () => {
    const stateContext: StateContext<Filter> = {
      getState() {
        return { createStartDate: 1, createEndDate: 1 };
      },
    } as StateContext<Filter>;

    expect(state.ngxsOnInit(stateContext)).toBeUndefined();
  });
});
