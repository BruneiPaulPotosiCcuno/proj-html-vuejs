<script>
import { store } from "../store.js";

export default {
  name: "Gallery_Specials",
};
</script>

<template>
  <div>
    <div class="componente">
      <div class="imagen">
        <img src="../assets/img/h1-img-4.jpg" alt="Descripción de la imagen">
      </div>
      <div class="texto">
        <div class="specials">
          <h2>SPECIALS*</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut.</p>

          <div class="combo">
            <h3><span>$10&nbsp;&nbsp;</span>COMBO PICCOLO</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.</p>
          </div>

          <div class="combo">
            <h3><span>$20&nbsp;&nbsp;</span>COMBO MEZZO</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.</p>
          </div>

          <div class="combo">
            <h3><span>$30&nbsp;&nbsp;</span>COMBO GRANDE</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="backgrounds">
    
    <div class="centered-text">
      <p>GO AHEAD AND<br>
        BUILD YOUR<br>
        OWN PIZZA<br>
        WE WON'T<br>
        JUDGE!</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.componente {
  display: flex;
}

.imagen {
  flex: 1;
}

.texto {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
}

.imagen img {
  width: 100%;
  height: auto;
}

.specials {
  width: 390px;
}

.specials h2 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #303030;
}

.specials p {
  font-size: 16px;
  margin-bottom: 20px;
}

.combo h3 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #303030;
  line-height: 46px;
}

.combo p {
  font-size: 14px;
  margin-bottom: 15px;
  padding-left: 55px;
}

span {
  color: #ab3f26;
}

.backgrounds {
  position: relative;
  height: 600px;
  background: url('../assets/img/h3-background-img.jpg') repeat; 
  background-position: 50%;
  background-repeat: repeat;
}

.centered-text {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  text-align: start;
  color: white;
  font-size: 65px;
  font-weight: 600;
}

.backgrounds img{
  height: 500px;
  display: flex;
  margin: auto;
  
}
</style>
