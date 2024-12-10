<template>
    <div>
        <h2>Not found</h2>
        <!-- <h3>{{ counter.name }}</h3>
        <h4>{{ counter.title }}</h4> -->
        <h4 class= "text-6xl text-indigo-200 font bold">{{ counter.count }}</h4>
        <div class="flex justify-center gap-8">
            <button class="bg-indigo-100 hover:bg-indigo-400 px-6 py-2 rounded-lg" @click="counter.increment">+</button>
            <button class="bg-indigo-100 hover:bg-indigo-400 px-6 py-2 rounded-lg" @click="counter.decrement">-</button>
            <button class="bg-indigo-100 hover:bg-indigo-400 px-6 py-2 rounded-lg" @click="counter.restart">restart</button>
        </div>
        
    </div>
</template>
<script>

// import useProductStore from '../stores/products';
import { useCounterStore } from '../stores/counter';

export default {
    name: "Not found",
    data(){
        return{}
    },
    computed: {
        counter(){
            return useCounterStore()

        },
        product (){

        }

    },
    methods: {
        
    },
}
</script>
<style>
    
</style>