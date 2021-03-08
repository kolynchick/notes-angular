import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutletComponent } from './outlet.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [CommonModule, HeaderModule],
  declarations: [OutletComponent],
  exports: [
    OutletComponent
  ],
})
export class OutletModule {}
