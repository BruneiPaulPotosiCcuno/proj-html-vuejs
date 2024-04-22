<script>
import { store } from '../store.js';

export default {
  name: 'AppHeader',
}
</script>

<template>
    <header>
      <div class="container">
        <div class="left-section">
          <div class="buttom-bar">
            <button>ORDER ONLINE</button>
          </div>
        </div>
        <div class="center-section">
            <nav class="left-section">
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">PAGES</a></li>
              <li><a href="#">MENU</a></li>
            </ul>
          </nav>
          <div class="logo">
            <a href="#"><img src="../assets/img/h5-logo-divided-header.png" alt="Logo"></a>
          </div>
          <nav class="right-section">
            <ul>
              <li><a href="#">EVENT</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">LANDING</a></li>
            </ul>
          </nav>
        </div>
        <nav class="right-section">
          <ul>
            <li><a href="#">CART</a></li>
            <li><a href="#">SEARCH</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped lang="scss">
  header {
    background-color: #1C1C1C;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 20px;
  }
  .logo img {
    height: 90px;
    background-color: #1C1C1C;
  }
  
  
  .buttom-bar button {
    background-color: #c83b1a;
    padding: 8px 12px;
    color: #f2f2f2;
    border: none;
  }
  
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav li {
    margin-left: 10px;
    margin-right: 10px;
  }
  
  nav a {
    color: #f2f2f2;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  nav a:hover {
    color: #666;
  }
  
  .center-section {
    display: flex;
    align-items: center; /* Alinear elementos verticalmente */
  }
  
  </style>
  