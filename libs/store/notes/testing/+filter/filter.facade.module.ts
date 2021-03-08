import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { FilterFacade } from '@notes-angular/store/notes';
import { FilterFacadeMock } from './filter.facade.mock';

@NgModule({
  imports: [NgxsModule.forRoot([])],
  providers: [
    {
      provide: FilterFacade,
      useClass: FilterFacadeMock,
    },
  ],
})
export class FilterFacadeTestingModule {}
