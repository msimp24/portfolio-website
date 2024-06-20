<script setup>
import { onMounted } from 'vue'
import FormComponent from './../components/FormComponent.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="hero">
    <div class="container">
      <h2 class="h2-title">Contact</h2>
      <hr />
      <p class="p-title">Let's get in touch</p>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="wrapper">
          <img class="icons" src="/location.svg" alt="" />
          <h3>Location</h3>
          <p>Saint John, NB/Sheffield, UK</p>
        </div>
      </div>
      <div class="col">
        <div class="wrapper">
          <img class="icons" src="/email.svg" alt="" />
          <h3>Email</h3>
          <p>Mark.Simpson4@gmail.com</p>
        </div>
      </div>
    </div>
    <FormComponent />
  </div>
</template>

<style scoped>
.icons {
  width: 100px;
  height: 100px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
h3 {
  align-self: center;
}
p {
  align-self: center;
}
.header {
  text-align: center;
}
img {
  max-height: 400px;
}
.hero {
  width: 100%;
  height: 300px;
  background-color: var(--primary-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.h2-title {
  color: var(--primary-dark);
  text-align: center;
}
.p-title {
  text-align: center;
  margin-top: 20px;
  color: var(--primary-dark);
}

.row {
  gap: 20px;
  justify-content: space-between;
}

@media (width<700px) {
  .row {
    flex-direction: column;
    gap: 0px;
  }
}
</style>
