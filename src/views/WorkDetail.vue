<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import worksThumbData from '../data/worksThumb.json'
import worksDetailData from '../data/worksDetail.json'
import MarkdownIt from 'markdown-it'
import Footer from '../components/Footer.vue'

const route = useRoute()
const workDetail = ref(null)
const workThumb = ref(null)
const md = new MarkdownIt()

onMounted(() => {
  const workId = route.params.id as string
  workDetail.value = worksDetailData.find(work => work.id === workId)
  workThumb.value = worksThumbData.find(work => work.id === workId)
})
</script>

<template>
  <div class="container" v-if="workDetail">
    <div class="content-full">
      <h2><router-link to="/works">Works</router-link> > {{ workThumb.title }}</h2>
      <h6>{{ workThumb.year }} | {{ workThumb.tags }}</h6>
      <hr>
      <div v-html="md.render(workDetail.content)"></div>
    </div>
    <Footer />
  </div>
</template>