import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  CreateNoteResponseDTO,
  GetNotesResponseDTO,
  RemoveNoteResponseDTO,
  SaveNoteResponseDTO,
} from '@notes-angular/dto';
import { ItemsApiServiceTestingModule } from '@notes-angular/store/notes/testing';
import { of } from 'rxjs';
import { ItemsApiService } from './items.api.service';

describe('ItemsApiService', () => {
  let http: HttpClient;
  let service: ItemsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemsApiServiceTestingModule],
      providers: [ItemsApiService],
    });
    service = TestBed.inject(ItemsApiService);
    http = TestBed.inject(HttpClient);
  });

  it('getNotes', (done) => {
    const expected = { notes: [], totalCount: 0 };
    spyOn(http, 'post').and.returnValue(of(expected));
    service.getNotes().subscribe((response: GetNotesResponseDTO) => {
      expect(response).toEqual(expected);
      done();
    });
  });

  it('createNote', (done) => {
    const expected = { id: '1', title: '', message: '', createDate: 0 };

    spyOn(http, 'post').and.returnValue(of(expected));
    service
      .createNote({ title: '', message: '', createDate: 0 })
      .subscribe((response: CreateNoteResponseDTO) => {
        expect(response).toEqual(expected);
        done();
      });
  });

  it('saveNote', (done) => {
    const expected = { id: '1', title: '', message: '', createDate: 0 };

    spyOn(http, 'patch').and.returnValue(of(expected));
    service
      .saveNote('1', { title: '', message: '', createDate: 0 })
      .subscribe((response: SaveNoteResponseDTO) => {
        expect(response).toEqual(expected);
        done();
      });
  });

  it('removeNote', (done) => {
    spyOn(http, 'delete').and.returnValue(of(undefined));
    service.removeNote('1').subscribe((response: RemoveNoteResponseDTO) => {
      expect(response).toBeUndefined();
      done();
    });
  });
});
