<script setup>
import { ref } from 'vue'
const workCards = ref([
  {
    title: 'Job Board template',
    desc: 'Basic job board website template built with Vue for front-end and Node JS for backend',
    img: '/src/assets/images/card-images/job-board.png',
    slug: 'job-board'
  },
  {
    title: 'Countries Info app',
    desc: 'Built with Vue, practice project displaying the info on each country with light/dark mode',
    img: '/src/assets/images/card-images/countries-dark-mode.png',
    slug: 'countries'
  },
  {
    title: 'Bookmark landing page',
    desc: 'Built with Vue, practice project showing ability to create responsive landing page websites.',
    img: '/src/assets/images/card-images/bookmark-landing-page.png',
    slug: 'bookmark'
  }
])
</script>

<template>
  <div class="container">
    <h2>Work</h2>
    <div class="wrapper">
      <div v-for="item in workCards" :key="item" class="card">
        <img :src="item.img" alt="" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
        <div class="btns-container">
          <button>Details</button>
          <button>View Website</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 500px;
  border-radius: 20px;
  padding: 6px;
}
h3 {
  margin: 20px 0;
}
img {
  width: 100%;
  border-radius: 20px;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 70px 0;
}
.btns-container {
  display: flex;
  gap: 20px;
}
button {
  font-size: 14px;
}
@media (width<700px) {
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
