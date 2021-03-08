import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ViewModeFacade } from '@notes-angular/store/notes';
import { ViewModeFacadeMock } from './view-mode.facade.mock';

@NgModule({
  imports: [NgxsModule.forRoot([])],
  providers: [
    {
      provide: ViewModeFacade,
      useClass: ViewModeFacadeMock,
    },
  ],
})
export class ViewModeFacadeTestingModule {}
