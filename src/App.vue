<template>
  <div>
    <nav>
      <ul class="flex justify-evenly">
        <li><router-link to="/"><img src="/imgs/Logo_Sketch.png" alt="Home"></router-link>
        </li>
        <li><router-link to = "/Sources">Sources</router-link></li>
        <li><router-link to = "/Countries">Countries</router-link></li>
        <li><router-link to = "/Categories">Categories</router-link></li>
      </ul>
    </nav>
    <RouterView/>
  </div>
</template>
<script>
import { RouterView } from 'vue-router';

export default {
  name: "App",
  data(){
    return{
      title: "Hola❤️"
    }
  }
  
}
</script>
<style>
  
</style>