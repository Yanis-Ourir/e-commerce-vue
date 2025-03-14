<script setup lang="ts">
import type { Product } from '@/main';
import { useCartStore } from '@/stores/cart';
import { ref } from 'vue';



const store = useCartStore();




</script>


<template>
    <div class="flex flex-col justify-center items-center h-screen">
        <h1 class="mx-4 text-center text-4xl green font-bold uppercase md:my-12">Panier</h1>
        <div class="bg-white rounded-2xl shadow-lg p-6 max-w-2xl w-full mb-24">
            <div v-if="store.cart.length === 0" class="text-center mt-4">
                <p class="text-gray-600">Votre panier est vide.</p>
                <router-link to="/products" class="mt-4 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition">
                    Retour à la boutique
                </router-link>
            </div>
            <div v-else class="">
                <h2 class="text-lg font-bold text-green-800">Récapitulatif</h2>
                <div v-for="product in store.cart" :key="product.id" class="flex items-center justify-between border-b border-gray-200 py-4">
                    <div class="flex items-center">
                    <img :src="'/' + product.image" :alt="product.name" class="w-16 h-16 object-cover rounded-xl" />
                        <div class="ml-4">
                            <h2 class="text-lg font-semibold text-green-800">{{ product.name }}</h2>
                            <span class="text-gray-600 block">{{ product.price * product.quantity }}€</span>
                        </div>
                    </div>
                    <div class="flex items-center">
                    <button class="text-gray-500  hover:text-green-500 transition" @click="store.addProduct(product)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                        </svg>
                    </button>
                    <span class="text-gray-
                    600 mx-4">{{ product.quantity }}</span>
                    <button class="text-gray-500 hover:text-red-500 transition" @click="store.removeProduct(product)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                        </svg>

                    </button>
                </div>
            </div>
            <div class="mt-6">
                <div class="flex justify-between mt-4">
                    <span class="text-gray-600">Total</span>
                    <span class="text-green-800 font-semibold">{{ store.cart.reduce((total, product, quantity) => total + product.price * product.quantity, 0) }}€</span>
                    </div>
                    <button class="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition mt-4 w-full">
                    Commander
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>