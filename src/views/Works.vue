<script setup lang="ts">
  import Footer from '../components/Footer.vue'
  import WorkThumb from '../components/WorkThumb.vue'
  import worksThumbData from '../data/worksThumb.json'
</script>

<template>
  <div class="container">
    <div class="content-full">
      <h2>Works</h2>
      <hr>
      <div class="works">
        <WorkThumb
          v-for="work in worksThumbData"
          :key="work.title"
          :id="work.id"
          :image="work.image"
          :year="work.year"
          :title="work.title"
          :description="work.description"
          :tags="work.tags"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>