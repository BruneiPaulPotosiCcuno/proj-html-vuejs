<script>
import AppHeader from './components/AppHeader.vue';
import Carrousel from './components/Carrousel.vue';
import Carrousel_2 from './components/Carrousel_2.vue';
import Cards from './components/Cards.vue';

import { store } from './store.js';
export default {
  components: {
    AppHeader,
    Carrousel,
    Carrousel_2,
    Cards
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <Carrousel></Carrousel>
  <Cards></Cards>
  <Carrousel_2></Carrousel_2>
  

</template>

<style lang="scss">

@use '../src/style/generics.scss' as *;

</style>