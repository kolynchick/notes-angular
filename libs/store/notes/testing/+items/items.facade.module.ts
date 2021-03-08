import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ItemsFacade } from '@notes-angular/store/notes';
import { ItemsFacadeMock } from './items.facade.mock';

@NgModule({
  imports: [NgxsModule.forRoot([])],
  providers: [
    {
      provide: ItemsFacade,
      useClass: ItemsFacadeMock,
    },
  ],
})
export class ItemsFacadeTestingModule {}
