<template>
  <div>
    <h2 class="flex justify-center text-4xl font-bold text-amber-950 pb-5">News for {{ fullCountryName }}</h2>
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
      ],
      countryCodeToName: {
          'us': 'United States',
          'sp': 'Spain',
          'ca': 'Canada',
          'fr': 'France',
          'de': 'Germany',
          'it': 'Italy',
          'jp': 'Japan',
          'cn': 'China',
          'in': 'India',
          'br': 'Brazil',
          'au': 'Australia',
          'mx': 'Mexico',
          'ru': 'Russia',
          'za': 'South Africa',
          'kr': 'South Korea',
          'ar': 'Argentina',
          'sa': 'Saudi Arabia',
          'eg': 'Egypt',
          'ng': 'Nigeria',
          'tr': 'Turkey',
          'id': 'Indonesia',
          'pk': 'Pakistan',
          'bd': 'Bangladesh',
          'vn': 'Vietnam',
          'ir': 'Iran',
          'th': 'Thailand',
          'my': 'Malaysia',
          'ph': 'Philippines',
          'sg': 'Singapore',
          'nz': 'New Zealand',
          'ke': 'Kenya',
          'gh': 'Ghana',
          'ug': 'Uganda',
          'tz': 'Tanzania',
          'dz': 'Algeria',
          'ma': 'Morocco',
          'tn': 'Tunisia',
          'ly': 'Libya',
          'sd': 'Sudan',
          'et': 'Ethiopia',
          'sn': 'Senegal',
          'ml': 'Mali',
          'ci': 'Ivory Coast',
          'cm': 'Cameroon',
          'rw': 'Rwanda',
          'bi': 'Burundi',
          'cd': 'Democratic Republic of the Congo',
          'ao': 'Angola',
          'zm': 'Zambia',
          'mw': 'Malawi',
          'mz': 'Mozambique',
          'zw': 'Zimbabwe',
          'bw': 'Botswana',
          'na': 'Namibia',
          'sz': 'Eswatini',
          'ls': 'Lesotho',
          'mg': 'Madagascar',
          'mu': 'Mauritius',
          'sc': 'Seychelles',
          'km': 'Comoros',
          'cv': 'Cape Verde',
          'gw': 'Guinea-Bissau',
          'gn': 'Guinea',
          'sl': 'Sierra Leone',
          'lr': 'Liberia',
          'gm': 'Gambia',
          'mr': 'Mauritania',
          'ne': 'Niger',
          'td': 'Chad',
          'ss': 'South Sudan',
          'cf': 'Central African Republic',
          'gq': 'Equatorial Guinea',
          'ga': 'Gabon',
          'cg': 'Republic of the Congo'
        }
    };
  },
  computed: {
    fullCountryName () {
      const name = this.countryCodeToName[this.countryName.toLowerCase()] || 'Unknown Country'; 
      console.log("Country name:", name ); 
      return name;
    } 
    
  },
  methods: {
    async fetchCountryNews() {
      try {
        const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
        const headers = {
          'X-Api-Key': API_KEY,
        };

        const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?country=${this.$route.params.country}`, {
          method: 'GET',
          headers: headers
        });
        let data = await response.json();
        console.log("Fetched country news data:", data.sources);
        this.countryNews = data.sources;
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
    console.log("Short name:", this.countryName);
    this.fetchCountryNews();
  }
};
</script>

<style>
</style>
