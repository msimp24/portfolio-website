<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
const capabilites = ref([
  {
    title: 'Full Stack Web Development',
    description:
      'Ability to handle both front-end (user interface) and back-end (server-side) development.',
    img: '/laptop.svg'
  },
  {
    title: 'Responsive Website Design',
    description:
      'Capability to build websites that adapt to different screen sizes (mobile, tablet, desktop).',
    img: '/mobile-phone.svg'
  },
  {
    title: 'Visually Appealing Landing Page',
    description:
      'Let me help drive traffic for your business by creating a user friendly landing page website.',
    img: '/globe-dark.svg'
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
    <div class="hero">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="typewriter">Building Websites That Empower Small Businesses</h2>
          </div>

          <div class="col">
            <img class="prof-img" src="/images/linked-in-profile.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>Freelance Full Stack Web Developer | Professional Hockey Player</h3>
          <div class="row">
            <div class="col">
              <img class="hockey-img" src="/images/action-shot.jpeg" alt="" />
            </div>
            <div class="col">
              <p>
                My name is <span class="color">Mark Simpson</span>, a full-stack developer
                passionate about empowering local businesses with a strong online presence. I create
                budget and user-friendly, responsive websites that help local businesses thrive. I
                have a Bachelors of Computer Science degree from the University of New Brunswick.<br />
                <br />
                When I'm not coding, I hit the ice as a professional hockey player. This balance
                between the technical and physical worlds fuels my creativity and drive to deliver
                exceptional results.
              </p>
              <RouterLink class="work-btn"
                ><button @click="$router.push('/projects')">View Work</button></RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Services</h2>
        </div>
      </div>
      <div class="row">
        <div class="col services-card" v-for="item in capabilites" :key="item">
          <img class="card-img" :src="item.img" alt="" />

          <h4>{{ item.title }}</h4>
          <p class="card-p">{{ item.description }}</p>
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
.hero {
  background-color: var(--primary-white);
  padding: 50px 0;
}
.typewriter {
  color: var(--primary-dark);
}
.card-img {
  width: 25%;
}
.card-p {
  color: var(--primary-dark);
  font-size: 16px;
}
.services-card {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border: solid 2px var(--primary-dark);
  background-color: var(--primary-white);
  border-radius: 20px;
  max-width: 380px;
  color: var(--primary-dark);
  text-align: center;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.row {
  gap: 40px;
}
h4 {
  font-size: 24px;
  text-align: center;
}
.col {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.prof-img {
  width: 70%;
  border-radius: 25%;
  border: solid var(--light-gray) 8px;
  min-width: 250px;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.work-btn {
  align-self: flex-start;
}

.p-desc {
  margin-bottom: 10px;
}

.color {
  font-weight: 700;
}
.hockey-img {
  margin: 20px 0;
  border-radius: 20px;
}

.flip-card {
  background-color: transparent;
  max-width: 350px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

@media (width<750px) {
  .row {
    flex-direction: column;
    align-items: center;
  }
  .h2 {
    text-align: center;
  }
}
</style>
