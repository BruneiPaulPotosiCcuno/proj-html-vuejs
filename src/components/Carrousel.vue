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
      // Memorizzo identificatore null
      slideInterval: null
    };
  },
  mounted() {
    //Intervallo di scorrimento automatico
    this.slideInterval = setInterval(this.autoSlide, 5000)
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
    // Method per automatico trans
    autoSlide() {
      // Method per passare alla prossima diapositiva
      this.nextSlide();
    }
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
    <button class="prev" @click="prevSlide"><span>PREV</span></button>
    <button class="next" @click="nextSlide"><span>NEXT</span></button>
  </div>
</template>


<!-- Ogni span deve avere un rotate di noventa gradi -->
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

.prev {
  left: 0;
  position: absolute;
  transform: translateX(-75%);
  background-color: #ffffff;
  color: white;
  border: none;
  padding: 40px;
  border-radius: 100%;
  cursor: pointer;

}


.next {
  right: 0;
  position: absolute;
  transform: translateX(+75%);
  background-color: #ffffff;
  color: white;
  border: none;
  padding: 40px;
  border-radius: 100%;
  cursor: pointer;
}

.carousel-image {
  max-height: 300px;
  width: auto;
}



.prev span{
  color: #d2401e;
  transform: rotate(+90deg);
  font-size: 12px;
  font-weight: 700;
  display: flex;
  position: relative;
  left: 37px;
}

.next span{
  color: #d2401e;
  transform: rotate(-90deg); 
  font-size: 12px;
  font-weight: 700;
  display: flex;
  position: relative;
  right: 37px;
}
</style>
