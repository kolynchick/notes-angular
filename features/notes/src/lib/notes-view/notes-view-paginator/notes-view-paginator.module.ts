import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesViewPaginatorComponent } from './notes-view-paginator.component';
import { MaterialModule, TranslocoModule } from '@notes-angular/dependencies';

@NgModule({
  declarations: [NotesViewPaginatorComponent],
  imports: [CommonModule, MaterialModule, TranslocoModule],
  exports: [NotesViewPaginatorComponent],
})
export class NotesViewPaginatorModule {}
