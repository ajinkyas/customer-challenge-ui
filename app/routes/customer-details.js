import Route from '@ember/routing/route';

export default class CustomerDetailsRoute extends Route {
  async model(params) {
    const response = await fetch(
      'http://localhost:1323/api/Customers/' + params.customer_id
    );
    const customer = await response.json();
    customer.attributePairs = Object.entries(customer.attributes).map(
      ([key, value]) => ({ key, value })
    );
    customer.eventPairs = Object.entries(customer.events).map(
      ([key, value]) => ({ key, value })
    );
    return customer;
  }
}
