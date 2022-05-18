import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './constants';

@Component({
  selector: 'finastra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appName = 'Angular NestJS Starter';
  navigationNodes = routes;
  apps = [
    {
      "name": "Home",
      "shortName": "HM",
      "sso-initiation-urls": {
        "web": "https://app1.com"
      }
    },
    {
      "name": "Application",
      "shortName": "App",
      "sso-initiation-urls": {
        "web": "https://app2.com"
      }
    },
    {
      "name": "Tools",
      "shortName": "TLS",
      "sso-initiation-urls": {
        "web": "https://app3.com"
      }
    },
    {
      "name": "Settings",
      "shortName": "Set",
      "sso-initiation-urls": {
        "web": "https://app4.com"
      }
    }
  ]

  constructor(private router: Router) { }
}
