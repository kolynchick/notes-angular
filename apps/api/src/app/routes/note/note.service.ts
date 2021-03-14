import { Inject, Injectable } from '@nestjs/common';
import { FilterQuery, Model, Types } from 'mongoose';
import { Note } from '@notes-angular/models';
import { combineLatest, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NoteEntity } from './note.models';

import { NOTE_MODEL_PROVIDE_KEY } from './note.schema';
import { convertToNote } from './note.helpers';
import {
  CreateNoteRequestDTO,
  GetNotesResponseDTO,
  RemoveNoteResponseDTO,
  SaveNoteRequestDTO,
} from '@notes-angular/dto';
import { GetNotesDto } from './dto/get-notes.dto';

@Injectable()
export class NoteService {
  constructor(
    @Inject(NOTE_MODEL_PROVIDE_KEY) private noteModel: Model<NoteEntity>
  ) {}

  public getNotes(getNotesDto: GetNotesDto): Observable<GetNotesResponseDTO> {
    const {
      ids = [],
      sort = { field: 'createDate', direction: 'desc' },
      filter = { createDate: { start: 0, end: Date.now() } },
      pagination = { first: 0, max: 0 },
    } = getNotesDto;

    const filterQuery: FilterQuery<NoteEntity> = {
      ...(ids.length
        ? {
            _id: {
              $in: ids.map((id: string) => Types.ObjectId(id)),
            },
          }
        : {}),
      createDate: {
        $gte: filter.createDate.start,
        $lte: filter.createDate.end,
      },
    };

    return combineLatest([
      from(
        this.noteModel
          .find(filterQuery, null)
          .sort({ [sort.field]: sort.direction })
          .skip(pagination.first)
          .limit(pagination.max)
          .exec()
      ),
      from(this.noteModel.find(filterQuery, null).count()),
    ]).pipe(
      map(([noteEntities, totalCount]: [NoteEntity[], number]) => [
        noteEntities.map(convertToNote),
        totalCount,
      ]),
      map(([notes, totalCount]: [Note[], number]) => ({
        notes,
        totalCount,
      }))
    );
  }

  public getNoteById(id: string): Observable<Note> {
    return from(this.noteModel.findById(id)).pipe(
      map((noteEntity: NoteEntity) => convertToNote(noteEntity))
    );
  }

  public createNote(createNoteDto: CreateNoteRequestDTO): Observable<Note> {
    const model: NoteEntity = new this.noteModel(createNoteDto);
    return from(model.save()).pipe(
      map((noteEntity: NoteEntity) => convertToNote(noteEntity))
    );
  }

  public saveNote(
    id: string,
    saveNoteDto: SaveNoteRequestDTO
  ): Observable<Note> {
    return from(
      this.noteModel.findByIdAndUpdate(id, saveNoteDto, { new: true })
    ).pipe(map((noteEntity: NoteEntity) => convertToNote(noteEntity)));
  }

  public removeNote(id: string): Observable<RemoveNoteResponseDTO> {
    return from(this.noteModel.findByIdAndDelete(id)).pipe(
      map(() => undefined)
    );
  }
}
