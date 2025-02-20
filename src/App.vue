<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import ReviewList from './components/ReviewList.vue'

</script>

<template>

   <Navbar />

    <div class="wrapper py-12">
      <Header msg="The marketing toolkit" />
    </div>

    <div class="pt-12">

      <ReviewList/>
    </div>
    
  <RouterView />
</template>



