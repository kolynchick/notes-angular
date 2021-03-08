import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ItemsFacadeTestingModule,
  NotesFacadeTestingModule,
  PaginationFacadeTestingModule,
} from '@notes-angular/store/notes/testing';

import { NotesViewPaginatorComponent } from './notes-view-paginator.component';

describe('NotesViewPaginatorComponent', () => {
  let component: NotesViewPaginatorComponent;
  let fixture: ComponentFixture<NotesViewPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NotesFacadeTestingModule,
        ItemsFacadeTestingModule,
        PaginationFacadeTestingModule,
      ],
      declarations: [NotesViewPaginatorComponent],
    })
      .overrideComponent(NotesViewPaginatorComponent, {
        set: {
          template: '',
          
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesViewPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('showPaginator$', (done) => {
    component.showPaginator$.subscribe((showPaginator: boolean) => {
      expect(showPaginator).toBeFalse();
      done();
    });
  });

  it('load', () => {
    expect(component.load({ pageIndex: 0, pageSize: 0 })).toBeUndefined();
  });
});
