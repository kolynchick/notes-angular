import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { map, tap } from 'rxjs/operators';
import { TranslocoService } from '@ngneat/transloco';

import { SetLanguage } from './translation.actions';

import {
  Language,
  SetTranslationPayload,
  TranslationStateModel,
} from './translation.model';
import { Observable } from 'rxjs';

@State<TranslationStateModel>({
  name: 'translation',
  defaults: {
    availableLanguages: ['en', 'ru'],
    language: 'en',
  },
})
@Injectable()
export class TranslationState implements NgxsOnInit {
  constructor(private translocoService: TranslocoService) {}

  @Selector()
  public static language(state: TranslationStateModel): Language {
    return state.language;
  }

  @Selector()
  public static availableLanguages(state: TranslationStateModel): Language[] {
    return state.availableLanguages;
  }

  @Action(SetLanguage)
  public setLanguage(
    { patchState }: StateContext<TranslationStateModel>,
    { language }: SetTranslationPayload
  ): Observable<void> {
    return this.translocoService.load(language).pipe(
      tap(() => this.translocoService.setActiveLang(language)),
      map(() => {
        patchState({ language });
      })
    );
  }

  public ngxsOnInit({ getState }: StateContext<TranslationStateModel>): void {
    const { availableLanguages, language } = getState();

    this.translocoService.setAvailableLangs(availableLanguages);
    this.translocoService.setActiveLang(language);
    this.translocoService.setDefaultLang(language);
  }
}
