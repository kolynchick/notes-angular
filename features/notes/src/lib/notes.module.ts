import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletModule } from '@notes-angular/features/outlet';
import { NotesStoreModule } from '@notes-angular/store/notes';
import { TranslationStoreModule } from '@notes-angular/store/translation';

import { NotesComponent } from './notes.component';
import { NotesRoutesModule } from './notes.routes';
import { NotesActionsModule } from './notes-actions/notes-actions.module';
import { NotesViewModule } from './notes-view/notes-view.module';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutesModule,
    OutletModule,
    NotesStoreModule,
    TranslationStoreModule,
    NotesActionsModule,
    NotesViewModule,
  ],
  declarations: [NotesComponent],
})
export class NotesModule {}
