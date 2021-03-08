import { Module } from '@nestjs/common';

import { NoteModule } from './routes/note/note.module';

@Module({
  imports: [NoteModule]
})
export class AppModule {}
