<script>
import { store } from "../store.js";

export default {
  name: "Gallery_Specials",
};
</script>

<template>
  <div>
    <div class="component">
      <div class="text">

        <div class="column">
          <ul>
            <li>
              <h2>FIND OUR RESTAURANTS</h2>
            </li>
            <li>1614 E. Bell Rd #104.</li>
            <li>Salerno, AZ 85022</li>
            <li>(602) 867-1010</li>
          </ul>
          

        </div>
        

        <div class="column">
          <ul>
            <li>
              <h2>Working Hours</h2>
            </li>
            <li>
              <h3>MONDAY</h3>
            </li>
            <li><span class="closed">Kitchen closed</span></li>
          </ul>
        </div>

        <div class="column">
          <ul>
            <li>
              <h1>
                THE DON PEPPE CREW
              FIRST AND FOREMOST
              VALUES AN AUTHENTIC,
              WELL BAKED SLICE OF
              PIZZA.
              </h1>
            </li>
          </ul>
        </div>
        <img src="../assets/img/footer-bottom-img.png" class="mark" alt="mark">
      </div>
      <div class="imagen">
        <img src="../assets/img/footer-img-1.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component {
  display: flex;
  background-image: url('../assets/img/cielostellato.PNG');
  background-position: 45%

}

.text {
  flex: 1;
  margin: auto;
  position: relative; 
}

.imagen {
  flex: 1;
}

.imagen img {
  width: 100%;
  height: auto;
}

//columns
.column {
  width: 33.33%;
  float: left;
  padding: 0 45px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

}

ul {
  list-style-type: none;
  padding: 0;
  color: #9d9d9d;

}

h1{
  color: #ffff;
  font-size: 26px;
}

h2{
  color: #ba933d;
}
h3{
  color: #ba933d;
}

.closed{
  color: #a1361d;
}

.mark {
  position: absolute;
  top: 300px;
  right: 10px;
  padding-right: 30px;
}
</style>
