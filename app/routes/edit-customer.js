import Route from '@ember/routing/route';

export default class EditCustomerRoute extends Route {
  async model(params) {
    const response = await fetch(
      'http://localhost:1323/api/Customers/' + params.customer_id
    );
    const customer = await response.json();
    //could use #each-in in hbs
    customer.attributePairs = Object.entries(customer.attributes).map(
      function ([key, value]) {
        return { key: key, value: value, isRemovable: key !== 'email' };
      }
    );
    return customer;
  }
}
