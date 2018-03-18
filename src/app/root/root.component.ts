import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'root',
  encapsulation: ViewEncapsulation.None,
  template: `<h1>THIS IS THE ROOT COMPONENT</h1>`})
export class RootComponent implements OnInit {

  public ngOnInit() { }

}
