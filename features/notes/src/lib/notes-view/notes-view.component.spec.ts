import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaIconLibraryTestingModule } from '@notes-angular/dependencies/testing';
import {
  ItemsFacadeTestingModule,
  ViewModeFacadeTestingModule,
} from '@notes-angular/store/notes/testing';

import { NotesViewComponent } from './notes-view.component';

describe('NotesViewComponent', () => {
  let component: NotesViewComponent;
  let fixture: ComponentFixture<NotesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ViewModeFacadeTestingModule,
        ItemsFacadeTestingModule,
        FaIconLibraryTestingModule,
      ],
      declarations: [NotesViewComponent],
    })
      .overrideComponent(NotesViewComponent, {
        set: {
          template: '',
          
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
