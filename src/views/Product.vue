<script setup lang="ts">
import type { Products } from '@/main';
import { useCartStore } from '@/stores/cart';
import { inject } from 'vue';

const props = defineProps<{
  slug: string;
}>();

const products: Products = inject('products') || [];
const reviews = [
  {
          id: 1,
          user: "Alice",
          comment: "Super produit, très satisfait !",
          rating: 5
        },
        {
          id: 2,
          user: "Bob",
          comment: "Bon rapport qualité/prix.",
          rating: 4
        },
        {
          id: 3,
          user: "Charlie",
          comment: "Livraison rapide, je recommande !",
          rating: 5
        }
      ]

const product = products.find((product) => product.slug === props.slug) || {
  id: 0,
  name: 'Produit non trouvé',
  price: 0,
  description: 'Désolé, nous n\'avons pas trouvé le produit que vous cherchez.',
  image: 'https://via.placeholder.com/300',
  slug: 'not-found',
  class: ''
}

const store = useCartStore();

</script>


<template>
   <div v-if="product.id === 0" class="p-4 min-h-screen flex flex-col items-center justify-center text-center">
    <h1 class="text-2xl font-bold text-red-600">Produit non trouvé</h1>
    <p class="text-gray-600 mt-2 max-w-md">
      Désolé, nous n'avons pas trouvé le produit que vous cherchez. 
      Retournez à la boutique pour découvrir d'autres articles.
    </p>
    <router-link to="/products" class="mt-4 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition">
      Retour à la boutique
    </router-link>
  </div>
  <div v-else class="p-4 min-h-screen flex flex-col items-center">
    <div class="bg-white rounded-2xl shadow-lg p-6 max-w-2xl w-full">
      <img :src="'../public/' + product.image" :alt="product.name" class="w-full h-60 object-cover rounded-xl" />
      <h1 class="text-2xl font-bold text-green-800 mt-4">{{ product.name }}</h1>
      <p class="text-gray-600 text-sm mt-2">{{ product.description }}</p>
      <span class="text-green-700 font-semibold text-xl mt-4 block">{{ product.price }}€</span>
      <button @click="store.addProduct(product)" class="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition mt-4 w-full">
        Ajouter au panier
      </button>
      
      <div class="mt-6">
        <h2 class="text-lg font-bold text-green-800">Avis des utilisateurs</h2>
        <div v-for="review in reviews" :key="review.id" class="mt-4 p-4 rounded-xl bg-gray-100">
          <p class="text-gray-800 font-semibold">{{ review.user }}</p>
          <p class="text-gray-600 text-sm mt-1">{{ review.comment }}</p>
          <span class="text-yellow-500">⭐ {{ review.rating }}/5</span>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.bg-green-600 {
  background-color: hsla(160, 100%, 37%, 1);
}
</style>