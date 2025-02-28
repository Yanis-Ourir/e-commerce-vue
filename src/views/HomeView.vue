<script setup lang="ts">
import ReviewList from '../components/ReviewList.vue'
import Partners from '../components/Partners.vue'
import Accordeon from '../components/Accordeon.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <main>
      <section class="wrapper py-12">
        <Header msg="Verdant - Des produits Écologiques" />
      </section>

    <section class="pt-12">
      <ReviewList/>
    </section>

    <section>
      <Partners />
    </section>

    <section class="pt-12 m-12">
      <Accordeon />
    </section>
  </main>
</template>
