<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const store = useCartStore();

if(localStorage.getItem('cart')) {
    store.cart = JSON.parse(localStorage.getItem('cart')!);
}


</script>

<template>
    <!--CART ICON FOR NAVBAR-->

    <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3a1 1 0 011-1h16a1 1 0 011 1v2m-9 18a2 2 0 01-2-2h4a2 2 0 01-2 2m-1-9a3 3 0 113-3 3 3 0 01-3 3z" />
        </svg>
        <span class="text-gray-800 ml-2">Panier</span>
        <span class="text-gray-800 ml-2">({{ store.cart.length }})</span>
    </div>
</template>