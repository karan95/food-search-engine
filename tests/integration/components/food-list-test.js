import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | food-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders foodList table component with search box', async function(assert) {
    const sample_data = [
      {
        food: {
          label: 'data1',
          foodContentsLabel: 'test',
          categoryLabel: 'test'
        }
      },
      {
        food: {
          label: 'data2',
          foodContentsLabel: 'test',
          categoryLabel: 'test'
        }
      }
    ]
    this.set('foodItemList', sample_data);
    await render(hbs`<FoodList @foodItemList={{foodItemList}}/>`);
    assert.ok(findAll('.search-table').length == 1, 'renders input box in table');
  });
});
