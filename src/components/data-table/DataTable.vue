<template>
  <q-table
    :title="title"
    :columns="columns"
    :data="data"
    flat
    color="primary"
    bordered
    dense
  >
    <slot name="no-data" slot="no-data" />
    <slot name="top" slot="top" />
    <slot name="top-left" slot="top-left" />
    <slot name="top-right" slot="top-right" />
  </q-table>
</template>

<script>
import products from "models/products";

export default {
  name: "data-table",
  props: {
    title: String,
    data: Array,
    columns: Array
  }
};
</script>

<style></style>
