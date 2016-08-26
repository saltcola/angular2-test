import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Tracker } from 'meteor/tracker';

import { Carpools } from '../../../both/collections/carpools.collection';
import template from './carpool-details.component.html';
 
@Component({
  selector: 'carpool-details',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class CarpoolDetailsComponent implements OnInit {
	carpoolId : string;
	// carpool: Mongo.Cursor<any>;
	// _id : string;

	constructor(private route: ActivatedRoute, private ngZone: NgZone) {}

	ngOnInit() {
	    	this.route.params.
	    		map(params => params['carpoolId']).
	    			subscribe(carpoolId => this.carpoolId = carpoolId);

	      Tracker.autorun(() => {
	      	this.ngZone.run(() => {
	          		this.carpool = Carpools.findOne(this.carpoolId);
	          	});
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
				Contact : this.carpool.Contact
			}
		}
		);
	}
}