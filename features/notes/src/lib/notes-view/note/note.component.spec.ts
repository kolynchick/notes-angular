import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsFacadeTestingModule } from '@notes-angular/store/notes/testing';

import { NoteComponent } from './note.component';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsFacadeTestingModule],
      declarations: [NoteComponent],
    })
      .overrideComponent(NoteComponent, {
        set: {
          template: '',
          
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;

    component.note = { id: '', title: '', message: '', createDate: 0 };
    component.changed({ title: '', message: '' });

    fixture.detectChanges();
  });

  it('create', () => {
    expect(component.create()).toBeUndefined();
  });

  it('remove', () => {
    expect(component.remove()).toBeUndefined();
  });

  it('save', () => {
    expect(component.save()).toBeUndefined();
  });

  it('edit', () => {
    expect(component.edit()).toBeUndefined();
  });
  
  it('cancel', () => {
    expect(component.cancel()).toBeUndefined();
  });
});
