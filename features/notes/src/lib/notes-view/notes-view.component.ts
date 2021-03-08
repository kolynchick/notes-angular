import { Component, OnInit } from '@angular/core';
import {
  ItemsFacade,
  ViewMode,
  ViewModeFacade,
} from '@notes-angular/store/notes';
import { Observable } from 'rxjs';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Note } from '@notes-angular/models';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.scss'],
})
export class NotesViewComponent implements OnInit {
  public viewMode$!: Observable<ViewMode>;
  public notes$!: Observable<Note[]>;

  constructor(
    private viewModeFacade: ViewModeFacade,
    private itemsFacade: ItemsFacade,
    faIconLibrary: FaIconLibrary
  ) {
    faIconLibrary.addIcons(faEdit, faTrashAlt, faTimes, faCheck, faPlus);
  }

  ngOnInit(): void {
    this.notes$ = this.itemsFacade.getItems();
    this.viewMode$ = this.viewModeFacade.getViewMode();
  }
}
