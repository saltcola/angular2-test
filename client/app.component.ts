import { Component } from '@angular/core';
import { Mongo } from 'meteor/mongo';

import { Carpools } from '../both/collections/carpools.collection';
 
import template from './app.component.html';
 
@Component({
  selector: 'app',
  template
})

export class AppComponent {

	carpools: Mongo.Cursor<any>;

  constructor() {
  	this.carpools = Carpools.find();
   
  }
}