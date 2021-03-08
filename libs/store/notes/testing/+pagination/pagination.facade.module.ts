import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PaginationFacade } from '@notes-angular/store/notes';
import { PaginationFacadeMock } from './pagination.facade.mock';

@NgModule({
  imports: [NgxsModule.forRoot([])],
  providers: [
    {
      provide: PaginationFacade,
      useClass: PaginationFacadeMock,
    },
  ],
})
export class PaginationFacadeTestingModule {}
