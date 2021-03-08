import { NgModule } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FaIconLibraryMock } from './fa-icon.library.mock';

@NgModule({
  providers: [
    {
      provide: FaIconLibrary,
      useClass: FaIconLibraryMock,
    },
  ],
})
export class FaIconLibraryTestingModule {}
