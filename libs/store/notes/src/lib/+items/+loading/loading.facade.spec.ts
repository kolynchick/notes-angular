import { TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';

import { LoadingFacadeTestingModule } from '@notes-angular/store/notes/testing';
import { of } from 'rxjs';
import { LoadingFacade } from './loading.facade';

describe('LoadingFacade', () => {
  let facade: LoadingFacade;
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [LoadingFacadeTestingModule],
        providers: [LoadingFacade],
      }).compileComponents();

      facade = TestBed.inject(LoadingFacade);
      store = TestBed.inject(Store);
    })
  );

  it('getLoading', (done) => {
    spyOn(store, 'select').and.returnValue(of(true));

    facade.getLoading().subscribe((loading: boolean) => {
      expect(loading).toBeTrue();
      done();
    });
  });

  it('loadingStart', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.loadingStart().subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('loadingCompleted', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.loadingCompleted().subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });
});
