<template>
    <div>
      <h1>News by Country</h1>
      <div id="map" style="height: 500px;"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Countries",
    data() {
      return {
        newsData: [],
        categorizedNews: {},
        map: null,
        countryCoordinates: {},
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
    methods: {
      async fetchNews() {
        try {
          const countryCodes = Object.keys(this.countryCodeToName);
          for (const countryCode of countryCodes) {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${process.env.NEWS_API_KEY}`);
            const data = await response.json();
            console.log(`Fetched news data for ${countryCode}:`, data.articles);
            this.newsData.push(...data.articles); // Assuming the API returns an array of news articles in data.articles
          }
          this.categorizeNewsByCountry();
          this.initializeMap();
        } catch (error) {
          console.log(error);
        }
      },
      categorizeNewsByCountry() {
        this.categorizedNews = this.newsData.reduce((acc, news) => {
          const country = news.source.country || 'Unknown';
          if (!acc[country]) {
            acc[country] = [];
          }
          acc[country].push(news);
          return acc;
        }, {});
        console.log("Categorized news by country:", this.categorizedNews);
      },
      async getCountryCoordinates(countryCode) {
        const countryName = this.countryCodeToName[countryCode.toLowerCase()];
        if (!countryName) {
          console.log(`No country name found for code ${countryCode}`);
          return null;
        }
        if (this.countryCoordinates[countryName]) {
          return this.countryCoordinates[countryName];
        }
        try {
          const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${countryName}&key=${process.env.MAPS_API_KEY}`);
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            const location = data.results[0].geometry.location;
            this.countryCoordinates[countryName] = { lat: location.lat, lng: location.lng };
            return this.countryCoordinates[countryName];
          } else {
            console.log(`No coordinates found for ${countryName}`);
            return null;
          }
        } catch (error) {
          console.log(`Error fetching coordinates for ${countryName}:`, error);
          return null;
        }
      },
      async initializeMap() {
        console.log("Initializing map...");
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 20, lng: 0 },
          zoom: 2
        });
  
        for (const countryCode in this.categorizedNews) {
          const newsCount = this.categorizedNews[countryCode].length;
          const coordinates = await this.getCountryCoordinates(countryCode);
          if (coordinates) {
            console.log(`Adding marker for ${countryCode} at coordinates:`, coordinates);
            const marker = new google.maps.Marker({
              position: coordinates,
              map: this.map,
              title: `${this.countryCodeToName[countryCode.toLowerCase()]}: ${newsCount} news articles`
            });
  
            const infoWindow = new google.maps.InfoWindow({
              content: `<b>${this.countryCodeToName[countryCode.toLowerCase()]}</b><br>${newsCount} news articles`
            });
  
            marker.addListener('click', () => {
              infoWindow.open(this.map, marker);
              this.$router.push({ name: 'CountryDetail', params: { country: countryCode } });
            });
  
            marker.addListener('mouseover', () => {
              infoWindow.open(this.map, marker);
            });
  
            marker.addListener('mouseout', () => {
              infoWindow.close();
            });
          } else {
            console.log(`No coordinates found for ${countryCode}`);
          }
        }
      }
    },
    mounted() {
      console.log("Mounted component...");
      this.fetchNews();
    }
  };
  </script>
  
  <style>
  #map {
    width: 100%;
    height: 500px;
  }
  </style>
  