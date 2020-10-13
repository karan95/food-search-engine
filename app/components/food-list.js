import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import Ember from 'ember';

export default Component.extend({
    @tracked foodItemList: null,
    initialFoodItemList: null,

    init() {
        this._super(...arguments);
     },

     filterFoodContents(e) {
        const searchText = e.target.value.trim();
        // copying original food item list to later revert back to original list
        if (searchText !== '' && !this.initialFoodItemList) {
            this.initialFoodItemList = [...this.foodItemList];
            // console.log(this.initialFoodItemList);
        }
        // modifying original food item list 
        if (this.foodItemList && this.foodItemList.length > 0 && searchText !== '') {
            this.foodItemList = this.foodItemList.filter((foodItem) => {
                if (foodItem.food.foodContentsLabel) {
                    return foodItem.food.foodContentsLabel.toLowerCase().includes(searchText.toLowerCase());
                }
            })
        } else if (this.initialFoodItemList && this.initialFoodItemList.length > 0) {
            // when search box is empty, reverting back to original food list
            this.foodItemList = [...this.initialFoodItemList];
        }
     },

     actions: {
        searchByFoodContent(e) {
            // added debounce of 1 seconds so it won't filter every text in span of 1 second
            // only last value event value present will be applied to filterFoodContents function
            Ember.run.debounce(this, this.filterFoodContents,e, 1000);
        }
    }
});
