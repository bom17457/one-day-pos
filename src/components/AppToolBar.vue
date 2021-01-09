<template>
  <q-toolbar>
    <q-toolbar-title class="text-secondary">
      Point of sale
    </q-toolbar-title>
  </q-toolbar>
</template>

<script>
export default {
  computed: {
    currentPathName() {
      return this.$route.name;
    }
  }
};
</script>

<style></style>
