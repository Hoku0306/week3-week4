<script setup>
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <NavBar></NavBar>

  <RouterView></RouterView>

  <FooterBar></FooterBar>
</template>
