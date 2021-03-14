import { Module } from '@nestjs/common';

import { NoteServiceMock } from './note.service.mock';
import { NoteService } from '@notes-angular/api/routes/note/note.service';
import { NOTE_MODEL_PROVIDE_KEY } from '@notes-angular/api/routes/note/note.schema';
import { NoteModelMock } from './note.model.mock';

const NoteModelMockProvider = {
  provide: NOTE_MODEL_PROVIDE_KEY,
  useFactory: () => NoteModelMock,
};

@Module({
  providers: [
    {
      provide: NoteService,
      useClass: NoteServiceMock,
    },
    NoteModelMockProvider,
  ],
  exports: [NoteService, NoteModelMockProvider],
})
export class NoteServiceTestingModule {}
