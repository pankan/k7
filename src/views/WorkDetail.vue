<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import worksThumbData from '../data/worksThumb.json'
import worksDetailData from '../data/worksDetail.json'
import MarkdownIt from 'markdown-it'
import Footer from '../components/Footer.vue'
import WorkThumb from '../components/WorkThumb.vue'

const route = useRoute()
const md = new MarkdownIt()
const workDetail = computed(() => {
  const workId = route.params.id as string
  return worksDetailData.find(work => work.id === workId)
})

const workThumb = computed(() => {
  const workId = route.params.id as string
  return worksThumbData.find(work => work.id === workId)
})

const nextWork = computed(() => {
  const currentIndex = worksThumbData.findIndex(work => work.id === route.params.id)
  const nextIndex = (currentIndex + 1) % worksThumbData.length
  return worksThumbData[nextIndex]
})
</script>

<template>
  <div class="container" v-if="workDetail">
    <div class="content-full">
      <div class="header-sections">
        <h2><router-link to="/works" class="fw-100">Works</router-link> <span class="fw-100 o-6">&gt;</span> {{ workThumb?.title }}</h2>
        <h3>{{ workThumb?.year }} | {{ workThumb?.tags }}</h3>
      </div>
      <hr>
      <div v-html="md.render(workDetail.content)"></div>
      <hr>
      <WorkThumb
        :id="nextWork.id"
        :image="nextWork.image"
        :year="nextWork.year"
        :title="nextWork.title"
        :description="nextWork.description"
        :tags="nextWork.tags"
      />
    </div>
    <Footer />
  </div>
</template>