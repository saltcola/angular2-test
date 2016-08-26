import { Component } from '@angular/core';
import { Mongo } from 'meteor/mongo';

import { Carpools } from '../both/collections/carpools.collection';
import { CarpoolsFormComponent } from './imports/carpools/carpools-form.component.ts'
 
import template from './app.component.html';
 
@Component({
  selector: 'app',
  template,
  directives: [CarpoolsFormComponent]
})

export class AppComponent {

	carpools: Mongo.Cursor<any>;

  constructor() {
  	this.carpools = Carpools.find();
   
  }

  removeCarpool(carpool) {
    Carpools.remove(carpool._id);
  }
}