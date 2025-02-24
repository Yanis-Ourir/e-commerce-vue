<template>
  <div class="p-4 min-h-screen flex flex-col items-center">
    <div class="bg-white rounded-2xl shadow-lg p-6 max-w-2xl w-full">
      <img :src="product.image" :alt="product.name" class="w-full h-60 object-cover rounded-xl" />
      <h1 class="text-2xl font-bold text-green-800 mt-4">{{ product.name }}</h1>
      <p class="text-gray-600 text-sm mt-2">{{ product.description }}</p>
      <span class="text-green-700 font-semibold text-xl mt-4 block">{{ product.price }}€</span>
      <button class="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition mt-4 w-full">
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

<script>
export default {
  data() {
    return {
      product: {
        id: 1,
        name: "Produit 1",
        description: "Description détaillée du produit 1 avec ses caractéristiques et avantages.",
        price: 29.99,
        image: "https://via.placeholder.com/300"
      },
      reviews: [
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
    };
  }
};
</script>

<style scoped>
.bg-green-600 {
  background-color: hsla(160, 100%, 37%, 1);
}
</style>