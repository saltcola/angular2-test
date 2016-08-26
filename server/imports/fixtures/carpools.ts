import { Carpools } from '../../../both/collections/carpools.collection';
import {Carpool} from '../../../both/interfaces/carpool.interface.ts';
 
export function loadCarpools() {
  if (Carpools.find().count() === 0) {
    const carpools: Carpool[] = [
      {
        'Time' : '2016-9-10 3:00PM',
        'From' : 'Storrs',
        'To' : 'New York City',
        'Provider' : 'Tom',
        'Contact' : '8605228976'
      },
      {
        'Time' : '2016-9-11 5:00PM',
        'From' : 'Storrs',
        'To' : 'Boston',
        'Provider' : 'Jhon',
        'Contact' : '8605228977'
      },
      {
        'Time' : '2016-9-10 10:00AM',
        'From' : 'Storrs',
        'To' : 'Hartford',
        'Provider' : 'Emmy',
        'Contact' : '8605234976'
      }
    ];
 
    carpools.forEach((carpool) => Carpools.insert(carpool));
  }
}