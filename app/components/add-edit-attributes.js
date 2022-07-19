import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';
import { service } from '@ember/service';

export default class AddEditAttributesComponent extends Component {
  @service router;

  @tracked newKey = '';
  @tracked newValue = '';
  @tracked attributes = this.args.attributes;

  @action
  async storeAttributes() {
    await fetch('http://localhost:1323/api/Customers/' + this.args.customerId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        this.attributes.map((a) => {
          return { key: a.key, value: a.value };
        })
      ),
    });
    this.router.transitionTo('customer-details', this.args.customerId);
  }

  @action
  addNewAttribute(key, value) {
    //Array.push() does not make Ember track
    this.attributes = [...this.attributes, { key: key, value: value }];
    this.newKey = '';
    this.newValue = '';
  }
}
