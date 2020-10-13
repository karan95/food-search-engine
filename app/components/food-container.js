import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import fetch from 'node-fetch';

export default Component.extend({
    @tracked searchDisabled: false,
    foodkey: '',
    @tracked foodItemList: null,

    init() {
        this._super(...arguments);
     },

     actions: {
        getFoodRecords() {
            // loading animation will be displayed
            this.searchDisabled = true;
            // check if entered search string is non-empty
            if (this.foodkey.trim() !== '') {
                fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${this.foodkey}&app_id=3165fd88&app_key=c4e8c05e0ebc9e721176e93e624d2bb9`)
                .then(res => res.json())
                .then(json => {
                    this.foodItemList = json.hints;
                    this.searchDisabled = false;
                });
            }
        }
      }
});
