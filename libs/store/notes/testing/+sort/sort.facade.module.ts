import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SortFacade } from '@notes-angular/store/notes';
import { SortFacadeMock } from './sort.facade.mock';

@NgModule({
  imports: [NgxsModule.forRoot([])],
  providers: [
    {
      provide: SortFacade,
      useClass: SortFacadeMock,
    },
  ],
})
export class SortFacadeTestingModule {}
