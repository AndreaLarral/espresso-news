<template>
  <div>
    <h2 class="flex justify-center text-4xl font-bold text-amber-950">Morning coffee? Morning news</h2>
    <h3 class="flex justify-center text-2xl pb-6 pt-3">Discover the latest freshly brewed news from all around the world.</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="news in newsData" :key="news.url" class="p-4 border rounded-md shadow bg-gray-100">
        <img :src="getRandomImage()" alt="News Thumbnail" class="w-full h-32 object-cover mb-2 rounded-md">
        <h3 class="mt-2 text-xl font-bold">{{ news.title }}</h3>
        <p>{{ news.description }}</p>
        <a :href="news.url" target="_blank" class="text-amber-700 hover:text-amber-600">Learn more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
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
        // const response = await fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.NEWS_API_KEY}");
        const response = await fetch('./src/assets/data.json');
        let data = await response.json()
        console.log("Fetched news data:", data.sources);
        this.newsData = data.sources; 
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