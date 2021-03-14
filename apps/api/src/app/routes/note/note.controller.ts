import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  CreateNoteResponseDTO,
  GetNoteByIdResponseDTO,
  GetNotesResponseDTO,
  RemoveNoteResponseDTO,
  SaveNoteResponseDTO,
} from '@notes-angular/dto';
import { Observable } from 'rxjs';
import { CreateNoteDto } from './dto/create-note.dto';
import { GetNotesDto } from './dto/get-notes.dto';
import { SaveNoteDto } from './dto/save-note.dto';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post('getList')
  public getList(
    @Body() getNotesDto: GetNotesDto
  ): Observable<GetNotesResponseDTO> {
    return this.noteService.getNotes(getNotesDto);
  }

  @Post('')
  public createNote(
    @Body() createNoteDto: CreateNoteDto
  ): Observable<CreateNoteResponseDTO> {
    return this.noteService.createNote(createNoteDto);
  }

  @Get(':id')
  public getNoteById(@Param() id: string): Observable<GetNoteByIdResponseDTO> {
    return this.noteService.getNoteById(id);
  }

  @Patch(':id')
  public saveNote(
    @Param('id') id: string,
    @Body() saveNoteDto: SaveNoteDto
  ): Observable<SaveNoteResponseDTO> {
    return this.noteService.saveNote(id, saveNoteDto);
  }

  @Delete(':id')
  public removeNote(
    @Param('id') id: string
  ): Observable<RemoveNoteResponseDTO> {
    return this.noteService.removeNote(id);
  }
}
