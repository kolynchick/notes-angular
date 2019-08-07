import { TestBed } from '@angular/core/testing';
import { NotesStorageService } from './notes-storage.service';

describe('NotesStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesStorageService = TestBed.get(NotesStorageService);
    expect(service).toBeTruthy();
  });
});
