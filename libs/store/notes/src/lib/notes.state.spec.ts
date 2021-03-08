import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ItemsServiceTestingModule } from '@notes-angular/store/notes/testing';
import { FilterState } from './+filter/filter.state';
import { LoadingState } from './+items/+loading/loading.state';
import { ItemsState } from './+items/items.state';
import { PaginationState } from './+pagination/pagination.state';
import { SortState } from './+sort/sort.state';
import { ViewModeState } from './+view-mode/view-mode.state';
import { GetNotes, LoadMoreNotes } from './notes.actions';
import { NotesState } from './notes.state';

describe('NotesState', () => {
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NgxsModule.forRoot([
            NotesState,
            FilterState,
            SortState,
            PaginationState,
            ViewModeState,
            ItemsState,
            LoadingState,
          ]),
          ItemsServiceTestingModule,
        ],
      }).compileComponents();
      store = TestBed.inject(Store);
    })
  );

  it('getNotesView', () => {
    store.dispatch(new GetNotes());

    expect(store).toBeTruthy();
  });

  it('loadMoreNotes', () => {
    store.dispatch(new LoadMoreNotes());

    expect(store).toBeTruthy();
  });
});
