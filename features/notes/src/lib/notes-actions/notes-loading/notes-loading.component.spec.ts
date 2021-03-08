import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingFacadeTestingModule } from '@notes-angular/store/notes/testing';

import { NotesLoadingComponent } from './notes-loading.component';

describe('NotesLoadingComponent', () => {
  let component: NotesLoadingComponent;
  let fixture: ComponentFixture<NotesLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingFacadeTestingModule],
      declarations: [NotesLoadingComponent],
    })
      .overrideComponent(NotesLoadingComponent, {
        set: {
          template: '',
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
