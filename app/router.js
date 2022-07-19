import EmberRouter from '@ember/routing/router';
import config from 'customer-challenge-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('customers');
  this.route('customer-details', { path: 'customer-details/:customer_id' });
  this.route('edit-customer', { path: 'edit-customer/:customer_id' });
});
