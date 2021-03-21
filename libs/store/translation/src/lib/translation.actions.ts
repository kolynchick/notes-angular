import { Language } from './translation.model';

export class SetLanguage {
  public static readonly type = '[Translation] set language';

  constructor(public language: Language) {}
}
