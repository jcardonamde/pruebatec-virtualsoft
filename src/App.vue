<template>
  <div class="card relative z-2">
    <Menubar>
      <template #start>
        <img alt="logo" src="./assets/logoVirtualsoft.png" height="40" class="mr-2" />
      </template>
    </Menubar>
  </div>
  <div class="position-relative container__form_user">
    <video class="background__video_home" autoplay loop muted src="./assets/timelapse_home.mp4" type="video/mp4" id="video-header">
    </video>
    <router-view />
  </div>
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

.container__form_user {
  align-items: center;
  display: flex;
  justify-content: center;
}

.background__video_home {
  filter: brightness(30%);
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  width: 100%;
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>

