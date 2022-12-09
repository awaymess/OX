<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <main class="bg">
    <div class="postion">
      <div class="subbg">
        <h1 class="header">X I O</h1>
      </div>
      <div class="subbg1">
        <div class="btn">
          
          <RouterLink to="/3x3">
            <button class="button">3x3</button>
          </RouterLink>
          <RouterLink to="/4x4">
            <button class="button">4x4</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.header {
  margin: auto;
  text-align: center;
  color: #4e2711;
}

.X {
  color: #df9af7;
}
.O {
  color: #4e2711;
}
.R {
  color: #ff0000;
}

.board {
  border: 2px solid #4e2711;
  width: 64px;
  height: 64px;
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  background-color: #fcd46e;
}

.board:hover {
  background-color: #f6e3b5;
}

.board-row {
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 0fr);
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.subbg {
  margin: auto;
  background: #fcd46e;
  border: 2px solid #4e2711;
  width: 450px;
  border-radius: 4px 4px 0px 0px;
}
.postion {
  top: 80px;
}

.subbg1 {
  margin: auto;
  background: #fff5de;
  border: 2px solid #4e2711;
  width: 450px;
  border-radius: 0px 0px 4px 4px;
  padding-bottom: 60px;
  /* padding-top: 20px; */
}
.close {
  background: #ff5d5d;
  color: #4e2711;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  position: relative;
  bottom: 45px;
    left: 400px;
}

.button {
  display: inline-block;
  top: 10px;
  font-size: 12px;
  margin: 2px;
  background: #fcd46e;
  border: 2px solid #4e2711;
  color: #4e2711;
  width: 90px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}
</style>