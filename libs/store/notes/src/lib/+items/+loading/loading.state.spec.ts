import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { LoadingCompleted, LoadingStart } from './loading.actions';
import { LoadingState } from './loading.state';

describe('LoadingState', () => {
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxsModule.forRoot([LoadingState])],
      }).compileComponents();

      store = TestBed.inject(Store);
    })
  );

  it('loadingStart', () => {
    store.dispatch(new LoadingStart());

    const loading: boolean = store.selectSnapshot(LoadingState.loading);

    expect(loading).toBeTrue();
  });

  it('loadingCompleted', () => {
    store.dispatch(new LoadingCompleted());

    const loading: boolean = store.selectSnapshot(LoadingState.loading);

    expect(loading).toBeFalse();
  });
});
