import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { MaterialModule, TranslocoModule } from '@notes-angular/dependencies';

@NgModule({
  declarations: [LanguageComponent],
  imports: [CommonModule, MaterialModule, TranslocoModule],
  exports: [LanguageComponent],
})
export class LanguageModule {}
