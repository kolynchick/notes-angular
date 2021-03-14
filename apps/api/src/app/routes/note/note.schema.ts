import { Schema } from 'mongoose';

const noteSchema = {
  createDate: Number,
  title: String,
  message: String,
};

export const NoteSchema = new Schema(noteSchema);

export const NOTE_MODEL_PROVIDE_KEY = 'NOTE_MODEL';
