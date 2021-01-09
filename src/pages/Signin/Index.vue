<template>
  <q-page padding>
    <div class="row">
      <div class="flex flex-center col">
        <q-img
          style="max-width: calc(100% - 200px)"
          src="~assets/img-account.svg"
        />
      </div>
      <div class="flex flex-center col-3">
        <sign-in-form />
      </div>
    </div>
  </q-page>
</template>

<script>
import SignInForm from "src/components/signin/SignInForm.vue";
export default {
  components: { SignInForm }
};
</script>

<style></style>
