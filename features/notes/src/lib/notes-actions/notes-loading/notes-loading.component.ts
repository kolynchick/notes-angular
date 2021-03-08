import { Component, OnInit } from '@angular/core';
import { LoadingFacade } from '@notes-angular/store/notes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes-loading',
  templateUrl: './notes-loading.component.html',
  styleUrls: ['./notes-loading.component.scss'],
})
export class NotesLoadingComponent implements OnInit {
  public loading$!: Observable<boolean>;

  constructor(private loadingFacade: LoadingFacade) {}

  ngOnInit(): void {
    this.loading$ = this.loadingFacade.getLoading();
  }
}
