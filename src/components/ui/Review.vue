<script setup lang="ts">
    defineProps<{
        text: string
        name: string
        city: string
        rating: string
    }>()
</script>

<template>
    <div class="bg-gray-200 rounded-2xl p-4 w-[400px]">
        <div class="flex items-center">
            <p class="review__rating-number">⭐ {{ rating }}</p>
        </div>

        <div>
            <p>{{ text }}</p>
        </div>

        <div>
            <p class="font-bold">{{ name + ', ' + city }}</p>
        </div>
    </div>
</template>