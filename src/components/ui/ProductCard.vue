<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

    defineProps<{
        product: {
            id: number;
            name: string;
            price: number;
            description: string;
            image: string;
            class: string;
            slug: string;
        };
    }>()

    const store = useCartStore();


</script>

<template>
<div class="p-4" :href="'/product/' + product.slug">
        <div>
        <div :key="product.id" class="bg-white rounded-2xl shadow-lg p-4">
            <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover rounded-xl" />
            <h2 class="text-lg font-bold text-green-800 mt-4">{{ product.name }}</h2>
            <p class="text-gray-600 text-sm mt-2">{{ product.description }}</p>
            <div class="flex justify-between items-center mt-4">
            <span class="text-green-700 font-semibold">{{ product.price }}€</span>
                <button @click="store.addProduct(product)" class="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
                    Ajouter
                </button>
            </div>
        </div>
        </div>
    </div>
</template>