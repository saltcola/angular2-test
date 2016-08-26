import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { LoginButtons } from 'angular2-meteor-accounts-ui';

import { Carpools } from '../../../both/collections/carpools.collection';
import {Carpool} from '../../../both/interfaces/carpool.interface.ts';
import { CarpoolsFormComponent } from './carpools-form.component.ts';
 
import template from './carpools-list.component.html';
 
@Component({
  selector: 'carpools-list',
  template,
  directives: [CarpoolsFormComponent, ROUTER_DIRECTIVES, LoginButtons]
})

export class CarpoolsListComponent implements OnInit {
	carpools : Mongo.Cursor<Carpool>;

	ngOnInit(){
		this.carpools = Carpools.find();
	}

	removeCarpool(carpool) {
	    Carpools.remove(carpool._id);
	}
}