import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesActionsComponent } from './notes-actions.component';

describe('NotesActionsComponent', () => {
  let component: NotesActionsComponent;
  let fixture: ComponentFixture<NotesActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesActionsComponent],
    })
      .overrideComponent(NotesActionsComponent, {
        set: {
          template: '',
          
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
