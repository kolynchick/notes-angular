import { SaveNoteRequestDTO } from '@notes-angular/dto';
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class SaveNoteDto implements SaveNoteRequestDTO {
  @IsNotEmpty()
  @IsNumber()
  public readonly createDate: number;

  @IsString()
  public readonly title: string;

  @IsString()
  public readonly message: string;
}
