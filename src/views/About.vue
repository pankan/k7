<script setup lang="ts">
  import Footer from '../components/Footer.vue'
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="content-full">
      <h2>Kiran Pankan</h2>
      <h6>UX Unicorn & Brand Strategist</h6>
      <hr>
      <p>I'm a multi-disciplinary designer and innovator who thrives on crafting digital experiences that connect with people. For over a decade, I've been combining strategic thinking with creative execution to solve complex challenges.</p>

      <p>My superpowers lie in research, branding, UX and UI design. I immerse myself to uncover user insights and business needs. Then I visualize solutions focused on engagement and conversion. </p>

      <p>I've delivered multi-channel products, campaigns and brand strategies for 80+ companies globally. From startups to enterprises, I partner cross-functionally to drive results. My versatile skillset allows me to design for platforms ranging from voice to automotive. </p>

      <p>I geek out on programming too! My technical expertise empowers me to bring ideas to life through prototyping and front-end development. I've built solutions leveraging HTML, CSS, JavaScript and more.</p>

      <p>Beyond individual contributor work, I have experience building and leading high-performing product teams. I love mentoring other designers as well. </p>

      <p>When I'm not designing, you'll find me collecting quirky stuff, reading, gardening, or getting my hands dirty with DIY projects. I also enjoy supporting community organizations in my free time.</p>

      <p>I always welcome new connections and interesting projects. If you have a challenge needing an innovative approach, let's chat!</p>
      <router-link to="/contact"><button>Let's Talk</button></router-link>
      <hr>
      <p>Experience</p>
      <div class="jobs">
        <div class="job">
          <div class="org">Zone Labs</div>
          <div class="role">Director - Product</div>
          <div class="time">2018 - Present</div>
        </div>
        <div class="job">
          <div class="org">Gritstone Technologies</div>
          <div class="role">Consultant - People & Design</div>
          <div class="time">2017 - 2018</div>
        </div>
        <div class="job">
          <div class="org">Mobiotics IT Solutions</div>
          <div class="role">Head - Product & FE</div>
          <div class="time">2016 - 2017</div>
        </div>
        <div class="job">
          <div class="org">QBurst Technologies</div>
          <div class="role">UI/UX Designer</div>
          <div class="time">2014 - 2016</div>
        </div>
        <div class="job">
          <div class="org">Pro bono consulting</div>
          <div class="role">UI/UX Designer</div>
          <div class="time">2013 - 2014</div>
        </div>
        <div class="job">
          <div class="org">Dolojo Labs</div>
          <div class="role">Head of Design</div>
          <div class="time">2012 - 2013</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>