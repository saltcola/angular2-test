import {Mongo} from 'meteor/mongo';
import {Carpool} from '../interfaces/carpool.interface.ts'
 
export const Carpools = new Mongo.Collection<Carpool>('carpools');

function loggedIn() {
  return !!Meteor.user();
}
 
Carpools.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});