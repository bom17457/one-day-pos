<template>
  <q-layout view="lhh LpR fFf">
    <q-header class="bg-transparent">
      <app-tool-bar>
        <logout-btn slot="append" />
        <q-btn
          color="secondary"
          dense
          flat
          round
          icon="menu"
          @click="navigator = !navigator"
        />
      </app-tool-bar>
    </q-header>

    <q-drawer width="256" bordered behavior="desktop" v-model="navigator" side="left">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item :to="{ name: 'dashboard' }" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section>
              Dashboard
            </q-item-section>
          </q-item>

          <q-item :to="{ name: 'products' }" clickable v-ripple>
            <q-item-section avatar>
              <q-icon size="md">
                <i class="las la-box"></i>
              </q-icon>
            </q-item-section>

            <q-item-section>
              Products
            </q-item-section>
          </q-item>

          <q-item :to="{name: 'sell'}" clickable v-ripple>
            <q-item-section avatar>
              <q-icon size="md">
                <i class="las la-coins"></i>
              </q-icon>
            </q-item-section>

            <q-item-section>
              Sell
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="flex flex-center bg-transparent text-black"> </q-footer>
  </q-layout>
</template>

<script>
import AppToolBar from "components/AppToolBar";
import LogoutBtn from "src/components/LogoutBtn.vue";

export default {
  name: "MainLayout",
  components: { AppToolBar, LogoutBtn },
  data() {
    return {
      navigator: true
    };
  }
};
</script>

<style scoped>
.menu-list .q-item {
  border-radius: 0 32px 32px 0;
}
</style>
