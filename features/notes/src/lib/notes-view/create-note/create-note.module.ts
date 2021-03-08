import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CreateNoteComponent } from './create-note.component';
import { NoteEditFormModule } from '../note/note-edit-form/note-edit-form.module';

@NgModule({
  declarations: [CreateNoteComponent],
  imports: [CommonModule, NoteEditFormModule, FontAwesomeModule],
  exports: [CreateNoteComponent],
})
export class CreateNoteModule {}
