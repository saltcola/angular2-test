import { Carpools } from '../../../both/collections/carpools.collection';
import {Meteor} from 'meteor/meteor';
import {Counts} from 'meteor/tmeasday:publish-counts';


function buildQuery(carpoolId?: string, To?: string): Object {
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

  const searchRegEx = { '$regex': '.*' + (To || '') + '.*', '$options': 'i' };

  return { $and: [{ To: searchRegEx }, isAvailable] };
}

Meteor.publish('carpools', function(options: any, To?: string) {
  const selector = buildQuery.call(this, null, To);

  Counts.publish(this, 'numberOfParties', Carpools.find(selector), { noReady: true });

  return Carpools.find(selector, options);
});

Meteor.publish('carpool', function(carpoolId: string) {
  return Carpools.find(buildQuery.call(this, carpoolId));
});