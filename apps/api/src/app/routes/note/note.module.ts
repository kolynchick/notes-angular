import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import {
  DATABASE_CONNECTION_PROVIDE_KEY,
  DatabaseModule,
} from '@notes-angular/api/database';
import { NoteController } from './note.controller';
import { NoteSchema, NOTE_MODEL_PROVIDE_KEY } from './note.schema';
import { NoteService } from './note.service';

@Module({
  imports: [DatabaseModule],
  controllers: [NoteController],
  providers: [
    NoteService,
    {
      provide: NOTE_MODEL_PROVIDE_KEY,
      useFactory: (connection: Connection) =>
        connection.model('note', NoteSchema),
      inject: [DATABASE_CONNECTION_PROVIDE_KEY],
    },
  ],
})
export class NoteModule {}
