import { Document } from 'mongoose';

export interface NoteEntity extends Document {
  readonly createDate: number;
  readonly title: string;
  readonly message: string;
}