import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./../assets/sass/vendor/flexboxgrid.css',
              './../assets/sass/vendor/indigo-pink.css',
              './app.component.scss'],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor() {}

  public ngOnInit() {

  }
}
