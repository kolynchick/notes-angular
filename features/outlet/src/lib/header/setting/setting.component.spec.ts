import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FaIconLibraryTestingModule,
  SvgIconRegisterTestingModule,
} from '@notes-angular/dependencies/testing';

import { SettingComponent } from './setting.component';

describe('SettingComponent', () => {
  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaIconLibraryTestingModule, SvgIconRegisterTestingModule],
      declarations: [SettingComponent],
    }).overrideComponent(SettingComponent, {
      set: {
        template: ''
      }
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('show', (done) => {
    component.show();

    component.showPanel$.subscribe((show: boolean) => {
      expect(show).toBeTrue();
      done();
    });
  });

  it('hide', (done) => {
    component.hide();

    component.showPanel$.subscribe((show: boolean) => {
      expect(show).toBeFalse();
      done();
    });
  });
});
