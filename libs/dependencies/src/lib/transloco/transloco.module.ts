import {
  TRANSLOCO_LOADER,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule as TranslocoLibModule,
  TRANSLOCO_TRANSPILER,
  FunctionalTranspiler,
  TranslocoService,
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-http.loader';

@NgModule({
  exports: [TranslocoLibModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        reRenderOnLangChange: true,
        prodMode: true,
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    {
      provide: TRANSLOCO_TRANSPILER,
      useClass: FunctionalTranspiler,
    },
    TranslocoService,
  ],
})
export class TranslocoModule {}
