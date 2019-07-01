import { Component } from '@angular/core';
import { slideInAnimation } from './animations/route.animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'my-company';
  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation);

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
