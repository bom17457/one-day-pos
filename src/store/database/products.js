import { Model } from "@vuex-orm/core";

export default class products extends Model {
  static entity = "products";

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
      unit_price: this.number(),
      unit_cost: this.number(),
      quantity: this.number(),
      inventory_value: this.number(),
      discount: this.number(),
    };
  }
}