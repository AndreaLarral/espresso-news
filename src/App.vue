<template>
  <div>
    <div class="flex items-center justify-between bg-gray-300 p-8">
      <router-link to="/">
        <img src="/00_imgs/Logo_Sketch.png" alt="Home" class="mr-4">
      </router-link>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/Sources">Sources</router-link></li>
          <li><router-link to="/Countries">Countries</router-link></li>
          <li><router-link to="/Categories">Categories</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="p-8">
      <RouterView/>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: "App",
  data() {
    return {
      title: "Hola❤️"
    }
  }
}
</script>

<style>
</style>
