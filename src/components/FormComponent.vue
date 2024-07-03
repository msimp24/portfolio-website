<script setup>
import axios from 'axios'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const toggle = ref(false)

const apiClient = axios.create({
  baseURL: 'https://email-service-53lc.onrender.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const sendEmail = () => {
  apiClient
    .post('/contact', {
      name: name.value,
      email: email.value,
      message: message.value
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  toggle.value = !toggle.value
}
</script>

<template>
  <div :class="{ hide: !toggle }" class="message-container center">
    <h1>Thank you for your message!</h1>
  </div>
  <form :class="{ hide: toggle }" @submit.prevent="sendEmail()">
    <div class="row">
      <div class="input-col">
        <label for="name">Name</label>
        <input v-model="name" required class="input-text" type="text" id="name" name="name" />
      </div>
      <div class="input-col">
        <label for="name">Email</label>
        <input v-model="email" type="email" required class="input-text" id="email" name="email" />
      </div>
    </div>

    <label for="message">Message</label>
    <textarea v-model="message" required name="message"></textarea>
    <div class="center">
      <button class="submit-button">Submit</button>
    </div>
  </form>
</template>

<style scoped>
.hide {
  display: none;
}
label {
  color: var(--primary-dark);
  font-size: 24px;
}

.input-text {
  height: 50px;
  margin: 6px 0px;
  padding: 10px;
  font-size: 22px;
  border-radius: 10px;
}

textarea {
  resize: none;
  width: 100%;
  height: 150px;
  margin: 6px 0px;
  border-radius: 10px;
  font-size: 22px;
  padding: 10px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px auto;
  max-width: 800px;
  padding: 2rem;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: var(--primary-white);
  color: var(--primary-dark);
  border-radius: 20px;
}
.input-col {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.submit-button {
  width: 30%;
}
.center {
  text-align: center;
}

.row {
  gap: 20px;
  justify-content: space-between;
}
.message-container {
  margin: 50px 0px;
}

@media (width<700px) {
  .row {
    flex-direction: column;
    gap: 0px;
  }
  .submit-button {
    width: 50%;
  }
}
</style>
