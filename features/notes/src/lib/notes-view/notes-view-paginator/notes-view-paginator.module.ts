import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesViewPaginatorComponent } from './notes-view-paginator.component';
import { MaterialModule } from '@notes-angular/dependencies';

@NgModule({
  declarations: [NotesViewPaginatorComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NotesViewPaginatorComponent],
})
export class NotesViewPaginatorModule {}
