import { module, test } from 'qunit';
import { setupRenderingTest } from 'customer-challenge-ui/tests/helpers';
import { click, render, typeIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-edit-attributes', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('attributes', []);
    this.set('customerId', 11);
    // Handle any actions with this.set('myAction', function(val) { ... });
    
    await render(hbs`<AddEditAttributes @attributes={{this.attributes}} @customerId={{this.customerId}} />`);

    assert.dom("[data-test-new-key]").exists("The user sees the add key textbox.");
    assert.dom("[data-test-new-value]").exists("The user sees the add value textbox.");
  });

  test('it adds new attribute on add', async function (assert) {
    this.set('attributes', []);
    this.set('customerId', 11);
    // Handle any actions with this.set('myAction', function(val) { ... });
    
    await render(hbs`<AddEditAttributes @attributes={{this.attributes}} @customerId={{this.customerId}} />`);
    assert.dom('[data-test-attr-label]').doesNotExist("no attributes listed");
    
    await typeIn('[data-test-new-key]', 'city');
    await typeIn('[data-test-new-value]', 'London');
    await click('[data-test-add-btn]');

    assert.dom('[data-test-attr-label]').exists("newly added attr name is visible");
    assert.dom('[data-test-attr-label]').hasText("city");
    assert.dom('[data-test-attr-value]').exists("newly added attr value is visible");
    assert.dom('[data-test-attr-value]').hasValue("London");
  });
});
