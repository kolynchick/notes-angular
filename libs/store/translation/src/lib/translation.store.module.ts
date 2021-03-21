import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { TranslocoModule } from '@notes-angular/dependencies';
import { TranslationState } from './translation.state';
import { TranslationFacade } from './translation.facade';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslocoModule,
    NgxsModule.forFeature([TranslationState]),
  ],
  providers: [TranslationFacade],
  exports: [NgxsModule],
})
export class TranslationStoreModule {}
