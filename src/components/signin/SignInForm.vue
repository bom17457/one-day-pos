<template>
  <q-form class="col q-gutter-md">
    <q-input
      type="text"
      name="username"
      label="Enter email or username"
      class="bg-input rounded-borders q-px-md"
      borderless
      dense
      debounce="500"
    />
    <div class="row justify-end">
      <q-input
        type="password"
        name="password"
        label="Enter password"
        class="bg-input rounded-borders q-px-md col-12"
        borderless
        dense
        debounce="500"
      />
      <q-btn text-color="grey" dense label="Recovery password" no-caps unelevated size="sm" v-if="false" />
    </div>
    <div class="q-mt-xl">
        <q-btn push no-caps unelevated class="full-width rounded-borders shadow-8" color="primary">Sign In</q-btn>
    </div>
  </q-form>
</template>

<script>
export default {
  name: "SignInForm"
};
</script>

<style></style>
