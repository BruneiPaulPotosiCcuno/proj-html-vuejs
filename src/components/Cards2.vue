<script>
import { store } from "../store.js";

export default {
    name: "Cards2",
};
</script>

<template>
    <div class="card-container">
        <div class="card" @click="openImage($event)">
            <div class="background-image"></div>
            <img src="../assets/img/h1-team-1a-700x700.jpg" alt="Image 1">
            <div class="overlay">
                <div class="overlay-text">
                    <div class="container">
                        <h1>SAM SMITH</h1>
                        <div class="subtitle">Kitchen Porter</div>
                        <div class="social-icons">
                            <a href="#" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" @click="openImage($event)">
            <div class="background-image"></div>
            <img src="../assets/img/h1-team-2a.jpg" alt="Image 2">
            <div class="overlay">
                <div class="overlay-text">
                    <div class="container">
                        <h1>FRANK BAILEY</h1>
                        <div class="subtitle">Kitchen cheff</div>
                        <div class="social-icons">
                            <a href="#" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" @click="openImage($event)">
            <div class="background-image"></div>
            <img src="../assets/img/h1-team-3a.jpg" alt="Image 3">
            <div class="overlay">
                <div class="overlay-text">
                    <div class="container">
                        <h1>ALICE CAROLINA</h1>
                        <div class="subtitle">Kitchen Services</div>
                        <div class="social-icons">
                            <a href="#" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" @click="openImage($event)">
            <div class="background-image"></div>
            <img src="../assets/img/h1-team-4a.jpg" alt="Image 4">
            <div class="overlay">
                <div class="overlay-text">
                    <div class="container">
                        <h1>STUART LITTLE</h1>
                        <div class="subtitle">Kitchen Security</div>
                        <div class="social-icons">
                            <a href="#" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
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
    padding: 14px;
    height: 420px;
    width: 420px;
}

.card:hover .overlay,
.card:hover .background-image {
    opacity: 1;
}

.overlay-text {
    color: white;
    padding: 10px;
}

.container {
    text-align: center;
}

h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 17px;
    margin-bottom: 20px;
}

.social-icons {
    display: flex;
    justify-content: center;
}

.social-icons a {
    color: white;
    font-size: 20px;
    margin: 0 10px;
    text-decoration: none;
}

</style>
