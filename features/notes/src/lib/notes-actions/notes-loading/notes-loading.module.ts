import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesLoadingComponent } from './notes-loading.component';
import { MaterialModule } from '@notes-angular/dependencies';

@NgModule({
  declarations: [NotesLoadingComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NotesLoadingComponent],
})
export class NotesLoadingModule {}
