import { Injectable } from '@angular/core';
import { Note } from '../types';
import { validationStorage, keyStorage } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteStorage {

  private readonly maxLengthStorage: number;
  private readonly maxLengthStorageErrorMessage: string;
  private readonly keyStorage: string;

  constructor() {
    this.maxLengthStorage = validationStorage.maxLength.value;
    this.maxLengthStorageErrorMessage = validationStorage.maxLength.message;
    this.keyStorage = keyStorage
  }

  public get = () => {
    const storage: string =
      window.localStorage.getItem(this.keyStorage) || '[]';
    return JSON.parse(storage);
  };

  public set = (nextState: Note[]) => {
    const validation = this.validationMaxLength(nextState);
    if (validation.success) {
      window.localStorage.setItem(this.keyStorage, JSON.stringify(nextState));
    }
    return validation;
  }

  private validationMaxLength =
    (storage: Note[]): { success: boolean, message: string } => {
      const callbackValidation = function (item: Note) {
        this.messageLength += item.message.length;
        return this.messageLength < this.maxLength;
      };
      const scopeValidation = {
        messageLength: 0,
        maxLength: this.maxLengthStorage
      };
      const valid = storage.every(callbackValidation, scopeValidation);

      return {
        success: valid,
        message: !valid ? this.maxLengthStorageErrorMessage : ''
      };
    }

}
