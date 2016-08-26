import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tracker } from 'meteor/tracker';

import { Carpools } from '../../../both/collections/carpools.collection';
import template from './carpool-details.component.html';
 
@Component({
  selector: 'carpool-details',
  template
})
export class CarpoolDetailsComponent implements OnInit {
	carpoolId : string;

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
}