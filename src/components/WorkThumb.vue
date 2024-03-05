<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  defineProps({
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
  })
</script>
<template>
  <router-link :to="link" class="work">
    <div class="thumb">
      <img :srcset="'/src/assets/img/' + image + ' 2x'" alt="Work Thumbnail" />
    </div>
    <div class="info">
      <div class="year">{{ year }}</div>
      <div class="bottom">
        <div class="title h2">{{ title }}</div>
        <div class="desc">{{ description }}</div>
        <div class="tags h6">{{ tags }}</div>
      </div>
    </div>
  </router-link>
</template>