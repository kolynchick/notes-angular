import { Test, TestingModule } from '@nestjs/testing';
import { NoteServiceTestingModule } from '@notes-angular/api/testing';
import {
  CreateNoteResponseDTO,
  GetNoteByIdResponseDTO,
  GetNotesResponseDTO,
  RemoveNoteResponseDTO,
  SaveNoteResponseDTO,
} from '@notes-angular/dto';
import { Model } from 'mongoose';
import { NoteEntity } from './note.models';
import { NOTE_MODEL_PROVIDE_KEY } from './note.schema';
import { NoteService } from './note.service';

describe('NoteService', () => {
  let service: NoteService;
  let model: Model<NoteEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NoteServiceTestingModule],
    })
      .overrideProvider(NoteService)
      .useClass(NoteService)
      .compile();

    service = module.get<NoteService>(NoteService);
    model = module.get<Model<NoteEntity>>(NOTE_MODEL_PROVIDE_KEY);
  });

  describe('getNotes', () => {
    beforeEach(() => {
      // @ts-ignore
      jest.spyOn(model, 'exec').mockImplementation(
        () =>
          // @ts-ignore
          new Promise((resolve) => {
            resolve([]);
          })
      );
    });

    it('without args', (done) => {
      service.getNotes({}).subscribe((response: GetNotesResponseDTO) => {
        expect(response).toEqual({ notes: [], totalCount: 0 });
        done();
      });
    });

    it('with args', (done) => {
      service
        .getNotes({ ids: ['6023b405261a6d3ae8b81d6f'] })
        .subscribe((response: GetNotesResponseDTO) => {
          expect(response).toEqual({ notes: [], totalCount: 0 });
          done();
        });
    });
  });

  it('getNoteById', (done) => {
    service
      .getNoteById('6023b405261a6d3ae8b81d6f')
      .subscribe((response: GetNoteByIdResponseDTO) => {
        expect(response).toBeDefined();
        done();
      });
  });

  it('createNote', (done) => {
    service
      .createNote({ title: '', message: '', createDate: 0 })
      .subscribe((response: CreateNoteResponseDTO) => {
        expect(response).toBeDefined();
        done();
      });
  });

  it('saveNote', (done) => {
    service
      .saveNote('6023b405261a6d3ae8b81d6f', {
        title: '',
        message: '',
        createDate: 0,
      })
      .subscribe((response: SaveNoteResponseDTO) => {
        expect(response).toBeDefined();
        done();
      });
  });

  it('removeNote', (done) => {
    service
      .removeNote('6023b405261a6d3ae8b81d6f')
      .subscribe((response: RemoveNoteResponseDTO) => {
        expect(response).toBeUndefined();
        done();
      });
  });
});
