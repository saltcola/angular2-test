import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { MeteorComponent } from 'angular2-meteor';

import { Carpools } from '../../../both/collections/carpools.collection';
import { Carpool } from '../../../both/interfaces/carpool.interface.ts';
import { CarpoolsFormComponent } from './carpools-form.component.ts';
 
import template from './carpools-list.component.html';

 
@Component({
  selector: 'carpools-list',
  template,
  directives: [CarpoolsFormComponent, ROUTER_DIRECTIVES, LoginButtons]
})

export class CarpoolsListComponent extends MeteorComponent implements OnInit {
	carpools : Mongo.Cursor<Carpool>;

	constructor() {
	    super();
	}


	ngOnInit(){
		this.carpools = Carpools.find();

		this.subscribe('carpools', () => {
	      	this.carpools = Carpools.find();
	    	}, true);
	}

	removeCarpool(carpool) {
	    Carpools.remove(carpool._id);
	}

	search(value: string) {
	    this.carpools = Carpools.find(value ? { To:  value } : {});
	}
}