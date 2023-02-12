import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  readonly repositoryURL = '';
  routerUrl = '';
  headerLinks = [
    { url: '/home', name: 'Home' },
    { url: '/history', name: 'History' },
    { url: '/hire_me', name: 'Hire Me' },
  ];

  constructor(public _router: Router) {}
  ngOnInit() {
    this.routerUrl = this._router.url;
    this._router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.routerUrl = val.url;
      }
    });
  }
}
