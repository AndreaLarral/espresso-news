<template>
    <div>
      <h2 class="flex justify-center text-4xl font-bold text-amber-950">Today's global news menu</h2>
      <h3 class="flex justify-center text-2xl pb-3">Select a country and stay updated on what happens around you.</h3>
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
          const API_KEY = import.meta.env.VITE_NEWS_API_KEY
            const headers = {
                'X-Api-Key': API_KEY,
            };

          const response = await fetch("https://newsapi.org/v2/top-headlines/sources", {
              method: 'GET',
              headers: headers
          })

          const data = await response.json();
          this.newsData.push(...data.sources);
          this.categorizeNewsByCountry();
          this.initializeMap();
        } catch (error) {
          console.log(error);
        }
      },
      categorizeNewsByCountry() {
        this.categorizedNews = this.newsData.reduce((acc, news) => {
          const country = news.country || 'Unknown';
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
        if (this.countryCoordinates[countryName]) {
          return this.countryCoordinates[countryName];
        }
        try {
          const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY
          const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${countryName}&key=${MAPS_API_KEY}`);
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            const location = data.results[0].geometry.location;
            this.countryCoordinates[countryName] = { lat: location.lat, lng: location.lng };
            return this.countryCoordinates[countryName];
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

        const infoWindow = new google.maps.InfoWindow();

        for (const countryCode in this.categorizedNews) {
          const newsCount = this.categorizedNews[countryCode].length;
          const coordinates = await this.getCountryCoordinates(countryCode);
          if (coordinates) {
            console.log(`Adding marker for ${countryCode} at coordinates:`, coordinates);
            const marker = new google.maps.Marker({
              position: coordinates,
              map: this.map,
              title: `${this.countryCodeToName[countryCode.toLowerCase()]}: ${newsCount} news articles`,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 5,
                fillColor: 'brown',
                fillOpacity: 1,
                strokeWeight: 0,
                strokeColor: 'brown'
              }
            });

            marker.addListener('click', () => {
              infoWindow.setContent(`<b>${this.countryCodeToName[countryCode.toLowerCase()]}</b><br>${newsCount} news articles<br><a href="#/news/${countryCode}">View News</a>`);
              infoWindow.open(this.map, marker);
            });
          } 
        }

        this.map.addListener('click', () => {
          infoWindow.close();
        });
      }

    },
    mounted() {
      console.log("Mounted component...");
      this.fetchNews();
    }
  };

  
  </script>
  
  <style>

  </style>
  
  