import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faTh, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { ViewMode, ViewModeFacade } from '@notes-angular/store/notes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes-view-mode',
  templateUrl: './notes-view-mode.component.html',
  styleUrls: ['./notes-view-mode.component.scss', './notes-view-mode.mobile.component.scss'],
})
export class NotesViewModeComponent implements OnInit {
  public viewMode$!: Observable<ViewMode>;

  constructor(
    faIconLibrary: FaIconLibrary,
    private viewModeFacade: ViewModeFacade
  ) {
    faIconLibrary.addIcons(faBars, faThLarge, faTh);
  }

  ngOnInit(): void {
    this.viewMode$ = this.viewModeFacade.getViewMode();
  }

  public toggleToLinesViewMode(): void {
    this.viewModeFacade.toggleToLinesViewMode();
  }

  public toggleToSmallTilesViewMode(): void {
    this.viewModeFacade.toggleToSmallTilesViewMode();
  }

  public toggleToBigTilesViewMode(): void {
    this.viewModeFacade.toggleToBigTilesViewMode();
  }
}
