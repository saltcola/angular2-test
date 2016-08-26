import {Mongo} from 'meteor/mongo';
import {Carpool} from '../interfaces/carpool.interface.ts'
 
export const Carpools = new Mongo.Collection<Carpool>('carpools');