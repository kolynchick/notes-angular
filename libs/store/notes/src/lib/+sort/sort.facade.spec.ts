import { TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';

import { SortFacadeTestingModule } from '@notes-angular/store/notes/testing';
import { of } from 'rxjs';
import { SortFacade } from './sort.facade';
import { Sort } from './sort.model';

describe('SortFacade', () => {
  let facade: SortFacade;
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SortFacadeTestingModule],
        providers: [SortFacade],
      }).compileComponents();

      facade = TestBed.inject(SortFacade);
      store = TestBed.inject(Store);
    })
  );

  it('getSort', (done) => {
    spyOn(store, 'select').and.returnValue(
      of({ field: 'createDate', direction: 'desc' })
    );

    facade.getSort().subscribe((filter: Sort) => {
      expect(filter).toEqual({ field: 'createDate', direction: 'desc' });
      done();
    });
  });

  it('getSortField', (done) => {
    spyOn(store, 'select').and.returnValue(of('createDate'));

    facade.getSortField().subscribe((sortField: string) => {
      expect(sortField).toEqual('createDate');
      done();
    });
  });

  it('getSortDirection', (done) => {
    spyOn(store, 'select').and.returnValue(of('desc'));

    facade.getSortDirection().subscribe((sortDirection: string) => {
      expect(sortDirection).toEqual('desc');
      done();
    });
  });

  it('setSort', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.setSort('createDate', 'desc').subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('setSortField', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.setSortField('createDate').subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('setSortDirection', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.setSortDirection('desc').subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });
});
