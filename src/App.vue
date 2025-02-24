<script  setup>
import {  RouterView } from 'vue-router';
import FooterView from './components/FooterView.vue';
import HeaderView from './components/HeaderView.vue';

</script>

<template>
  <!-- Header -->
  <HeaderView v-if="!$route.meta.hideLayout" />
  <RouterView />

  <FooterView v-if="!$route.meta.hideLayout"/>
</template>

<style>

</style>
