import { TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { TranslationFacadeTestingModule } from '@notes-angular/store/translation/testing';
import { of } from 'rxjs';

import { TranslationFacade } from './translation.facade';
import { Language } from './translation.model';

describe('TranslationFacade', () => {
  let facade: TranslationFacade;
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslationFacadeTestingModule],
        providers: [TranslationFacade],
      }).compileComponents();

      facade = TestBed.inject(TranslationFacade);
      store = TestBed.inject(Store);
    })
  );

  it('getActiveLanguage', (done) => {
    spyOn(store, 'select').and.returnValue(of('en'));

    facade.getActiveLanguage().subscribe((lang: Language) => {
      expect(lang).toEqual('en');
      done();
    });
  });

  it('getAvailableLanguages', (done) => {
    spyOn(store, 'select').and.returnValue(of(['en', 'ru']));

    facade.getAvailableLanguages().subscribe((langs: Language[]) => {
      expect(langs).toEqual(['en', 'ru']);
      done();
    });
  });

  it('setLanguage', (done) => {
    spyOn(store, 'dispatch').and.returnValue(of(undefined));

    facade.setLanguage('en').subscribe((dispatched: void) => {
      expect(dispatched).toBeUndefined();
      done();
    });
  });
});
