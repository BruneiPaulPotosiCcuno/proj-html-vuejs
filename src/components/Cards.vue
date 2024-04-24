<script>
import { store } from "../store.js";

export default {
  name: "Cards",
};
</script>

<template>
 <div class="card-container">
        <div class="card">
            <img src="../assets/img/h3-img-1.jpg" alt="Image 1">
        </div>
        <div class="card">
            <img src="../assets/img/h3-img-2.jpg" alt="Image 2">
        </div>
        <div class="card">
            <img src="../assets/img/h3-img-3.jpg" alt="Image 3">
        </div>
        <div class="card">
            <img src="../assets/img/h3-img-4.jpg" alt="Image 4">
        </div>
    </div>
</template>

<style scoped lang="scss">

.card-container {
    display: flex;
}

.card {
    flex: 1;
    margin: 5px;

}

.card img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 100%; 
    max-height: 100%; 
}


</style>
