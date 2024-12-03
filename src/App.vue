<template>
  <div>
    <h1 class="text-8xl font-black text-emerald-600">{{ title }}</h1>
    <h2 class="text-4xl font-black text-pink-400">Bon dia!</h2>
    <h3 class="text-2xl font-black text-pink-200">Test_Change</h3>

    <RouterView/>
  </div>
</template>
<script>
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