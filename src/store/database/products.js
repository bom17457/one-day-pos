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

  static getColumns() {
    return [
      {
        name: "product_id",
        required: true,
        label: "Product ID (รหัสสินค้า)",
        align: "left",
        field: row => row.product_id,
        format: val => `${val}`,
        classes: 'text-weight-bold',
        sortable: true
      },
      {
        name: "product_name",
        required: true,
        label: "Product name (ชื่อสินค้า)",
        align: "left",
        field: row => row.product_name,
        format: val => `${val}`,
        classes: '',
        sortable: true
      },
      {
        name: "description",
        required: true,
        label: "Description",
        align: "left",
        field: row => row.description,
        format: val => `${val}`,
        classes: '',
        sortable: true
      },
      {
        name: "unit_price",
        required: true,
        label: "Unit Price (ราคาขายต่อหน่วย)",
        align: "left",
        field: row => row.unit_price,
        format: val => `${val}`,
        classes: '',
        sortable: true
      },
      {
        name: "unit_cost",
        required: true,
        label: "Cost Price (ราคาทุน)",
        align: "left",
        field: row => row.unit_cost,
        format: val => `${val}`,
        classes: '',
        sortable: true,        },
      {
        name: "quantity",
        required: true,
        label: "Quantity (จำนวน)",
        align: "left",
        field: row => row.quantity,
        format: val => `${val}`,
        classes: '',
        sortable: true
      },
      {
        name: "inventory_value",
        required: true,
        label: "Inventory Value (มูลค่าสินค้าคงคลัง)",
        align: "left",
        field: row => row.inventory_value,
        format: (val, row) => `${row.quantity * row.unit_cost}`,
        classes: '',
        sortable: true
      },
      {
        name: "discount",
        required: true,
        label: "Discount (ส่วนลด)",
        align: "left",
        field: row => row.discount,
        format: val => `${val}%`,
        classes: '',
        sortable: true
      }
    ]
  }
}