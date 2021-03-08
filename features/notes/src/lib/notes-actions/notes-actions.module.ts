import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesActionsComponent } from './notes-actions.component';
import { NotesFilterModule } from './notes-filter/notes-filter.module';
import { NotesLoadingModule } from './notes-loading/notes-loading.module';
import { NotesSortModule } from './notes-sort/notes-sort.module';
import { NotesViewModeModule } from './notes-view-mode/notes-view-mode.module';

@NgModule({
  declarations: [NotesActionsComponent],
  imports: [
    CommonModule,
    NotesFilterModule,
    NotesLoadingModule,
    NotesSortModule,
    NotesViewModeModule,
  ],
  exports: [NotesActionsComponent],
})
export class NotesActionsModule {}
