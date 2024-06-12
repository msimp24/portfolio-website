<script setup>
import { ref, computed, onMounted } from 'vue'
onMounted(() => {
  window.scrollTo(0, 0)
})

let props = defineProps(['name'])

const workDetails = ref([
  {
    title: 'Bookmark Landing Page',
    slug: 'bookmark',
    shortDesc:
      'Clone of the landing page bookmark website to showcase and practice my front-end skillset of creating a well structured responsive website.',
    details:
      "In this project, I created a simple, responsive clone of the website 'Bookmark'. It serves as a showcase of my front-end development skills by demonstrating the ability to build a visually appealing and responsive website layout. While this clone doesn't offer functionalities like adding or managing bookmarks, it highlights my proficiency in HTML for constructing the website's structure and CSS for creating a responsive and user-friendly design that adapts to different screen sizes. This project serves as a valuable addition to my portfolio, showcasing my understanding of front-end development principles and my ability to translate website designs into clean code.",
    tech: ['Vue', 'CSS', 'HTML', 'Javascript', 'GitHub', 'Responsive Design', 'VSCode'],
    websiteLink: 'https://bookmark-landing-page-7mh5.onrender.com/',
    img: '/images/card-images/bookmark-landing-page.png'
  },
  {
    title: 'Countries Info App',
    shortDesc:
      'Practice project clone of Countries API app showing front-end skillset dealing with large JSON dataset',
    slug: 'countries',
    details: `This portfolio project is a Vue.js single-page application (SPA) that displays a list of countries. Data is pulled from a local JSON file containing country information and alphabetically sorted using Javascript. The application enhances user experience by offering a search bar to filter countries by name and a toggle to switch between light and dark mode, demonstrating my skills in user interaction and interface customization. Beyond these features, the project showcases my proficiency in core Vue concepts like components, data binding, and lifecycle hooks. It also highlights my ability to handle JSON data and utilize Javascript sorting algorithms.This project effectively demonstrates my ability to build user-friendly SPAs with Vue.js, handle JSON data, and implement interactive features and UI customization.`,
    tech: ['Vue', 'Javascript', 'CSS', 'HTML', 'API', 'JSON', 'Responsive', 'GitHub', 'VSCode'],
    websiteLink: 'https://rest-api-countries-33wc.onrender.com',
    img: '/images/card-images/countries-dark-mode.png'
  },
  {
    title: 'Job Board Clone',
    slug: 'job-board',
    shortDesc:
      'Basic job board website template built with Vue for front-end and Node JS for backend.',
    details:
      "I developed a lightweight job board application using Vue.js for the frontend and Node.js with Express for the backend. While user registration isn't currently implemented, users can leverage a simple API to search for job postings. This API allows filtering by job title and location, making it easier to find relevant opportunities. This project highlights my ability to create focused web applications utilizing frontend and backend technologies.",
    tech: [
      'Vue',
      'Javascript',
      'HTML',
      'CSS',
      'VSCode',
      'NodeJS',
      'Express JS',
      'GitHub',
      'Responsive'
    ],
    websiteLink: 'https://job-board-1-xh9d.onrender.com',
    img: '/images/card-images/job-board.png'
  }
])

const currProject = computed(() => {
  let project = null
  workDetails.value.forEach((element) => {
    console.log(element.slug)
    console.log(props.name)
    if (props.name == element.slug) {
      project = element
    }
  })
  return project
})
</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="row">
        <h1>{{ currProject.title }}</h1>
        <p class="p-title">
          {{ currProject.shortDesc }}
        </p>
        <div class="center">
          <a :href="currProject.websiteLink"><button>Website Link</button></a>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <img :src="currProject.img" alt="" />
    </div>
    <div class="row">
      <h3>Project Overview</h3>
      <p>{{ currProject.details }}</p>
    </div>
    <div class="row">
      <h3>Skills Used</h3>

      <div class="tech-btns-container">
        <div class="tech-btns" v-for="item in currProject.tech" :key="item">{{ item }}</div>
      </div>
    </div>
    <div class="row">
      <h3>See Live</h3>
      <div class="btns-container">
        <a :href="currProject.websiteLink"><button>Website Link</button></a>
        <RouterLink to="/projects"><button class="back-btn">Back to projects</button></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 60%;
}
.hero {
  width: 100%;
  height: 500px;
  background-color: var(--primary-white);
  display: flex;
  align-items: center;
}
img {
  border-radius: 10px;
  margin: 20px 0px;
}
.row {
  flex-direction: column;
}
.p-title {
  color: var(--primary-dark);
  text-align: center;
}
h1 {
  font-size: 50px;
  color: var(--primary-dark);
  text-align: center;
}
h3 {
  margin: 20px 0px;
}
.center {
  text-align: center;
}
.btns-container {
  display: flex;
  gap: 30px;
}
@media (width < 1000px) {
  .container {
    width: 90%;
  }
  button {
    font-size: 16px;
  }
}
</style>
