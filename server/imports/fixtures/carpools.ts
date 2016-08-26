import { Carpools } from '../../../both/collections/carpools.collection';
import {Carpool} from '../../../both/interfaces/carpool.interface.ts';
 
export function loadCarpools() {
 if (Carpools.find().count() === 0) {
     for (var i = 0; i < 27; i++) {
      Carpools.insert({
        Time: Fake.sentence(5),
        From: Fake.sentence(2),
        To: Fake.sentence(2),
        Provider:Fake.sentence(2),
        Contact: Fake.sentence(1),
        public: true
      });
    }
 }
  
}