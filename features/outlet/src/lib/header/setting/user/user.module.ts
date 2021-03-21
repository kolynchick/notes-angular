import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MaterialModule, TranslocoModule } from '@notes-angular/dependencies';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, MaterialModule, TranslocoModule],
  exports: [UserComponent],
})
export class UserModule {}
