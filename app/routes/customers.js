import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class CustomersRoute extends Route {
  async model() {
    const response = await fetch(
      'http://localhost:1323/api/Customers?page=1&per_page=10'
    );
    const { customers } = await response.json();
    return customers;
  }
}
