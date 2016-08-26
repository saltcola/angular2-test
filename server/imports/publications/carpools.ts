import { Carpools } from '../../../both/collections/carpools.collection';
import {Meteor} from 'meteor/meteor';
import {Counts} from 'meteor/tmeasday:publish-counts';


function buildQuery(carpoolId?: string, destination?: string): Object {
  const isAvailable = {
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


  if (carpoolId) {
    return { $and: [{ _id: carpoolId }, isAvailable] };
  }

  const searchRegEx = { '$regex': '.*' + (destination || '') + '.*', '$options': 'i' };

  return { $and: [{ To: searchRegEx }, isAvailable] };
}

Meteor.publish('carpools', function(options: any, destination?: string) {
  const selector = buildQuery.call(this, null, destination);

  Counts.publish(this, 'numberOfCarpools', Carpools.find(selector), { noReady: true });

  return Carpools.find(selector, options);
});

Meteor.publish('carpool', function(carpoolId: string) {
  return Carpools.find(buildQuery.call(this, carpoolId));
});