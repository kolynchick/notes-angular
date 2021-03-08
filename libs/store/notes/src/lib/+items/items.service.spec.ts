import { TestBed } from '@angular/core/testing';
import {
  CreateNoteResponseDTO,
  GetNotesResponseDTO,
  RemoveNoteResponseDTO,
  SaveNoteResponseDTO,
} from '@notes-angular/dto';
import { ItemsServiceTestingModule } from '@notes-angular/store/notes/testing';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemsServiceTestingModule],
      providers: [ItemsService],
    });
    service = TestBed.inject(ItemsService);
  });

  it('getNotes', (done) => {
    service
      .getNotes(
        { createStartDate: 0, createEndDate: 0 },
        { field: 'createDate', direction: 'desc' },
        { pageIndex: 0, pageSize: 0 }
      )
      .subscribe((response: GetNotesResponseDTO) => {
        expect(response).toBeDefined();
        done();
      });
  });

  it('createNote', (done) => {
    service.createNote('', '').subscribe((response: CreateNoteResponseDTO) => {
      expect(response).toBeDefined();
      done();
    });
  });

  it('saveNote', (done) => {
    service
      .saveNote('', { id: '', title: '', message: '', createDate: 0 })
      .subscribe((response: SaveNoteResponseDTO) => {
        expect(response).toBeDefined();
        done();
      });
  });

  it('removeNote', (done) => {
    service.removeNote('').subscribe((response: RemoveNoteResponseDTO) => {
      expect(response).toBeUndefined();
      done();
    });
  });
});
