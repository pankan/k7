<template>
  <footer>
    <div class="copy">© 2024</div>
    <div class="link"><router-link to="/">Home</router-link></div>
    <div class="link"><router-link to="/works">Works</router-link></div>
    <div class="link"><router-link to="/about">About</router-link></div>
    <div class="link"><router-link to="/contact">Contact</router-link></div>
  </footer>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>