import { TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';

import { FilterFacadeTestingModule } from '@notes-angular/store/notes/testing';
import { of } from 'rxjs';
import { FilterFacade } from './filter.facade';
import { Filter } from './filter.model';

describe('FilterFacade', () => {
  let facade: FilterFacade;
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FilterFacadeTestingModule],
        providers: [FilterFacade],
      }).compileComponents();

      facade = TestBed.inject(FilterFacade);
      store = TestBed.inject(Store);
    })
  );

  it('getFilter', (done) => {
    spyOn(store, 'select').and.returnValue(
      of({ createStartDate: 0, createEndDate: 0 })
    );

    facade.getFilter().subscribe((filter: Filter) => {
      expect(filter).toEqual({ createStartDate: 0, createEndDate: 0 });
      done();
    });
  });

  it('setFilter', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade
      .setFilter({ createStartDate: 0, createEndDate: 0 })
      .subscribe((dispatched: void) => {
        expect(dispatched).toBeUndefined();
        done();
      });
  });

  it('clearFilter', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.clearFilter().subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });
});
