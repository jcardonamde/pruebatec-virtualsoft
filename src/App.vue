<template>
  <div class="card relative z-2">
    <Menubar>
      <template #start>
        <img alt="logo" src="./assets/logoVirtualsoft.png" height="40" class="mr-2" />
      </template>
    </Menubar>
  </div>
  <router-view />
</template>

<script setup>
import Menubar from "primevue/menubar";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

