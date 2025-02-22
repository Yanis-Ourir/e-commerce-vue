<script setup lang="ts">
import ProductSquare from './ui/ProductSquare.vue';

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: `25+ affiches de recherche d'une seule pièce 10K 300dpi JPG BUNDLE | Cadeau déco Japon Art à imprimer Anime/Manga`,
        image: 'product1.jpg',
        class: 'product1',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        description: 'Product 2 description',
        image: 'product2.jpg',
        class: 'product2',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        description: 'Product 3 description',
        image: 'product3.jpg',
        class: 'product3',
    },
];


</script>

<template>
    <div class="p-4 mx-27">

        <p class="green border-l-emerald-400 border-l-2 font-bold uppercase">course summary</p>
        <h5 class="text-5xl font-bold leading-16 py-6">
            Navigatin The Marketing Landscape: <br>Your Roadmap to success
        </h5>
        
        <div class="flex justify-center gap-6 py-6">
            
            <ProductSquare
            v-for="(product, index) in products"
            :key="product.id"
            :product="product"
            />
        </div>
    </div>
</template>
