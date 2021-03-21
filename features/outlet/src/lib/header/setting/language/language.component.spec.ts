import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslationFacadeTestingModule } from '@notes-angular/store/translation/testing';
import { LanguageComponent } from './language.component';

describe('LanguageComponent', () => {
  let component: LanguageComponent;
  let fixture: ComponentFixture<LanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TranslationFacadeTestingModule ],
      declarations: [ LanguageComponent ]
    }).overrideComponent(LanguageComponent, {
      set: {
        template: ''
      }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('setLanguage', () => {
    expect(component.setLanguage('en')).toBeUndefined();
  });
});
