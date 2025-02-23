<script setup lang="ts">
import ProductSquare from './ui/ProductSquare.vue';
import onepieceAffiche from '@/assets/onepiece-affiche.webp';

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'One Piece - 25 Affiches Wanted Primes Mugiwara 100,5 x 70,5 cm',
        image: './onepiece-affiche.webp',
        class: 'product1',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        description: 'Booster One piece, 12 cartes à collectionner, 1 carte rare garantie',
        image: './one-piece-booster.png',
        class: 'product2',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        description: 'One Piece - Figurine Monkey D. Luffy Gear Fourth - King of Artist - 30 cm',
        image: './one-piece-figurine.webp',
        class: 'product3',
    },
];


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
