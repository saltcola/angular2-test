import { RouterConfig, provideRouter } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { CarpoolsListComponent } from './imports/carpools/carpools-list.component';
import { CarpoolDetailsComponent } from './imports/carpools/carpool-details.component';

const routes: RouterConfig = [
  { path: '', component: CarpoolsListComponent },
  { path: 'carpool/:carpoolId', component: CarpoolDetailsComponent, canActivate: ['CanActivateForLoggedIn'] }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  { provide: 'CanActivateForLoggedIn', useValue: () => !! Meteor.userId() }
];