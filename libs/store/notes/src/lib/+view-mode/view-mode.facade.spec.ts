import { TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';

import { ViewModeFacadeTestingModule } from '@notes-angular/store/notes/testing';
import { of } from 'rxjs';
import { ViewModeFacade } from './view-mode.facade';
import { ViewMode } from './view-mode.model';

describe('ViewModeFacade', () => {
  let facade: ViewModeFacade;
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ViewModeFacadeTestingModule],
        providers: [ViewModeFacade],
      }).compileComponents();

      facade = TestBed.inject(ViewModeFacade);
      store = TestBed.inject(Store);
    })
  );

  it('getViewMode', (done) => {
    spyOn(store, 'select').and.returnValue(of('big-tiles'));

    facade.getViewMode().subscribe((viewMode: ViewMode) => {
      expect(viewMode).toEqual('big-tiles');
      done();
    });
  });

  it('toggleToBigTilesViewMode', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.toggleToBigTilesViewMode().subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('toggleToSmallTilesViewMode', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.toggleToSmallTilesViewMode().subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('toggleToLinesViewMode', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.toggleToLinesViewMode().subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });
});
