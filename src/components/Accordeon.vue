<script setup lang="ts">
import { inject } from 'vue';
import ProductSquare from './ui/ProductSquare.vue';
import type { Products } from '@/main';

const products: Products = inject('products') || [];
</script>

<template>
    <div class="p-4 md:mx-27 text-center md:text-start">

        <p class="green border-l-emerald-400 border-l-2 font-bold uppercase">course summary</p>
        <h5 class="md:text-5xl text-xl font-bold md:leading-16 py-6">
            Navigatin The Marketing Landscape: <br>Your Roadmap to success
        </h5>
        
        <div class="flex md:flex-row flex-col justify-center gap-6 py-6">
            
            <ProductSquare
            v-for="(product, index) in products"
            :key="product.id"
            :product="product"
            />
        </div>
    </div>
</template>
