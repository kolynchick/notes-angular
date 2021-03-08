import { CreateNoteRequestDTO } from '@notes-angular/dto';
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateNoteDto implements CreateNoteRequestDTO {
  @IsNotEmpty()
  @IsNumber()
  public readonly createDate: number;

  @IsString()
  public readonly title: string;

  @IsString()
  public readonly message: string;
}
