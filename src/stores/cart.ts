import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Product } from '@/main';

type ProductWithQuantity = Product & { quantity: number };

export const useCartStore = defineStore('cart', () => {
  const cart = ref<ProductWithQuantity[]>([]);

  function addProduct(product: Product) {
    const existingProduct = cart.value.find(cartItem => cartItem.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.value.push({
        ...product,
        quantity: 1
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart.value));
  }

  function removeProduct(product: Product) {
    const productToRemove = cart.value.find((p) => p.id === product.id);
    if (!productToRemove) return;
    if(productToRemove.quantity > 1) {
      productToRemove.quantity--;
      localStorage.setItem('cart', JSON.stringify(cart.value));
      return;
    }
    const index = cart.value.indexOf(productToRemove);
    cart.value.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart.value));
  }

  return { cart, addProduct, removeProduct };
});