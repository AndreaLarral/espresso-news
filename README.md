# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Espresso News

Espresso News is a Vue 3 application developed with Vite, offering users the latest global news. For a visual overview, you can refer to the images stored in the `00_imgs` folder. The file named `000_ESPRESSONEWS_OVERVIEW.png` within this folder contains the workflow used.

## Features

- Browse news comming from different sources from around the world
- Interactive map showing accumulated news per country
- News categorized by selected country
- Responsive design using Tailwind CSS

## Technologies Used

- Vue 3
- Vue Router
- Pinia for state management
- Tailwind CSS for styling
- Vite as the build tool

## Getting Started

### Prerequisites

- Node.js (version 12.0 or higher)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:
   git clone https://github.com/your-username/espresso-news.git
   cd espresso-news

2. Install dependencies:
   npm install

### Development

To start the development server:
npm run dev

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

- `src/`: Contains the source code
  - `components/`: Vue components
  - `views/`: Vue components used as pages
  - `stores/`: Pinia stores for state management
  - `assets/`: Static assets like images
- `public/`: Public static assets
- `imgs/`: Coffee-related images

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
