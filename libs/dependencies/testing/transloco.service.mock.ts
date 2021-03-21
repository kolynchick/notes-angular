import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TranslocoServiceMock {
  public load(): Observable<unknown> {
    return of({});
  }

  public setActiveLang(lang: string): void {}

  public setDefaultLang(lang: string): void {}

  public setAvailableLangs(langs: string[]): void {}
}
