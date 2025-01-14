<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
const workCards = ref([
  {
    title: 'Bookmark Landing Page',
    desc: 'Clone of the landing page bookmark website to showcase and practice my front-end skillset of creating a well structured responsive website.',
    img: '/images/card-images/bookmark-landing-page.png',
    slug: 'bookmark',
    link: 'https://bookmark-landing-page-7mh5.onrender.com/'
  },
  {
    title: 'Countries Info App',
    desc: 'Practice project showing front-end skillset dealing with large dataset API',
    img: '/images/card-images/countries-dark-mode.png',
    slug: 'countries',
    link: 'https://rest-api-countries-33wc.onrender.com'
  }
])
</script>

<template>
  <div class="hero">
    <div class="container">
      <h2 class="h2-title">Projects</h2>
      <hr />
      <p class="p-title">
        Here you will find some of my personal projects that I created with each project containing
        its own case details page.
      </p>
    </div>
  </div>
  <div class="container">
    <div v-for="item in workCards" :key="item" class="row">
      <div class="col"><img :src="item.img" alt="" /></div>
      <div class="col">
        <div class="card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <RouterLink :to="`/projects/${item.slug}`"><button>Website Details</button></RouterLink>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 100%;
}
.p-title {
  text-align: center;
  margin-top: 20px;
  color: var(--primary-dark);
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
}

h3 {
  margin: 20px 0;
}
h2 {
  text-align: center;
}
img {
  width: 100%;
  border-radius: 10px;
}
.row {
  gap: 50px;
  margin: 80px 0px;
  align-items: center;
}

.btns-container {
  display: flex;
  gap: 20px;
}
button {
  font-size: 14px;
}
@media (width<900px) {
  .row {
    flex-direction: column;
    margin: 0px;
  }
  .col {
    display: flex;
    justify-content: center;
  }
}
</style>
