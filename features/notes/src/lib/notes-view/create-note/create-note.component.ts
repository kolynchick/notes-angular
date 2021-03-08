import { Component, ViewChild } from '@angular/core';
import { ItemsFacade } from '@notes-angular/store/notes';
import { NoteEditFormComponent } from '../note/note-edit-form/note-edit-form.component';
import { NoteEditForm } from '../note/note-edit-form/note-edit-form.models';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss', '../note/note.common.scss'],
})
export class CreateNoteComponent {
  @ViewChild(NoteEditFormComponent) public noteEditForm!: NoteEditFormComponent;

  private model!: NoteEditForm;

  constructor(private itemsFacade: ItemsFacade) {}

  public changed(model: NoteEditForm): void {
    this.model = model;
  }

  public create() {
    const { title, message } = this.model;
    this.itemsFacade.createItem(title, message);
    this.noteEditForm.form.reset();
  }
}
