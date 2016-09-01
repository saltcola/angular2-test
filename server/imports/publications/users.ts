import { Meteor } from 'meteor/meteor';
import { Carpools } from '../../../both/collections/carpools.collection';

Meteor.publish('uninvited', function (carpoolId: string) {
  let carpool = Carpools.findOne(carpoolId);
 
  if (!carpool)
    throw new Meteor.Error('404', 'No such carpool!');
 
  return Meteor.users.find({
    _id: {
      $nin: carpool.invited || [],
      $ne: this.userId
    }
  });
});