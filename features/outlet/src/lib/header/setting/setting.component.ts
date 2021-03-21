import { ConnectedPosition } from '@angular/cdk/overlay';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import {
  SvgIconRegister,
  SVG_ICON_REGISTER,
} from '@notes-angular/dependencies';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingComponent {
  public readonly showPanel$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public readonly panelPosition: ConnectedPosition[] = [
    {
      originX: 'end',
      overlayX: 'end',
      originY: 'top',
      overlayY: 'top',
      offsetX: 10,
      offsetY: 41,
    },
  ];

  constructor(
    faIconLibrary: FaIconLibrary,
    @Inject(SVG_ICON_REGISTER) svgIconRegister: SvgIconRegister
  ) {
    faIconLibrary.addIcons(faCog);
    svgIconRegister(['user']);
    svgIconRegister(['en', 'ru'], 'i18n');
  }

  public show(): void {
    this.showPanel$.next(true);
  }

  public hide(): void {
    this.showPanel$.next(false);
  }
}
