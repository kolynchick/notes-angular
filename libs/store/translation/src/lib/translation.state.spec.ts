import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TranslocoServiceTestingModule } from '@notes-angular/dependencies/testing';

import { SetLanguage } from './translation.actions';
import { TranslationState } from './translation.state';

describe('TranslationState', () => {
  let store: Store;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NgxsModule.forRoot([TranslationState]),
          TranslocoServiceTestingModule,
        ],
      }).compileComponents();
      store = TestBed.inject(Store);
    })
  );

  it('availableLanguages', () => {
    expect(store.selectSnapshot(TranslationState.availableLanguages)).toEqual([
      'en',
      'ru',
    ]);
  });

  it('setLanguage', (done) => {
    store.dispatch(new SetLanguage('ru')).subscribe(() => {
      expect(store.selectSnapshot(TranslationState.language)).toEqual('ru');
      done();
    });
  });
});
