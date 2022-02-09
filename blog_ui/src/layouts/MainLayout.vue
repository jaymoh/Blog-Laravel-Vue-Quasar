<template>
  <q-layout view="hhh lpR fFf">
    <q-header class="bg-white text-center" elevated>
      <router-link to="/">
        <img :src="logoImgUrl" class="q-mt-sm q-mb-sm logo-style responsive" alt="BlogTest" />
      </router-link>
      <span class="float-right q-ma-sm text-black">
        <router-link :to="{ name: 'MyPosts' }"> My Posts </router-link>
      </span>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      logoImgUrl: 'img/logo.jpg',
    };
  },
};
</script>

<style scoped>
.logo-style {
  height: 50px;
  text-align: center;
  vertical-align: middle;
}
.nav-text-size {
  font: normal normal 250 29px/15px Segoe UI;
  letter-spacing: 1px;
  opacity: 1;
}
</style>
