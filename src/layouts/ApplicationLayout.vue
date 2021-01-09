<template>
  <q-layout view="hhh lpr fFf">
    <q-header class="bg-transparent">
      <app-tool-bar>
        <logout-btn slot="append" />
      </app-tool-bar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="flex flex-center bg-transparent text-black"> </q-footer>
  </q-layout>
</template>

<script>
import AppToolBar from "components/AppToolBar";
import LogoutBtn from 'src/components/LogoutBtn.vue';

export default {
  name: "MainLayout",
  components: { AppToolBar, LogoutBtn },
  data() {
    return {};
  }
};
</script>
