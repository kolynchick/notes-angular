import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NotesSortComponent } from './notes-sort.component';


@NgModule({
  declarations: [NotesSortComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [NotesSortComponent],
})
export class NotesSortModule {}
