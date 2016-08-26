import { Carpools } from '../../../both/collections/carpools.collection';
// import {Carpool} from '../../../both/interfaces/carpool.interface.ts';

import {Meteor} from 'meteor/meteor';



function isAvailable(): Object {
  return {
    $or: [
			{ 'public': true },
			{
				$and: [
				    { owner: this.userId },
				    { owner: { $exists: true } }
				]
			}
		]
  }; 
}

Meteor.publish('carpools', function() {
  return Carpools.find(isAvailable.call(this));
});

Meteor.publish('carpool', function(carpoolId: string) {
  return Carpools.find({ $and: [{ _id: carpoolId }, isAvailable.call(this)] });
});