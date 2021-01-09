<template>
  <q-form class="col q-gutter-md">
    <div>
      Sign In
    </div>
    <q-input
      type="text"
      name="username"
      label="Enter email"
      class="bg-input rounded-borders q-px-md"
      borderless
      dense
      debounce="500"
      v-model="user.email"
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
        v-model="user.password"
      />
      <q-btn text-color="grey" dense label="Recovery password" no-caps unelevated size="sm" v-if="false" />
    </div>
    <div class="q-mt-xl">
        <q-btn push no-caps unelevated class="full-width rounded-borders shadow-8" color="primary" @click="signin">Sign In</q-btn>
    </div>
  </q-form>
</template>

<script>
import users from 'models/users'
export default {
  name: "SignInForm",
  data() {
    return ({
      user: new users()
    })
  },
  methods: {
    signin: function() {
      this.$firebase.$auth.signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((auth) => {
          const {uid, email} = auth.user
          this.user.$create({
            data: {
              uid,
              email
            }
          })
          this.$router.push({name: 'dashboard'})
        })
        .catch((error) => {
          var errorCode = error.errorCode;
          var errorMessage = error.message;
          console.error(errorCode, errorMessage)
        })
    }
  }
};
</script>

<style></style>
