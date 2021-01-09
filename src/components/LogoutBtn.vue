<template>
  <q-btn
    icon="logout"
    color="negative"
    @click="signout"
    rounded
    :loading="isLoading"
  >
    Sign Out
  </q-btn>
</template>

<script>
import users from "models/users";

export default {
  name: "logout-btn",
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    signout() {
      this.isLoading = true;
      this.$firebase.$auth
        .signOut()
        .then(() => {
          users.deleteAll();
          this.$router.push({name: 'signin'})
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
};
</script>

<style></style>
