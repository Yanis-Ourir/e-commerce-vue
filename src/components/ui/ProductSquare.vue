<script setup lang="ts">
import Button from './Button.vue'
    defineProps<{
        product: {
            id: number;
            name: string;
            price: number;
            description: string;
            image: string;
            class: string;
        };
    }>()

    const method = () => {
        console.log('Button clicked')
    }
</script>

<template>
    <div class="product-square px-4 py-16 flex">
        <div class="product-square_preview">
            <p>{{ product.id }}</p>
            <p class="product-name">{{ product.name }}</p>
        </div>
        <div class="product-square_content px-8 py-4">
            <div class="flex flex-col gap-4 h-[100%] justify-between">
                <div>
                    <p class="text-4xl font-bold">{{ product.name }}</p>
                    <p class="w-1/2">{{ product.description }}</p>
                </div>
                <Button text="Check Product" class="button px-6 py-2 w-fit" :onClick="method"/>
            </div>

            <img src="@/assets/one-piece-booster.png" :alt="product.name" class="product-square_image"/>
        </div>
    </div>
</template>