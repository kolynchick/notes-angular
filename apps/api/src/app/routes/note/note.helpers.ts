import { omit } from 'lodash';
import { Note } from '@notes-angular/models';

import { NoteEntity } from './note.models';

export const convertToNote = (noteEntity: NoteEntity): Note =>
  omit(noteEntity.toJSON({ virtuals: true, versionKey: false }), '_id') as Note;
