
import {loadCarpools} from './imports/fixtures/carpools';
import {Meteor} from 'meteor/meteor';
 
Meteor.startup(() => {
  // load initial Parties
  loadCarpools();
});

