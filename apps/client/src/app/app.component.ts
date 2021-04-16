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

  constructor(private router: Router) {}

  nodeChosen(node: any) {
    this.router.navigate([node.path]);
  }

  brandAction() {
    this.router.navigate(['']);
  }
}
