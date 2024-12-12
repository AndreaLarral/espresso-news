<template>
    <div>
        <h2 class="flex justify-center text-4xl font-bold">Sorry! There's been a mistake. Please try again,</h2>
        <h3 class="flex justify-center text-2xl">or enjoy some fun coffee facts in the meanwhile✨</h3>
        <div>
            <p class="text-center px-8 py-6">{{ quoteStore.randomQuote }}</p>
        </div>
        <div class="flex justify-center">
            <button class="bg-gray-100 hover:bg-gray-400 px-12 py-2 rounded-lg" @click="quoteStore.getRandomQuote"> New fact </button>
        </div>
        <div class="flex justify-center mt-8">
            <img src="https://images.unsplash.com/photo-1613963969191-2a77db9811d2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Not Found Image" class="w-full h-[50vh] object-cover">
        </div>
    </div>
</template>

<script>
import useQuoteStore from '../stores/counter';

export default {
    name: "NotFound",
    computed: {
        quoteStore() {
            return useQuoteStore();
        }
    },
    mounted() {
        this.quoteStore.getRandomQuote();
    }
};
</script>

<style>

</style>
