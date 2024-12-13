<template>
  <div>
    <h2 class="flex justify-center text-4xl font-bold text-amber-950">News for {{ countryName }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="news in countryNews" :key="news.url" class="p-4 border rounded-md shadow bg-gray-100 flex flex-col justify-between">
        <div>
          <img :src="getRandomImage()" alt="News Thumbnail" class="w-full h-32 object-cover mb-2 rounded-md">
          <h3 class="mt-2 text-xl font-bold">{{ news.title }}</h3>
          <p>{{ news.description }}</p>
        </div>
        <a :href="news.url" target="_blank" class="text-amber-800 hover:text-amber-700 self-start mt-4">Learn more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryDetail",
  data() {
    return {
      countryName: '',
      countryNews: [],
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
    async fetchCountryNews() {
      try {
        const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
        const headers = {
          'X-Api-Key': API_KEY,
        };

        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.$route.params.country}`, {
          method: 'GET',
          headers: headers
        });
        let data = await response.json();
        console.log("Fetched country news data:", data.articles);
        this.countryNews = data.articles;
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
    this.countryName = this.$route.params.country;
    this.fetchCountryNews();
  }
};
</script>

<style>
</style>
