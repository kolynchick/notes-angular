import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Note } from '@notes-angular/models';

import { NoteEditFormComponent } from './note-edit-form.component';

describe('NoteEditFormComponent', () => {
  let component: NoteEditFormComponent;
  let fixture: ComponentFixture<NoteEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteEditFormComponent],
    })
      .overrideComponent(NoteEditFormComponent, {
        set: {
          template: '',
          
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEditFormComponent);
    component = fixture.componentInstance;
    component.note = { id: '', title: '', message: '', createDate: 0 };
    fixture.detectChanges();
  });

  it('changed', (done) => {
    component.changed.subscribe((note: Note) => {
      expect(note).toEqual({ id: '', title: '', message: '', createDate: 0 });
      done();
    });

    component.ngOnInit();
  });

  describe('ngOnChanges', () => {
    it('first change', () => {
      expect(
        component.ngOnChanges({
          note: {
            previousValue: null,
            currentValue: null,
            firstChange: true,
            isFirstChange: () => true,
          },
        })
      ).toBeUndefined();
    });

    it('not first change', () => {
      expect(
        component.ngOnChanges({
          note: {
            previousValue: null,
            currentValue: null,
            firstChange: false,
            isFirstChange: () => false,
          },
        })
      ).toBeUndefined();
    });
  });
});
