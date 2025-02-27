<script setup lang="ts">
import Cart from './ui/Cart.vue';

</script>

<template>
    <nav class="flex justify-between items-center py-4 px-6 shadow-md rounded-2xl">

        <a href="/home" class="flex items-center">
            <img alt="StratLab logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
            StratLab
        </a>
        
        
        <ul class="flex items-center gap-6">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/products">Products</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>

        <a href="/cart" class="">
            <Cart />
        </a>
        
    </nav>
</template>