import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoModule } from './logo/logo.module';
import { SettingModule } from './setting/setting.module';
import { HeaderComponent } from './header.component';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LogoModule, NavigationModule, SettingModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
