import { NgModule } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
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
    {
      provide: DateAdapter,
      useValue: { setLocale() {} },
    },
  ],
})
export class FilterFacadeTestingModule {}
