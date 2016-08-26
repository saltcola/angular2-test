import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Tracker } from 'meteor/tracker';
import { MeteorComponent } from 'angular2-meteor';

import { Carpools } from '../../../both/collections/carpools.collection';
import {Carpool} from '../../../both/interfaces/carpool.interface.ts';
import template from './carpool-details.component.html';
 
@Component({
  selector: 'carpool-details',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class CarpoolDetailsComponent extends MeteorComponent implements OnInit {
	carpoolId : string;
	carpool: Carpool;

	constructor(private route: ActivatedRoute) {
    		super();
  	}

	ngOnInit() {
	    	this.route.params.
	    	  map(params => params['carpoolId']).
	    	    subscribe( carpoolId => {
	    			this.carpoolId = carpoolId;
	    			this.subscribe('carpool',  this.carpoolId, () => {
	      			this.carpool = Carpools.findOne(this.carpoolId);
	      		}, true);
			});
	}

	saveCarpool(){
		Carpools.update(
		this.carpool._id,
		{
			$set: {
				Time: this.carpool.Time, 
				From: this.carpool.From, 
				To: this.carpool.To, 
				Provider: this.carpool.Provider, 
				Contact : this.carpool.Contact,
				public: this.carpool.public
			}
		}
		);
	}
}