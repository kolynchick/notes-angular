import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { NotesState } from './notes.state';
import { NotesFacade } from './notes.facade';
import { FilterState } from './+filter/filter.state';
import { ItemsState } from './+items/items.state';
import { PaginationState } from './+pagination/pagination.state';
import { SortState } from './+sort/sort.state';
import { ViewModeState } from './+view-mode/view-mode.state';
import { FilterFacade } from './+filter/filter.facade';
import { ItemsFacade } from './+items/items.facade';
import { PaginationFacade } from './+pagination/pagination.facade';
import { SortFacade } from './+sort/sort.facade';
import { ViewModeFacade } from './+view-mode/view-mode.facade';
import { ItemsService } from './+items/items.service';
import { ItemsApiService } from './+items/items.api.service';
import { ItemsInterceptor } from './+items/items.interceptor';
import { LoadingState } from './+items/+loading/loading.state';
import { LoadingFacade } from './+items/+loading/loading.facade';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      NotesState,
      FilterState,
      ItemsState,
      PaginationState,
      SortState,
      ViewModeState,
      LoadingState,
    ]),
  ],
  providers: [
    NotesFacade,
    FilterFacade,
    NotesFacade,
    LoadingFacade,
    PaginationFacade,
    SortFacade,
    ViewModeFacade,
    ItemsService,
    ItemsFacade,
    ItemsApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ItemsInterceptor,
      multi: true,
    },
  ],
  exports: [NgxsModule],
})
export class NotesStoreModule {}