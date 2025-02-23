<script setup lang="ts">
import Button from './ui/Button.vue'
import CheckMark from './ui/CheckMark.vue'
defineProps<{
  msg: string
}>()

const method = () => {
  console.log('Button clicked')
}

</script>

<template>

  <div class="greetings flex flex-col-reverse md:flex-row items-center justify-around p-4 text-center md:text-start">
    <div class="w-1/2">
      <h1 class="green border-l-emerald-400 border-l-2 font-bold uppercase mt-12 md:mt-0">{{ msg }}</h1>
      <h2 class="md:text-6xl text-2xl font-bold md:leading-16 leading-8 py-6">Mastering Proven Strategies That Drive Real Results</h2>
      <h3 class="md:leading-8 md:text-xl">
        Unleash the power of digital marketing with our comprehensive suite of tools and resources.
        Designed to help you achieve your business goals and drive real results.
        Navigate the complex world of digital marketing with confidence and ease.
      </h3>
      
        <div class="flex flex-col items-center md:flex-row gap-4 py-6">
          <CheckMark text="Money back guarantee" class="checkmark text-2xl font-bold" />
          <CheckMark text="24/7 customer support" class="checkmark text-2xl font-bold" />
          <CheckMark text="Secure payment" class="checkmark text-2xl font-bold" />
        </div>
     
      <Button text="Get Started" class="button px-6 py-2" :onClick="method"/>
    </div>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="300" height="300" />
  </div>


</template>


