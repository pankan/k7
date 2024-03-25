<script setup lang="ts">
  import Footer from '../components/Footer.vue'
  import { ref } from 'vue'

  const name = ref('')
  const phone = ref('')
  const email = ref('')
  const message = ref('')
  const isLoading = ref(false)
  const formSuccess = ref(false)
  const formError = ref(false)

  const submitForm = async () => {
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('phone', phone.value)
    formData.append('email', email.value)
    formData.append('message', message.value)

    try {
      formSuccess.value = false
      formError.value = false
      isLoading.value = true

      const response = await fetch('https://script.google.com/macros/s/AKfycbyedRK9BckrnNM02sWbO4bccwn_oVBlNHXLagcysauobNfEEksRyh0dLs9171cqTiE7-g/exec', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Clear form fields on successful submission
        name.value = ''
        phone.value = ''
        email.value = ''
        message.value = ''
        isLoading.value = false
        formSuccess.value = true
      } else {
        isLoading.value = false
        formError.value = true
      }
    } catch (error) {
      console.error('Error:', error)
      isLoading.value = false
      formError.value = true
    }
  };
</script>

<template>
  <div class="container">
    <div class="content-full">
      <div class="header-sections">
        <h2>Contact me</h2>
        <h3>Let's Create Something Great!</h3>
      </div>
      <hr>
      <p>I thrive on collaborating with innovative teams to design digital products users love. If you have a project in the works, or just want to say hello,</p>
      <br>
      <br>
      <div class="two-cols">
        <div class="contact-form col">
          <div class="loader-wrapper" v-if="isLoading">
            <div class="spinner"></div>
          </div>
          <p>Drop me a line using the contact form. I typically respond within 24 hours.</p>
          <form @submit.prevent="submitForm" class="contact-form">
            <input type="text" placeholder="Name" v-model="name" required>
            <input type="tel" placeholder="Phone" v-model="phone" required>
            <input type="email" placeholder="Email" v-model="email" required>
            <textarea placeholder="Message" rows="4" v-model="message" required></textarea>
            <div class="buttons">
              <button type="submit">Send</button>
              <div class="modal success" v-if="formSuccess">
                <div class="success-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="svg-success" viewBox="0 0 24 24">
                    <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                      <circle class="success-circle-outline" cx="12" cy="12" r="11.5"/>
                      <polyline class="success-tick" points="17,8.5 9.5,15.5 7,13"/>
                    </g>
                  </svg>
                </div>
                Message sent successfully!
              </div>
              <div class="modal error" v-if="formError">Failed to send message. Please try again.</div>
            </div>
          </form>
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