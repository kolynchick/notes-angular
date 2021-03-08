import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NotesFacade, SortState } from '@notes-angular/store/notes';
import { NotesFacadeMock } from './notes.facade.mock';

@NgModule({
  imports: [NgxsModule.forRoot([SortState])],
  providers: [
    {
      provide: NotesFacade,
      useClass: NotesFacadeMock,
    },
  ],
})
export class NotesFacadeTestingModule {}
