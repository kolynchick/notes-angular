import { Component, OnInit } from '@angular/core';
import { Language, TranslationFacade } from '@notes-angular/store/translation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  public availableLanguages$!: Observable<Language[]>;
  public activeLanguage$!: Observable<Language>;

  constructor(
    private translationFacade: TranslationFacade
  ) {}

  ngOnInit(): void {
    this.activeLanguage$ = this.translationFacade.getActiveLanguage();
    this.availableLanguages$ = this.translationFacade.getAvailableLanguages();
  }

  public setLanguage(language: Language): void {
    this.translationFacade.setLanguage(language);
  }
}
