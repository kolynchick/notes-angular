import { NgModule } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoServiceMock } from './transloco.service.mock';

@NgModule({
  providers: [
    {
      provide: TranslocoService,
      useClass: TranslocoServiceMock,
    },
  ],
})
export class TranslocoServiceTestingModule {}
