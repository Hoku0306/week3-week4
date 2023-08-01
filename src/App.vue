<script setup>
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
import FooterBar from './components/FooterBar.vue';
import HomeVue from './views/HomeVue.vue';
</script>

<template>
  <NavBar></NavBar>

  <HomeVue></HomeVue>
  <RouterView></RouterView>

  <FooterBar></FooterBar>
</template>
