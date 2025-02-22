<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import ReviewList from './components/ReviewList.vue'
import Partners from './components/Partners.vue'
import Accordeon from './components/Accordeon.vue'
import Footer from './components/Footer.vue'

</script>

<template>

   <Navbar />

    <section class="wrapper py-12">
      <Header msg="The marketing toolkit" />
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

    <section>
      <Footer />
    </section>
    
  <RouterView />
</template>



