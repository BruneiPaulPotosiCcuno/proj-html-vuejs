<script>
import { store } from "../store.js";

export default {
  name: "Cards",
};
</script>

<template>
    <div class="card-container">
        <div class="card" @click="openImage($event)">
            <div class="background-image"></div>
            <img src="../assets/img/h3-img-1.jpg" alt="Image 1">
            <div class="overlay">
                <i class="fas fa-eye"></i>
            </div>
        </div>
        <div class="card" @click="openImage($event)">
            <div class="background-image"></div>
            <img src="../assets/img/h3-img-2.jpg" alt="Image 2">
            <div class="overlay">
                <i class="fas fa-eye"></i>
            </div>
        </div>
        <div class="card" @click="openImage($event)">
            <div class="background-image"></div>
            <img src="../assets/img/h3-img-3.jpg" alt="Image 3">
            <div class="overlay">
                <i class="fas fa-eye"></i>
            </div>
        </div>
        <div class="card" @click="openImage($event)">
            <div class="background-image"></div>
            <img src="../assets/img/h3-img-4.jpg" alt="Image 4">
            <div class="overlay">
                <i class="fas fa-eye"></i>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.card-container {
    display: flex;
}

.card {
    position: relative;
    flex: 1;
    margin: 5px;
    overflow: hidden;
   
    cursor: pointer;
}

.card .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/bg-dots.jpg'); 
    background-size: cover;
    opacity: 0; 
    transition: opacity 0.3s ease;
}

.card img {
    width: 100%;
    height: auto;
    display: block;
    z-index: 1; 
}

.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #d3401e;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
    padding: 14px;
}

.card:hover .overlay {
    opacity: 1;
}

.card:hover .background-image {
    opacity: 1; 
}

.overlay i {
    color: white;
    font-size: 25px;
    padding: 10px;
}
</style>
