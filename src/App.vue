<script>
import AppHeader from './components/AppHeader.vue';
import Carrousel from './components/Carrousel.vue';
import Carrousel_2 from './components/Carrousel_2.vue';
import Cards from './components/Cards.vue';
import Gallery_Specials from './components/Gallery_Specials.vue';
import Cards2 from './components/Cards2.vue';
import Partners from './components/Partners.vue';
import AppFooter from './components/AppFooter.vue';

import { store } from './store.js';
export default {
  components: {
    AppHeader,
    Carrousel,
    Carrousel_2,
    Cards,
    Gallery_Specials,
    Cards2,
    Partners,
    AppFooter
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <Carrousel></Carrousel>
  <Cards></Cards>
  <Carrousel_2></Carrousel_2>
  <Gallery_Specials></Gallery_Specials>
  <Cards2></Cards2>
  <Partners></Partners>
  <AppFooter></AppFooter>

</template>

<style lang="scss">

@use '../src/style/generics.scss' as *;

</style>