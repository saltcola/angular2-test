
import {loadCarpools} from './imports/fixtures/carpools';
import {Meteor} from 'meteor/meteor';
import './imports/publications/carpools';
 
Meteor.startup(() => {
  // load initial Parties
  loadCarpools();
});

