import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaIconLibraryTestingModule } from '@notes-angular/dependencies/testing';
import { ViewModeFacadeTestingModule } from '@notes-angular/store/notes/testing';

import { NotesViewModeComponent } from './notes-view-mode.component';

describe('NotesViewModeComponent', () => {
  let component: NotesViewModeComponent;
  let fixture: ComponentFixture<NotesViewModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewModeFacadeTestingModule, FaIconLibraryTestingModule],
      declarations: [ NotesViewModeComponent ]
    }).overrideComponent(NotesViewModeComponent, {
      set: {
        template: ''
      }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesViewModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('toggleToLinesViewMode', () => {
    expect(component.toggleToLinesViewMode()).toBeUndefined();
  });

  it('toggleToSmallTilesViewMode', () => {
    expect(component.toggleToSmallTilesViewMode()).toBeUndefined();
  });

  it('toggleToBigTilesViewMode', () => {
    expect(component.toggleToBigTilesViewMode()).toBeUndefined();
  });
});
