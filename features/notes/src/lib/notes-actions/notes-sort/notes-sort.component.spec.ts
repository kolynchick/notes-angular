import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortFacadeTestingModule } from '@notes-angular/store/notes/testing';
import { FaIconLibraryTestingModule } from '@notes-angular/dependencies/testing';

import { NotesSortComponent } from './notes-sort.component';

describe('NotesSortComponent', () => {
  let component: NotesSortComponent;
  let fixture: ComponentFixture<NotesSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortFacadeTestingModule, FaIconLibraryTestingModule],
      declarations: [NotesSortComponent],
    })
      .overrideComponent(NotesSortComponent, {
        set: {
          template: '',
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('createDateSortAsc', () => {
    expect(component.createDateSortAsc()).toBeUndefined();
  });

  it('createDateSortDesc', () => {
    expect(component.createDateSortDesc()).toBeUndefined();
  });
});
