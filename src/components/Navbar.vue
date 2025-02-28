<script setup lang="ts">
import Cart from './ui/Cart.vue';

</script>

<template>
    <nav class="flex justify-between items-center py-4 px-6 shadow-md rounded-2xl">

        <a href="/home" class="flex items-center">
            <img alt="Verdant logo" class="logo" src="@/assets/logo.png" width="120" height="50" />
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