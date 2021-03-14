import { Test, TestingModule } from '@nestjs/testing';
import { NoteServiceTestingModule } from '@notes-angular/api/testing';
import {
  CreateNoteResponseDTO,
  GetNoteByIdResponseDTO,
  GetNotesResponseDTO,
  RemoveNoteResponseDTO,
  SaveNoteResponseDTO,
} from '@notes-angular/dto';
import { NoteController } from './note.controller';

describe('NoteController', () => {
  let controller: NoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NoteServiceTestingModule],
      controllers: [NoteController],
    }).compile();

    controller = module.get<NoteController>(NoteController);
  });

  it('getList', (done) => {
    controller.getList({}).subscribe((response: GetNotesResponseDTO) => {
      expect(response).toBeDefined();
      done();
    });
  });

  it('createNote', (done) => {
    controller
      .createNote({ title: '1', message: '2', createDate: 0 })
      .subscribe((response: CreateNoteResponseDTO) => {
        expect(response).toBeDefined();
        done();
      });
  });

  it('getNote', (done) => {
    controller
      .getNoteById('1')
      .subscribe((response: GetNoteByIdResponseDTO) => {
        expect(response).toBeDefined();
        done();
      });
  });

  it('saveNote', (done) => {
    controller
      .saveNote('1', { title: '1', message: '2', createDate: 0 })
      .subscribe((response: SaveNoteResponseDTO) => {
        expect(response).toBeDefined();
        done();
      });
  });

  it('removeNote', (done) => {
    controller.removeNote('1').subscribe((response: RemoveNoteResponseDTO) => {
      expect(response).toBeUndefined();
      done();
    });
  });
});
