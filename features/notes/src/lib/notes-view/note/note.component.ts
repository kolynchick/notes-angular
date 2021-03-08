import { Component, Input } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { ItemsFacade } from '@notes-angular/store/notes';
import { Note } from '@notes-angular/models';
import { NoteEditForm } from './note-edit-form/note-edit-form.models';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss', './note.common.scss'],
})
export class NoteComponent {
  @Input() note: Note = {} as Note;

  public edit$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private model!: NoteEditForm;

  constructor(private itemsFacade: ItemsFacade) {}

  public changed(model: NoteEditForm): void {
    this.model = model;
  }

  public create() {
    const { title, message } = this.model;
    this.itemsFacade.createItem(title, message);
  }

  public remove() {
    const { id } = this.note;
    this.itemsFacade.removeItem(id);
  }

  public save() {
    const { id } = this.note;
    const { title, message } = this.model;

    this.edit$.next(false);
    this.itemsFacade.saveItem(id, title, message);
  }

  public edit() {
    this.edit$.next(true);
  }

  public cancel() {
    this.edit$.next(false);
  }
}
