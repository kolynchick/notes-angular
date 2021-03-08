import { Component, OnInit } from '@angular/core';
import {
  ItemsFacade,
  NotesFacade,
  Pagination,
  PaginationFacade,
} from '@notes-angular/store/notes';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-notes-view-paginator',
  templateUrl: './notes-view-paginator.component.html',
  styleUrls: ['./notes-view-paginator.component.scss'],
})
export class NotesViewPaginatorComponent implements OnInit {
  public pagination$!: Observable<Pagination>;
  public showPaginator$!: Observable<boolean>;

  constructor(
    private notesFacade: NotesFacade,
    private itemsFacade: ItemsFacade,
    private paginationFacade: PaginationFacade
  ) {}

  ngOnInit(): void {
    this.pagination$ = this.paginationFacade.getPagination();
    this.showPaginator$ = combineLatest([
      this.pagination$,
      this.itemsFacade.getTotalCount(),
    ]).pipe(
      map(
        ([pagination, totalCount]: [Pagination, number]) =>
          (pagination.pageIndex + 1) * pagination.pageSize < totalCount
      )
    );
  }

  public load({ pageIndex }: Pagination): void {
    this.paginationFacade.setPageIndex(pageIndex + 1);
    this.notesFacade.loadMoreNotes();
  }
}
