import { InjectionToken, Provider } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const SVG_ICON_REGISTER = new InjectionToken('svgIconRegister');

export type SvgIconRegister = (icons: string[], namespace?: string) => void;

export const SvgIconRegisterProvider: Provider = {
  provide: SVG_ICON_REGISTER,
  useFactory: (
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer
  ): SvgIconRegister => (icons: string[], namespace: string = '') =>
    icons.forEach((icon: string) => {
      matIconRegistry.addSvgIconInNamespace(
        namespace,
        icon,
        domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${namespace && namespace + '/'}${icon}.svg`
        )
      );
    }),
  deps: [MatIconRegistry, DomSanitizer],
};
