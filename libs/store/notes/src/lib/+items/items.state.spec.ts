import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ItemsState } from './items.state';
import { CreateItem, GetItems, RemoveItem, SaveItem } from './items.actions';
import { ItemsServiceTestingModule } from '@notes-angular/store/notes/testing';
import { ItemsService } from './items.service';
import { of } from 'rxjs';
import { LoadingState } from './+loading/loading.state';

describe('ItemsState', () => {
  let store: Store;
  let service: ItemsService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NgxsModule.forRoot([ItemsState, LoadingState], {}),
          ItemsServiceTestingModule,
        ],
      }).compileComponents();

      store = TestBed.inject(Store);
      service = TestBed.inject(ItemsService);
    })
  );

  describe('getItems', () => {
    it('set mode', (done) => {
      store
        .dispatch(
          new GetItems(
            { createStartDate: 0, createEndDate: 0 },
            { field: 'createDate', direction: 'desc' },
            { pageIndex: 0, pageSize: 0 }
          )
        )
        .subscribe(() => {
          expect(store.selectSnapshot(ItemsState.items)).toEqual([]);
          done();
        });
    });

    it('update mode', (done) => {
      store
        .dispatch(
          new GetItems(
            { createStartDate: 0, createEndDate: 0 },
            { field: 'createDate', direction: 'desc' },
            { pageIndex: 0, pageSize: 0 },
            true
          )
        )
        .subscribe(() => {
          expect(store.selectSnapshot(ItemsState.items)).toEqual([]);
          done();
        });
    });
  });

  it('createItem', (done) => {
    store.dispatch(new CreateItem('', '')).subscribe(() => {
      expect(store.selectSnapshot(ItemsState.totalCount)).toEqual(0);
      done();
    });
  });

  it('createItem', (done) => {
    store.dispatch(new CreateItem('', '')).subscribe(() => {
      expect(store.selectSnapshot(ItemsState.totalCount)).toEqual(0);
      done();
    });
  });

  it('saveItem', (done) => {
    spyOn(service, 'getNotes').and.returnValue(
      of({
        notes: [{ id: '1', title: '', message: '', createDate: 0 }],
        totalCount: 1,
      })
    );

    store
      .dispatch(
        new GetItems(
          { createStartDate: 0, createEndDate: 0 },
          { field: 'createDate', direction: 'desc' },
          { pageIndex: 0, pageSize: 0 }
        )
      )
      .subscribe(() => {
        store.dispatch(new SaveItem('1')).subscribe(() => {
          expect(store.selectSnapshot(ItemsState.totalCount)).toEqual(1);
          done();
        });
      });
  });

  it('removeItem', (done) => {
    store.dispatch(new RemoveItem('1')).subscribe(() => {
      expect(store.selectSnapshot(ItemsState.totalCount)).toEqual(0);
      done();
    });
  });
});
