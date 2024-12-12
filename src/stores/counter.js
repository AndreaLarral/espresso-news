import { defineStore } from "pinia";

const useQuoteStore = defineStore('quote', {
    state: () => ({
        quotes: [
            "Believe it or not, before coffee was filtered through water, it was chewed. African tribes grinded coffee berries together with animal fat to create little coffee treats that gave them a boost while hunting and gathering. It was basically the first energy boost pill.",
            "In order to grow coffee you need to be close to the equator. In fact, anywhere between the Tropic of Cancer and Tropic of Capricorn can grow the coffee plant successfully. There are three main coffee regions in the world who produce distinctly flavored brews: Central/South America, Africa, Middle East/Asia. Which one is your favorite?",
            "Coffee has taken over in so many places around the world, leading to some truly unique and delicious variations on the simple cup of black coffee.There’s the cinnamon dream of Mexico’s Café de Olla. Portugal’s iced lemon coffee, Mazagran. The sweet and potent Cà phê đá from Vietnam. And of course, the classic Italian espresso.",
            "Have you ever wondered why so many companies advertise that their beans are 100% Arabica? Well, there are two main types of beans with some huge differences.",
            "Just like wine, chocolate or cheese, coffee has its own connoisseurs who can taste the subtle differences in each brewed cup. If you want to impress your friends at your next brunch, remember these tips: first explore the sweetness, then feel the weight on your tongue, then scan your tastebuds for the level of acidity."
        ],
        randomQuote: ''
    }),
    actions: {
        getRandomQuote() {
            const randomIndex = Math.floor(Math.random() * this.quotes.length);
            this.randomQuote = this.quotes[randomIndex];
        }
    }
});

export default useQuoteStore;
