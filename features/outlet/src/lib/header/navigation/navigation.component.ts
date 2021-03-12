import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCalendarAlt,
  faStickyNote,
} from '@fortawesome/free-regular-svg-icons';

import { Path } from './navigation.types';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public currentPath!: string;
  public paths: Path[] = [
    {
      url: '/notes',
      icon: ['far', 'sticky-note'],
      name: 'Notes',
    },
  ];

  constructor(private router: Router, faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(faCalendarAlt, faStickyNote);
  }

  ngOnInit(): void {
    this.currentPath = this.router.url;
  }
}
