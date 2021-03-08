import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNoteModule } from './create-note/create-note.module';
import { NoteModule } from './note/note.module';
import { NotesViewComponent } from './notes-view.component';
import { NotesViewPaginatorModule } from './notes-view-paginator/notes-view-paginator.module';

@NgModule({
  declarations: [NotesViewComponent],
  imports: [
    CommonModule,
    NoteModule,
    CreateNoteModule,
    NotesViewPaginatorModule,
  ],
  exports: [NotesViewComponent],
})
export class NotesViewModule {}
