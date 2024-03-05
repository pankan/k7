<script setup lang="ts">
  import Footer from '../components/Footer.vue'
  import WorkThumb from '../components/WorkThumb.vue'
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="content-full">
      <h2>Works</h2>
      <hr>
      <div class="works">
        <WorkThumb
          link="/works/detail"
          image="lx-thumb.png"
          year="2024"
          title="Loxx.ai"
          description="SDLC platform designed from the ground up to integrate AI"
          tags="Product, Branding, Web"
        />
        <router-link to="/works/detail" class="work">
          <div class="thumb">
            <img srcset="../assets/img/eg-thumb.png 2x">
          </div>
          <div class="info">
            <div class="year">2024</div>
            <div class="bottom">
              <div class="title h2">Edge</div>
              <div class="desc">Peer-to-peer serverless infrastructure using the spare capacity</div>
              <div class="tags h6">Product, Branding, Multi-OS</div>
            </div>
          </div>
        </router-link>
        <router-link to="/works/detail" class="work">
          <div class="thumb">
            <img srcset="../assets/img/bs-thumb.png 2x">
          </div>
          <div class="info">
            <div class="year">2024</div>
            <div class="bottom">
              <div class="title h2">BeanStalk</div>
              <div class="desc">AI-first Business intelligence and Customer experience</div>
              <div class="tags h6">Product, Branding, Web</div>
            </div>
          </div>
        </router-link>
        <router-link to="/works/detail" class="work">
          <div class="thumb">
            <img srcset="../assets/img/bx-thumb.png 2x">
          </div>
          <div class="info">
            <div class="year">2023</div>
            <div class="bottom">
              <div class="title h2">Blox Suite</div>
              <div class="desc">The virtual office to unite your remote workforce</div>
              <div class="tags h6">Product, Branding, Desktop, Mobile, Web</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>