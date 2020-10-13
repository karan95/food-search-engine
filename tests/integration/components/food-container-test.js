import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | food-container', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders FoodContainer component', async function(assert) {
    await render(hbs`<FoodContainer />`);
    assert.ok(findAll('.food-app-header').length == 1, 'renders header of food search engine');

    assert.ok(findAll('#search-input').length == 1, 'renders header of input box to search food');
  });


  test('it renders Loading bar', async function(assert) {
    this.set('loading', true);
    await render(hbs`<FoodContainer @searchDisabled={{loading}}/>`);

    assert.ok(findAll('.spinner-border').length == 1, 'renders food list container');
  });

  test('it renders FoodList component', async function(assert) {
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
    await render(hbs`<FoodContainer @foodItemList={{foodItemList}}/>`);
    assert.ok(findAll('.food-list-container').length == 1, 'renders food list container');
  });
});
