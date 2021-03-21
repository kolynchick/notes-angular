import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Language } from '@notes-angular/store/translation';

@Injectable()
export class TranslationFacadeMock {
  public getActiveLanguage(): Observable<Language> {
    return of('en');
  }

  public getAvailableLanguages(): Observable<Language[]> {
    return of(['en', 'ru']);
  }

  public setLanguage(language: Language): Observable<void> {
    return of(undefined);
  }
}
