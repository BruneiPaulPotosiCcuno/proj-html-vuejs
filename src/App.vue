<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './store.js';
export default {
  components: {
    AppHeader,
  },
}
</script>

<template>
  <AppHeader></AppHeader>
</template>

<style lang="scss">

@use '../src/style/generics.scss' as *;

</style>