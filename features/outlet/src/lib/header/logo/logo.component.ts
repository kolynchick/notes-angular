import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLaughBeam } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss', './logo.mobile.component.scss'],
})
export class LogoComponent {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(faLaughBeam);
  }
}
