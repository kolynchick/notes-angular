import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NotesFacade, ViewMode } from '@notes-angular/store/notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private notesFacade: NotesFacade) {}

  ngOnInit() {
    this.notesFacade
      .handleActions()
      .pipe(startWith(''), takeUntil(this.destroy$))
      .subscribe(() => this.notesFacade.getNotesFromBackend());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
