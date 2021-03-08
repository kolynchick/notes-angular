import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { LoadingFacade } from '@notes-angular/store/notes';
import { LoadingFacadeMock } from './loading.facade.mock';

@NgModule({
  imports: [NgxsModule.forRoot([])],
  providers: [
    {
      provide: LoadingFacade,
      useClass: LoadingFacadeMock,
    },
  ],
})
export class LoadingFacadeTestingModule {}
