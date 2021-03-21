import { NgModule } from '@angular/core';
import { SVG_ICON_REGISTER } from '@notes-angular/dependencies';

@NgModule({
  providers: [
    {
      provide: SVG_ICON_REGISTER,
      useValue: () => {},
    },
  ],
})
export class SvgIconRegisterTestingModule {}
