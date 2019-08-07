import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) { }

  public addSvgIcon = (array: string[]) => array.forEach(
    (name: string) => this.matIconRegistry.addSvgIcon(name, this.sanitizer
      .bypassSecurityTrustResourceUrl(`assets/images/${name}.svg`)))
}
