<script setup lang="ts">
import Review from './ui/Review.vue';
</script>


<template>
    <p class="text-2xl font-bold text-center">What they say about us</p>
    <div class="flex justify-center gap-6 py-6">
        <Review name="Yanis Ourir" city="Lyon" text="Amazing products, would recommend" rating="5" />
        <Review name="John Doe" city="Paris" text="Great customer service" rating="4" />
        <Review name="Jane Doe" city="Marseille" text="Fast delivery" rating="5" />
 </div>
</template>