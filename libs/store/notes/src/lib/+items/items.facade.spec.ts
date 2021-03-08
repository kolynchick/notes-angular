import { TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { Note } from '@notes-angular/models';

import { ItemsFacadeTestingModule } from '@notes-angular/store/notes/testing';
import { of } from 'rxjs';
import { ItemsFacade } from './items.facade';

describe('ItemsFacade', () => {
  let facade: ItemsFacade;
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ItemsFacadeTestingModule],
        providers: [ItemsFacade],
      }).compileComponents();

      facade = TestBed.inject(ItemsFacade);
      store = TestBed.inject(Store);
    })
  );

  it('getItems', (done) => {
    spyOn(store, 'select').and.returnValue(of([]));

    facade.getItems().subscribe((items: Note[]) => {
      expect(items).toEqual([]);
      done();
    });
  });

  it('getTotalCount', (done) => {
    spyOn(store, 'select').and.returnValue(of(0));

    facade.getTotalCount().subscribe((totalCount: number) => {
      expect(totalCount).toEqual(0);
      done();
    });
  });

  it('createItem', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.createItem('', '').subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('saveItem', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.saveItem('', '', '').subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('removeItem', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.removeItem('').subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });
});
