<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <product-form />
        <data-table
          class="q-mt-lg"
          title="All Products"
          :columns="product_columns"
          :data="products"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import product from "models/products";
import ProductForm from "src/components/products/ProductForm.vue";
import DataTable from "src/components/data-table/DataTable.vue";
import { Loading } from "quasar";
export default {
  async preFetch({ store }) {
    Loading.show({delay: 1000})
    let snap_products = await store.$db.firebase.$firestore
      .collection("products")
      .get();
    await product.create({
      data: snap_products.docs.map(doc => doc.data())
    })
    await Loading.hide()
  },
  components: { ProductForm, DataTable },
  data() {
    return {
      product_columns: product.getColumns()
    };
  },
  computed: {
    products: () => product.query().all()
  }
};
</script>

<style></style>
