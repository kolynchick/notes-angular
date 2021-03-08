import { Note } from '@notes-angular/models';

export type NoteEditForm = Pick<Note, 'title' | 'message'>;
