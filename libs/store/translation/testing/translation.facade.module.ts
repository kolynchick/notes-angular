import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TranslationFacade } from '@notes-angular/store/translation';
import { TranslationFacadeMock } from './translation.facade.mock';

@NgModule({
  imports: [NgxsModule.forRoot([])],
  providers: [
    {
      provide: TranslationFacade,
      useClass: TranslationFacadeMock,
    },
  ],
})
export class TranslationFacadeTestingModule {}
