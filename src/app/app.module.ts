// third party
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';

// application
import { ROUTES } from './app.routes';
import { RootComponent } from './root';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    RootComponent,
 ],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: false })
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {console.log('app module constuctor'); }
}
