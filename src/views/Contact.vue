<script setup lang="ts">
  import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="container">
    <div class="content-full">
      <h2>Contact me</h2>
      <h6>Let's Create Something Great</h6>
      <hr>
      <p>I thrive on collaborating with innovative teams to design digital products users love. If you have a project in the works, or just want to say hello,</p>
      <br>
      <br>
      <div class="two-cols">
        <div class="contact-form col">
          <p>Drop me a line using the contact form. I typically respond within 24 hours.</p>
          <input type="text" placeholder="Name">
          <input type="tel" placeholder="Phone">
          <input type="email" placeholder="Email">
          <textarea placeholder="Message"></textarea>
          <a href="#"><button>Send</button></a>
        </div>
        <div class="social col">
          <p>Or find me on social for real-time updates</p>
          <a href="https://dribbble.com/pankan/" target="_blank"><button><img src="../assets/img/icons/dribbble.svg">Dribbble</button></a>
          <a href="https://www.linkedin.com/in/pankan/" target="_blank"><button><img src="../assets/img/icons/linkedin.svg">LinkedIn</button></a>
          <a href="https://codepen.io/pankan/" target="_blank"><button><img src="../assets/img/icons/codepen.svg">Codepen</button></a>
          <a href="https://www.instagram.com/kiranpankan/" target="_blank"><button><img src="../assets/img/icons/instagram.svg">Instagram</button></a>
          <!-- <a href="https://www.facebook.com/kspankan/" target="_blank"><button><img src="../assets/img/icons/facebook.svg">Facebook</button></a> -->
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>