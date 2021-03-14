import { Injectable } from '@nestjs/common';

const noteEntity = {
  toJSON() {
    return { id: '', title: '1', message: '2', createDate: 0 };
  },
};

@Injectable()
export class NoteModelMock {
  public save() {
    return new Promise((resolve) => resolve(noteEntity));
  }

  public static exec() {
    return new Promise((resolve) => resolve(noteEntity));
  }

  public static count() {
    return new Promise((resolve) => resolve(0));
  }

  public static find() {
    return this;
  }

  public static findById() {
    return new Promise((resolve) => resolve(noteEntity));
  }

  public static findByIdAndUpdate() {
    return new Promise((resolve) => resolve(noteEntity));
  }

  public static findByIdAndDelete() {
    return new Promise((resolve) => resolve(noteEntity));
  }

  public static sort() {
    return this;
  }

  public static skip() {
    return this;
  }

  public static limit() {
    return this;
  }
}
