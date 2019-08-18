import { TestBed } from '@angular/core/testing';
import { NoteAPIService } from './note-api.service';

describe('NotesStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteAPIService = TestBed.get(NoteAPIService);
    expect(service).toBeTruthy();
  });
});
