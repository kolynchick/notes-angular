import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteEditFormComponent } from './note-edit-form.component';
import { MaterialModule } from '@notes-angular/dependencies';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NoteEditFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [NoteEditFormComponent],
})
export class NoteEditFormModule {}
