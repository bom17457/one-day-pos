<template>
  <q-page padding>
    <div class="column">
      <div class="col">
        <data-table style="height: 520px"  title="Sell History">
          <template v-slot:no-data>
            No Sell Data
          </template>
        </data-table>
      </div>
    </div>
    <div class="col q-pt-md">
      <data-table style="height: 520px" title="All Products" :columns="products_column" :data="products">
        <template v-slot:no-data>
          No Product Data
        </template>
      </data-table>
    </div>
  </q-page>
</template>

<script>
import products from "models/products";
import DataTable from "src/components/data-table/DataTable.vue";
export default {
  name: "index",
  components: { DataTable },
  data() {
    return {
      products: products.query().all(),
      products_column: [
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
    };
  },
  preFetch() {
    products.insert({
      data: [
        {
          product_id: "EFG52212",
          product_name: "ปลอกแฮน",
          description: "this.string()",
          unit_price: 30,
          unit_cost: 30,
          quantity: 25,
          inventory_value: 30,
          discount: 30
        },
        {
          product_id: "21G52213",
          product_name: "ปลอกแฮน",
          description: "this.string()",
          unit_price: 30,
          unit_cost: 30,
          quantity: 25,
          inventory_value: 30,
          discount: 30
        },
        {
          product_id: "EFG53214",
          product_name: "ปลอกแฮน",
          description: "this.string()",
          unit_price: 30,
          unit_cost: 30,
          quantity: 25,
          inventory_value: 30,
          discount: 30
        },
      ]
    });
  }
};
</script>

<style></style>
