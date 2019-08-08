import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() id = '';
  @Input() message = '';
  @Input() timestamp = 0;

  @Input() editMode: boolean;
  @Input() createMode: boolean;
  @Input() loading: boolean;

  @Output() Cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() Save: EventEmitter<{id: string, message: string}> =
    new EventEmitter<{id: string, message: string}>();
  @Output() Create: EventEmitter<{message: string}> =
    new EventEmitter<{message: string}>();
  @Output() Edit: EventEmitter<void> = new EventEmitter<void>();
  @Output() Remove: EventEmitter<{id: string}> =
    new EventEmitter<{id: string}>();

  constructor() { }

  public cancelNote = (event: Event): void => {
    event.preventDefault();
    this.Cancel.emit();
  }

  public createNote = (event: Event): void => {
    event.preventDefault();
    this.Create.emit({message: this.message});
  }

  public editNote = (event: Event): void => {
    event.preventDefault();
    this.Edit.emit();
  }

  public removeNote = (event: Event): void => {
    event.preventDefault();
    this.Remove.emit({ id: this.id });
  }

  public saveNote = (event: Event): void => {
    event.preventDefault();
    this.Save.emit({id: this.id, message: this.message});
  }
}
