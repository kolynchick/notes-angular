import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@notes-angular/dependencies';

import { NavigationComponent } from './navigation.component';


@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, TranslocoModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
