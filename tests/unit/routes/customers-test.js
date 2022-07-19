import { module, test } from 'qunit';
import { setupTest } from 'customer-challenge-ui/tests/helpers';

module('Unit | Route | customers', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:customers');
    assert.ok(route);
  });
});
