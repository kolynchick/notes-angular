import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import {
  ToggleToBigTilesViewMode,
  ToggleToLinesViewMode,
  ToggleToSmallTilesViewMode,
} from './view-mode.actions';
import { ViewModeState } from './view-mode.state';

describe('ViewModeState', () => {
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxsModule.forRoot([ViewModeState])],
      }).compileComponents();
      store = TestBed.inject(Store);
    })
  );

  it('toggleToBigTilesViewMode', () => {
    store.dispatch(new ToggleToBigTilesViewMode());

    expect(store.selectSnapshot(ViewModeState.viewMode)).toEqual('big-tiles');
  });

  it('toggleToSmallTilesViewMode', () => {
    store.dispatch(new ToggleToSmallTilesViewMode());

    expect(store.selectSnapshot(ViewModeState.viewMode)).toEqual('small-tiles');
  });

  it('toggleToLinesViewMode', () => {
    store.dispatch(new ToggleToLinesViewMode());

    expect(store.selectSnapshot(ViewModeState.viewMode)).toEqual('lines');
  });
});
