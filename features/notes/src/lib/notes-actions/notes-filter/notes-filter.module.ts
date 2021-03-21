import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesFilterComponent } from './notes-filter.component';
import { MaterialModule, TranslocoModule } from '@notes-angular/dependencies';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotesFilterComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, TranslocoModule],
  exports: [NotesFilterComponent],
})
export class NotesFilterModule {}
