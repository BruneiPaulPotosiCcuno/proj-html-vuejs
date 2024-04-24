
<script>
//importo lo store from store.js

import { store } from "../store.js";

export default {
  name: "Carrousel_2",
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
    this.slideInterval = setInterval(this.autoSlide, 6000)
  },

  //!!!!E BUONA PRATICA PULIRE QUANDO VIENE MONTATO OGNI INTERVALO PER BUONA PRATICA PER GESTIONE DI MEMORIA!!!!///
  beforeUnmount() {
    clearInterval(this.slideInterval);
  },
  //!!!!E BUONA PRATICA PULIRE QUANDO VIENE MONTATO OGNI INTERVALO PER BUONA PRATICA PER GESTIONE DI MEMORIA!!!!///


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
    <!-- Itera sobre cada texto en el array -->
    <div class="slide" v-for="(text, index) in store.textData" :key="index" :class="{ active: index === currentIndex }">
      <!-- Muestra el texto -->
      <span><img src="../assets/img/quote-img.png" alt=""></span>
      <p>{{ text }}</p>
      <p class="comunity">WASHINGTON POST 2018</p>
      <div class="dots">
        <span v-for="(slide, i) in store.textData" :key="i" :class="{ active: i === currentIndex }"></span>
      </div>
      
    </div>
    <!-- Botones para retroceder y avanzar -->
    <button class="prev" @click="prevSlide"><span>PREV</span></button>
    <button class="next" @click="nextSlide"><span>NEXT</span></button>
  </div>
</template>

<!-- Ogni span deve avere un rotate di noventa gradi -->
<style scoped lang="scss">
.carrousel {
  position: relative;
  margin: auto;
  background-image: url("../assets/img/h3-testimonials-bckgrnd.jpg");
  background-position: center;
  display: flex;
  justify-content: center;
  height: 400px;
  align-items: center;
}

.slide {
  display: none;
  width: 900px;
  text-align: center;
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

p{
  display: flex;
  color: #2e2e2e;
  font-size: 26px;
  text-align: center;
  font-weight: bold;
  line-height: 40px;
}

img{
  width: 50px;
  position: relative;
  bottom: 24px;
}

.comunity{
  color: #d13916;
  justify-content: center;
  position: relative;
  top: 10px;
  font-size: 18px;
  font-weight: bold;
}

/* QUESTO E LO STYLE PEAR I DOTS DEI SLIDE */
.dots {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.dots span {
  width: 12px;
  height: 12px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #e4e4d4; 
}

.dots span.active {
  background-color: #b7882b; 
}
</style>
