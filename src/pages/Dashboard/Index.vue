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
      <data-table style="height: 520px" title="All Products" :columns="products_columns" :data="products">
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
      products_columns: products.getColumns()
    };
  },
  preFetch() {
    products.getSampleData()
  }
};
</script>

<style></style>
