import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | replication-action-generate-token', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with the expected elements', async function(assert) {
    await render(hbs`
      <div id="modal-wormhole"></div>
      {{replication-action-generate-token}}
    `);
    assert.equal(find('h4.title').textContent.trim(), 'Generate operation token', 'renders default title');
    assert.equal(
      find('[data-test-replication-action-trigger]').textContent.trim(),
      'Generate token',
      'renders default CTA'
    );
  });
});
