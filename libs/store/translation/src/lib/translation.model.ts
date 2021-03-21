export type Language = 'en' | 'ru';

export interface TranslationStateModel {
  availableLanguages: Language[]
  language: Language;
}

export interface SetTranslationPayload {
  language: Language;
}
