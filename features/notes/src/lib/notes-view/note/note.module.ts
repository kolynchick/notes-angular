import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoteEditFormModule } from './note-edit-form/note-edit-form.module';

@NgModule({
  declarations: [NoteComponent],
  imports: [CommonModule, FontAwesomeModule, NoteEditFormModule],
  exports: [NoteComponent, FontAwesomeModule],
})
export class NoteModule {}
