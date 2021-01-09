import { Model } from "@vuex-orm/core";

export default class products extends Model {
  static entity = "users";

  static primaryKey = 'product_id';

  static state() {
    return {
      fetching: false
    }
  }
  static fields() {
    return {
      product_id: this.uid(),
      product_name: this.string(),
      description: this.string(),
      price_per_unit: this.number(),
      cost_per_unit: this.number(),
      quantity: this.number(),
      value_cost: this.number(),
      discount: this.number(),
    };
  }
}