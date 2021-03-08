import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Injectable()
export class FaIconLibraryMock {
  public addIcons(...icons: IconDefinition[]): void {}
}
