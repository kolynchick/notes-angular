import { TestBed } from '@angular/core/testing';

import { NoteStorage.ServiceService } from './note-storage.service.service';

describe('NoteStorage.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteStorage.ServiceService = TestBed.get(NoteStorage.ServiceService);
    expect(service).toBeTruthy();
  });
});
