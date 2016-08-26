import { Component } from '@angular/core';
 
import template from './app.component.html';
 
@Component({
  selector: 'app',
  template
})

export class AppComponent {
  constructor() {
    this.carpools = [
      {
      	'Time' : '2016-9-10 3:00PM',
      	'From' : 'Storrs',
      	'To' : 'New York City',
      	'Provider' : 'Tom',
      	'Contact' : '8605228976'
      },
      {
      	'Time' : '2016-9-11 5:00PM',
      	'From' : 'Storrs',
      	'To' : 'Boston',
      	'Provider' : 'Jhon',
      	'Contact' : '8605228977'
      },
      {
      	'Time' : '2016-9-10 10:00AM',
      	'From' : 'Storrs',
      	'To' : 'Hartford',
      	'Provider' : 'Emmy',
      	'Contact' : '8605234976'
      }
    ];
  }
}