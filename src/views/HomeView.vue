<script setup>
import { ref } from 'vue'
const capabilites = ref([
  {
    title: 'Full Stack Web Development',
    description:
      'Ability to handle both front-end (user interface) and back-end (server-side) development.'
  },
  {
    title: 'Responsive Website Design',
    description:
      'Capability to build websites that adapt to different screen sizes (mobile, tablet, desktop).'
  },
  {
    title: 'Visually Appealing Landing Page',
    description:
      'Let me help drive traffic for your business by creating a user friendly landing page website.'
  }
])

const technologies = ref([
  'HTML',
  'CSS',
  'Javascript',
  'Vue',
  'Node JS',
  'MongoDB',
  'SQL',
  'Firebase',
  'Vite',
  'REST'
])
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="typewriter">Building Websites That Empower Local Businesses</h2>
        </div>

        <div class="col">
          <img src="./../assets/images/linked-in-profile.jpg" alt="" />
        </div>
      </div>
      <div class="row"></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>Freelance Full Stack Web Developer | Professional Hockey Player</h3>
          <p>
            My name is <span class="color">Mark Simpson</span>, a full-stack developer passionate
            about empowering local businesses with a strong online presence. I create user-friendly,
            responsive websites that help local businesses thrive. I have a Bachelors of Computer
            Science degree from the University of New Brunswick.<br />
            <br />
            When I'm not coding, I hit the ice as a professional hockey player. This balance between
            the technical and physical worlds fuels my creativity and drive to deliver exceptional
            results.
          </p>
          <button @click="$router.push('/home')">View Work</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Services</h2>
        </div>
      </div>
      <div v-for="item in capabilites" :key="item" class="row">
        <div class="col services">
          <h3>{{ item.title }}</h3>
          <p class="p-desc">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Tech Stack</h2>
        </div>
      </div>
      <div class="row">
        <div class="tech-btns-container">
          <div v-for="item in technologies" :key="item" class="tech-btns">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.services {
  width: 100%;
  display: flex;
  border-bottom: 4px solid var(--primary-white);
  margin-bottom: 30px;
}
.col {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

img {
  width: 40%;
  border-radius: 25%;
  border: solid var(--light-gray) 8px;
  min-width: 250px;
}

.p-desc {
  margin-bottom: 10px;
}
.tech-btns-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.tech-btns {
  background-color: var(--primary-white);
  padding: 16px;
  margin: 8px 10px;
  border-radius: 20px;
}
.color {
  color: var(--primary-orange);
}

@media (width<600px) {
  .row {
    flex-direction: column;
  }
  .h2 {
    text-align: center;
  }
}
</style>
