import { TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';

import { PaginationFacadeTestingModule } from '@notes-angular/store/notes/testing';
import { of } from 'rxjs';
import { PaginationFacade } from './pagination.facade';
import { Pagination } from './pagination.model';

describe('PaginationFacade', () => {
  let facade: PaginationFacade;
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [PaginationFacadeTestingModule],
        providers: [PaginationFacade],
      }).compileComponents();

      facade = TestBed.inject(PaginationFacade);
      store = TestBed.inject(Store);
    })
  );

  it('getPagination', (done) => {
    spyOn(store, 'select').and.returnValue(of({ pageIndex: 0, pageSize: 0 }));

    facade.getPagination().subscribe((pagination: Pagination) => {
      expect(pagination).toEqual({ pageIndex: 0, pageSize: 0 });
      done();
    });
  });

  it('setPageIndex', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.setPageIndex(0).subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('setPageSize', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.setPageSize(0).subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('clearPagination', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.clearPagination().subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });
});
