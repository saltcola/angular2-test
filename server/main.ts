
import {loadCarpools} from './imports/fixtures/carpools';
import {Meteor} from 'meteor/meteor';

import './imports/publications/carpools';
import './imports/publications/users';

 
Meteor.startup(() => {
  // load initial Parties
  loadCarpools();
});

