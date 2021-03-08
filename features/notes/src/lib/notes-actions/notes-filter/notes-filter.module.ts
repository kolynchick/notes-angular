import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesFilterComponent } from './notes-filter.component';
import { MaterialModule } from '@notes-angular/dependencies';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotesFilterComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [NotesFilterComponent],
})
export class NotesFilterModule {}
