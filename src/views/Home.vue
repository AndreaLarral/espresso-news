<template>
    <div>
      <h1>Home view</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="news in newsData" :key="news.url" class="p-4 border rounded shadow">
          <img :src="getRandomImage()" alt="News Thumbnail" class="w-full h-32 object-cover mb-2">
          <h2 class="mt-2 text-xl font-bold">{{ news.title }}</h2>
          <p>{{ news.description }}</p>
          <a :href="news.url" target="_blank" class="text-blue-500">Read more</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
    data() {
      return {
        newsData: [],
        fallbackImages: [
          '/imgs/01_Coffee.png',
          '/imgs/02_Coffee.png',
          '/imgs/03_Coffee.png',
          '/imgs/04_Coffee.png',
          '/imgs/05_Coffee.png',
          '/imgs/06_Coffee.png',
          '/imgs/07_Coffee.png',
          '/imgs/08_Coffee.png',
          '/imgs/09_Coffee.png',
          '/imgs/10_Coffee.png',
          '/imgs/11_Coffee.png',
          '/imgs/12_Coffee.png',
          '/imgs/13_Coffee.png',
          '/imgs/14_Coffee.png'
        ]
      };
    },
    methods: {
      async fetchNews() {
        try {
          const response = await fetch("https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${process.env.NEWS_API_KEY}");
          const data = await response.json();
          console.log("Fetched news data:", data.articles);
          this.newsData = data.articles; 
        } catch (error) {
          console.log(error);
        }
      },
      getRandomImage() {
        const randomIndex = Math.floor(Math.random() * this.fallbackImages.length);
        return this.fallbackImages[randomIndex];
      }
    },
    mounted() {
      this.fetchNews();
    }
  };
  </script>
  
  <style>
  </style>
  
  
  
  
  