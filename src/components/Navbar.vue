<script setup lang="ts">
import Cart from './ui/Cart.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="flex justify-between items-center py-4 px-6 shadow-md rounded-2xl bg-white sticky top-4 z-50 mx-4 md:mx-8">
    <a href="/" class="flex items-center">
      <img alt="Verdant logo" class="logo" src="@/assets/logo.png" width="120" height="50" />
    </a>
    

    <ul class="hidden md:flex items-center gap-8">
      <li>
        <a href="/" class="text-gray-700 hover:text-emerald-500 transition-colors font-medium">Accueil</a>
      </li>
      <li>
        <a href="/products" class="text-gray-700 hover:text-emerald-500 transition-colors font-medium">Produits</a>
      </li>
      <li>
        <a href="/about" class="text-gray-700 hover:text-emerald-500 transition-colors font-medium">Nous découvrir</a>
      </li>
    </ul>

    <div class="hidden md:flex items-center gap-4">
      <a href="/cart" class="relative hover:text-emerald-500 transition-colors">
        <Cart />
      </a>
    </div>
    
    <div class="md:hidden flex items-center gap-4">
      <a href="/cart" class="relative hover:text-emerald-500 transition-colors mr-4">
        <Cart />
      </a>
      <button @click="toggleMenu" class="text-gray-700 hover:text-emerald-500 transition-colors">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </nav>
  
  <!-- Menu mobile -->
  <div v-if="isMenuOpen" class="md:hidden bg-white shadow-lg rounded-xl mx-4 mt-8 py-4 px-6 fixed top-20 right-0 left-0 z-40">
    <ul class="flex flex-col gap-4">
      <li>
        <a href="/" class="text-gray-700 hover:text-emerald-500 transition-colors font-medium block py-2">Accueil</a>
      </li>
      <li>
        <a href="/products" class="text-gray-700 hover:text-emerald-500 transition-colors font-medium block py-2">Produits</a>
      </li>
      <li>
        <a href="/about" class="text-gray-700 hover:text-emerald-500 transition-colors font-medium block py-2">Nous découvrir</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Animation pour le menu mobile */
@keyframes slideIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

div[v-if="isMenuOpen"] {
  animation: slideIn 0.3s ease-out forwards;
}

/* Styles supplémentaires pour la navbar */
nav {
  transition: all 0.3s ease;
}

nav:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}
</style>