import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NotesViewModeComponent } from './notes-view-mode.component';


@NgModule({
  declarations: [NotesViewModeComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [NotesViewModeComponent],
})
export class NotesViewModeModule {}
