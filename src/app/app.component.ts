import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterContentInit,
  OnDestroy
} from '@angular/core';
import { IconService } from './core/services/icon.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements AfterContentInit, OnDestroy {
  @ViewChild('containerNotes', {
    read: ViewContainerRef,
    static: true
  }) containerNotes: ViewContainerRef;

  constructor(
    private app: AppService,
    private icon: IconService
  ) {
    this.icon.addSvgIcon(['add', 'remove']);
  }

  public create = () => {
    this.app.createNewNote();
  }

  ngOnDestroy() {
    this.app.unsubscribeAll();
  }

  ngAfterContentInit() {
    this.app.initialize(this.containerNotes);
  }
}
