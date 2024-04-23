<script>
//importo lo store from store.js

import { store } from "../store.js";

export default {
  name: "Carrousel",
  // Faccio i dati del componente
  data() {
    return {
      // store asegnato da store import
      store,
      // Indice de la img del carrousel
      currentIndex: 0,
    };
  },
  // Add i methods del componente
  methods: {
    // Method per andare indietro nell slide
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.store.images.length - 1
          : this.currentIndex - 1;
    },
    // Method per andare indietro nell slide
    nextSlide() {
      // Aggiorno l'indice per la img
      this.currentIndex = (this.currentIndex + 1) % this.store.images.length;
    },
  },
};
</script>

<template>
  <div class="carrousel">
    <!-- Itero ogni img nell array -->
    <div class="slide" v-for="(image, index) in store.images" :key="index" :class="{ active: index === currentIndex }">
    <!-- img attuale -->
      <img :src="image" alt="Slide" class="carousel-image" />
    </div>
    <!-- btn per avanti e indietro -->
    <button class="prev" @click="prevSlide">&#10094;</button>
    <button class="next" @click="nextSlide">&#10095;</button>
  </div>
</template>

<style scoped lang="scss">
.carrousel {
  position: relative;
  margin: auto;
  background-image: url("../assets/img/cielostellato.PNG");
  background-position: center;
  display: flex;
  justify-content: center;
  height: 400px;
  align-items: center;
}

.slide {
  display: none;
}

.slide.active {
  display: block;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 18px;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

.carousel-image {
  max-height: 300px;
  width: auto;
}
</style>
