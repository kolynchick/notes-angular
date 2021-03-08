import { Component, OnInit } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faArrowCircleDown,
  faArrowCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import { SortFacade } from '@notes-angular/store/notes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes-sort',
  templateUrl: './notes-sort.component.html',
  styleUrls: ['./notes-sort.component.scss'],
})
export class NotesSortComponent implements OnInit {
  public sortDirection$!: Observable<SortDirection>;

  constructor(faIconLibrary: FaIconLibrary, private sortFacade: SortFacade) {
    faIconLibrary.addIcons(faArrowCircleUp, faArrowCircleDown);
  }

  ngOnInit() {
    this.sortDirection$ = this.sortFacade.getSortDirection();
  }

  public createDateSortAsc(): void {
    this.sortFacade.setSortDirection('asc');
  }

  public createDateSortDesc(): void {
    this.sortFacade.setSortDirection('desc');
  }
}
