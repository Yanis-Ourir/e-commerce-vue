<script setup lang="ts">
import Button from './ui/Button.vue'
import CheckMark from './ui/CheckMark.vue'
defineProps<{
  msg: string
}>()

const method = () => {
  window.location.href = '/products'
}

</script>

<template>

  <div class="greetings flex flex-col-reverse md:flex-row items-center justify-around p-4 text-center md:text-start">
    <div class="w-1/2">
      <h1 class="green border-l-emerald-400 border-l-2 font-bold uppercase mt-12 md:mt-0">{{ msg }}</h1>
      <h2 class="md:text-6xl text-2xl font-bold md:leading-16 leading-8 py-6">Découvrez des produits durables et respectueux de l'environnement</h2>
      <h3 class="md:leading-8 md:text-xl">
        Explorez notre sélection de produits écologiques conçus pour un mode de vie plus sain et durable.
        Faites vos achats en toute confiance avec une expérience utilisateur fluide et agréable.
      </h3>
      
        <div class="flex flex-col items-center md:flex-row gap-4 py-6">
          <CheckMark text="Satisfait ou remboursé" class="checkmark text-2xl font-bold" />
          <CheckMark text="Support client 24/7" class="checkmark text-2xl font-bold" />
          <CheckMark text="Paiement sécurisé" class="checkmark text-2xl font-bold" />
        </div>
     
      <Button text="Découvrir la boutique" class="button px-6 py-2" :onClick="method"/>
    </div>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="300" height="300" />
  </div>


</template>


