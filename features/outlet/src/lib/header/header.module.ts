import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoModule } from './logo/logo.module';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './header.component';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LogoModule, NavigationModule, UserModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
