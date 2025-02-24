<script setup lang="ts">
import ProductCard from '@/components/ui/ProductCard.vue';
import type { Products } from '@/main';
import { inject } from 'vue';

const products: Products = inject('products') || [];
</script>

<template>
    <main>
        <section class="pt-12 m-12 ">
        <h1 class="mx-4 text-center text-4xl green mb-12 border-l-emerald-400 border-l-2 font-bold uppercase mt-12 md:mt-0">Products</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">    
            <ProductCard
            v-for="(product, index) in products"
            :key="product.id"
            :product="product"
            />
        </div>
        </section>
    </main>
</template>