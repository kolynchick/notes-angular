import {
  GetNotesRequestDTO,
  NoteFilterDTO,
  NotePaginationDTO,
  NoteSortDTO,
} from '@notes-angular/dto';
import { IsArray } from 'class-validator';

export class GetNotesDto implements GetNotesRequestDTO {
  @IsArray()
  public readonly ids?: string[];

  public readonly sort?: NoteSortDTO;

  public readonly filter?: NoteFilterDTO;

  public readonly pagination?: NotePaginationDTO;
}
