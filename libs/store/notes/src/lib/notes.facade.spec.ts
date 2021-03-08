import { TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';

import { NotesFacadeTestingModule } from '@notes-angular/store/notes/testing';
import { of } from 'rxjs';
import { SetSort } from './+sort/sort.actions';
import { NotesFacade } from './notes.facade';

describe('NotesFacade', () => {
  let facade: NotesFacade;
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NotesFacadeTestingModule],
        providers: [NotesFacade],
      }).compileComponents();

      facade = TestBed.inject(NotesFacade);
      store = TestBed.inject(Store);
    })
  );

  it('getNotesFromBackend', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.getNotesFromBackend().subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('loadMoreNotes', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.loadMoreNotes().subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('loadMoreNotes', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.loadMoreNotes().subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });

  it('handleActions', (done) => {
    facade.handleActions().subscribe((dispatched: unknown) => {
      expect(dispatched).toBeDefined();
      done();
    });

    store.dispatch(new SetSort('createDate', 'desc'));
  });
});
