<script>
import AppHeader from './components/AppHeader.vue';
import Carrousel from './components/Carrousel.vue';
import { store } from './store.js';
export default {
  components: {
    AppHeader,
    Carrousel
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <Carrousel></Carrousel>
</template>

<style lang="scss">

@use '../src/style/generics.scss' as *;

</style>