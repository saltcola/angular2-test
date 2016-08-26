import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { ReactiveVar } from 'meteor/reactive-var';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { MeteorComponent } from 'angular2-meteor';
import { PaginationService, PaginationControlsCmp } from 'ng2-pagination';

import { Carpools } from '../../../both/collections/carpools.collection';
import { Carpool } from '../../../both/interfaces/carpool.interface.ts';
import { CarpoolsFormComponent } from './carpools-form.component.ts';
 
import template from './carpools-list.component.html';

 
@Component({
  selector: 'carpools-list',
  template,
  viewProviders: [PaginationService],
  directives: [CarpoolsFormComponent, ROUTER_DIRECTIVES, LoginButtons, PaginationControlsCmp]
})

export class CarpoolsListComponent extends MeteorComponent implements OnInit {
	carpools : Mongo.Cursor<Carpool>;
	carpoolsSize: number = 0;
	pageSize: number = 10;
	curPage: ReactiveVar<number> = new ReactiveVar<number>(1);
	stringOrder: ReactiveVar<number> = new ReactiveVar<number>(1);
	destination: ReactiveVar<string> = new ReactiveVar<string>(null);
	loading: boolean = false;

	constructor(private paginationService: PaginationService) {
	    super();
	}


	ngOnInit(){

		this.paginationService.register({
		      id: this.paginationService.defaultId,
		      itemsPerPage: this.pageSize,
		      currentPage: this.curPage.get(),
		      totalItems: this.carpoolsSize,
		});

		this.autorun(() => {
			const options = {
			      limit: this.pageSize,
			      skip: (this.curPage.get() - 1) * this.pageSize,
			      sort: { From: this.stringOrder.get() }
			};

			this.loading = true;
			this.paginationService.setCurrentPage(this.paginationService.defaultId, this.curPage.get());

			this.subscribe('carpools', options, this.destination.get(),() => {
		      	this.carpools = Carpools.find({}, {sort: { From: this.stringOrder.get() }});
		      	this.loading = false;
		    	}, true);
		});

		this.autorun(() => {
		      this.carpoolsSize = Counts.get('numberOfCarpools');
		      this.paginationService.setTotalItems(this.paginationService.defaultId, this.carpoolsSize);
		});		
	}

	removeCarpool(carpool) {
	    Carpools.remove(carpool._id);
	}

	changeSortOrder(nameOrder: string) {
	    this.stringOrder.set(parseInt(nameOrder));
	}

	onPageChanged(page: number) {
	    this.curPage.set(page);
	}

	search(value: string) {
	    this.curPage.set(1);
	    this.destination.set(value);
	 }
}