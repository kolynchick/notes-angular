import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@notes-angular/dependencies';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SettingComponent } from './setting.component';
import { UserModule } from './user/user.module';
import { LanguageModule } from './language/language.module';

@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    UserModule,
    LanguageModule,
  ],
  exports: [SettingComponent],
})
export class SettingModule {}
