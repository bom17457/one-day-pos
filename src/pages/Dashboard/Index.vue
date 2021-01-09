<template>
  <q-page padding>
    <div class="column">
      <div class="col">
        <data-table style="height: 520px" title="Sell History">
          <template v-slot:no-data>
            No Sell Data
          </template>
        </data-table>
      </div>
    </div>
    <div class="col q-pt-md">
      <data-table
        style="height: 520px"
        title="All Products"
        :columns="products_columns"
        :data="products"
      >
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
import { Loading } from "quasar";
export default {
  name: "index",
  components: { DataTable },
  async preFetch({ store }) {
    let snap_products = await store.$db.firebase.$firestore
      .collection("products")
      .get();
    products.create({
      data: snap_products.docs.map(doc => doc.data())
    });
  },
  data() {
    return {
      products_columns: products.getColumns()
    };
  },
  computed: {
    products: () => products.query().all()
  }
};
</script>

<style></style>
