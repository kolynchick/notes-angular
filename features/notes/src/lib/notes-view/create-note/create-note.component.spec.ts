import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { ItemsFacadeTestingModule } from '@notes-angular/store/notes/testing';
import { NoteEditFormComponent } from '../note/note-edit-form/note-edit-form.component';

import { CreateNoteComponent } from './create-note.component';

describe('CreateNoteComponent', () => {
  let component: CreateNoteComponent;
  let fixture: ComponentFixture<CreateNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsFacadeTestingModule],
      declarations: [CreateNoteComponent],
    })
      .overrideComponent(CreateNoteComponent, {
        set: {
          template: '',
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    component.noteEditForm = {
      form: new FormGroup({}),
    } as NoteEditFormComponent;

    component.changed({ title: '1', message: '2' });
    expect(component.create()).toBeUndefined();
  });
});
