import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetLanguage } from './translation.actions';
import { Language } from './translation.model';
import { TranslationState } from './translation.state';

@Injectable()
export class TranslationFacade {
  constructor(private store: Store) {}

  public getActiveLanguage(): Observable<Language> {
    return this.store.select(TranslationState.language);
  }

  public getAvailableLanguages(): Observable<Language[]> {
    return this.store.select(TranslationState.availableLanguages);
  }

  public setLanguage(language: Language): Observable<void> {
    return this.store.dispatch(new SetLanguage(language));
  }
}
