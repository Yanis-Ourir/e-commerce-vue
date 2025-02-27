import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/main'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>([]);

  function addProduct(product: Product) {
    cart.value.push(product);
    localStorage.setItem('cart', JSON.stringify(cart.value));
  }

  function removeProduct(product: Product) {
    cart.value = cart.value.filter((p) => p.id !== product.id);
    console.log(cart.value);
    localStorage.setItem('cart', JSON.stringify(cart.value));
  }

  return { cart, addProduct, removeProduct }
})
