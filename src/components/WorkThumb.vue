<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  id: {
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

const imageSrc = computed(() => {
  return new URL(`../assets/img/${props.image}`, import.meta.url).href
})
</script>

<template>
  <router-link :to="{ name: 'WorkDetail', params: { id: id } }" class="work">
    <div class="thumb">
      <img :src="imageSrc" alt="Work Thumbnail" />
    </div>
    <div class="info">
      <div class="year">{{ year }}</div>
      <div class="bottom">
        <div class="title h2">{{ title }}</div>
        <div class="desc">{{ description }}</div>
        <div class="tags h3">{{ tags }}</div>
      </div>
    </div>
  </router-link>
</template>