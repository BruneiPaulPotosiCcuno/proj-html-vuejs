<script>
import { store } from "../store.js";

export default {
    name: "Partners",
};
</script>

<template>
  <div class="brands">
  <div class="client">
    <img src="../assets/img/h1-clients-img-4.png" alt="Cowboy">
  </div>
  <div class="client">
    <img src="../assets/img/h1-clients-img-3.png" alt="Gordon">
  </div>
  <div class="client">
    <img src="../assets/img/h1-clients-img-1.png" alt="Chick Cheese">
  </div>
  <div class="client">
    <img src="../assets/img/h1-clients-img-2.png" alt="Bludogs Bar">
  </div>
  <div class="client">
    <img src="../assets/img/h1-clients-img-5.png" alt="Vegan">
  </div>
</div>
</template>

<style scoped lang="scss">
.brands {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f2;
  height: 350px;

}

.client img {
  max-width: 200px;
  max-height: 200px;
  transition: transform 0.5s ease; /* Questo e il tempo in cui ci mette a agrandire*/

}

.client img:hover {
  transform: scale(1.6); /* Aumenta el size cuando ci passo il mouse */
  cursor: pointer;
}
</style>
