<script setup lang="ts">
import { ref } from 'vue';

// Les SVG sont stockés directement dans les données
const values = ref([
  {
    id: 1,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"/></svg>`,
    title: 'Respectueux de l\'environnement',
    description: 'Nos produits sont conçus pour minimiser l\'impact sur la planète et préserver les ressources naturelles.'
  },
  {
    id: 2,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448l0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 32 96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z"/></svg>`,
    title: 'Matériaux durables',
    description: 'Nous utilisons des matériaux recyclés ou issus de sources renouvelables pour tous nos produits.'
  },
  {
    id: 3,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M275.5 6.6C278.3 2.5 283 0 288 0s9.7 2.5 12.5 6.6L366.8 103C378 119.3 384 138.6 384 158.3l0 1.7c0 53-43 96-96 96s-96-43-96-96l0-1.7c0-19.8 6-39 17.2-55.3L275.5 6.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"/></svg>`,
    title: 'Économie d\'énergie',
    description: 'Nos processus de fabrication sont optimisés pour réduire la consommation d\'énergie et l\'empreinte carbone.'
  }
]);
</script>

<template>
  <section class="py-16 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <p class="green border-l-emerald-400 border-l-2 font-bold uppercase inline-block pl-3">Notre engagement écologique</p>
        <h2 class="md:text-5xl text-2xl font-bold md:leading-tight mt-4">
          Pourquoi choisir des produits écologiques?
        </h2>
        <p class="mt-6 text-gray-600 max-w-2xl mx-auto">
          Notre mission est de proposer des alternatives durables sans compromis sur la qualité. Découvrez les valeurs qui guident chacun de nos produits.
        </p>
      </div>

      <!-- Cartes des valeurs -->
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="value in values" 
          :key="value.id"
          class="bg-white rounded-lg p-8 shadow-sm border-t-4 border-emerald-400 hover:shadow-md transition-all"
        >
          <div class="bg-emerald-100 text-emerald-600 w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <!-- Utilisation de v-html pour insérer le SVG -->
            <span v-html="value.svg" class="svg-icon"></span>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ value.title }}</h3>
          <p class="text-gray-600">{{ value.description }}</p>
        </div>
      </div>

      <!-- Appel à l'action -->
      <div class="mt-12 text-center">
        <button class="button px-8 py-3 font-medium">
          Découvrir notre démarche
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.green {
  color: hsla(160, 100%, 37%, 1);
}

.button {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: hsla(160, 100%, 37%, 0.8);
  transform: translateY(-2px);
}

.svg-icon {
  height: 24px;
  width: 24px;
}

.svg-icon svg {
  stroke: hsla(160, 100%, 37%, 1);
  height: 24px;
  width: 24px;
}
</style>