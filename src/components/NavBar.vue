<script setup>
import { ref, watch } from 'vue'
import useWindowWidth from './../composables/useWindowWidth'

const windowWidth = ref(useWindowWidth())

const toggle = ref(false)

const checkIfMobile = () => {
  if (windowWidth.value > 750) {
    toggle.value = false
  }
}

watch(() => {
  checkIfMobile()
})
const routes = [
  { path: '/', name: 'Home' },

  { path: '/projects', name: 'Projects' },

  { path: '/contact', name: 'Contact' }
]
</script>

<template>
  <header :class="{ clicked: toggle }">
    <div class="container">
      <nav>
        <a href="/"><img class="logo" src="/globe-white.svg" alt="" /></a>
        <ul :class="{ show: toggle }">
          <li v-for="item in routes" :key="item.name">
            <RouterLink @click="toggle = false" class="nav-item" :to="item.path">{{
              item.name
            }}</RouterLink>
          </li>
          <div class="icons-container">
            <a target="”_blank”" href="https://github.com/msimp24"
              ><img class="icons" src="/github.svg" alt=""
            /></a>
            <a target="”_blank”" href="https://www.linkedin.com/in/mark-simpson-230162145/"
              ><img class="icons" src="/linked-in.svg" alt=""
            /></a>
          </div>
        </ul>
        <img
          class="close"
          :class="{ show: toggle }"
          @click="toggle = !toggle"
          src="/close.svg"
          alt=""
        />
        <img
          @click="toggle = !toggle"
          :class="{ hide: toggle }"
          class="bars"
          src="/bars.svg"
          alt=""
        />
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--primary-dark);
}
.logo {
  width: 50px;
  height: 50px;
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 70%;
}
nav {
  display: flex;
  justify-content: space-between;
  z-index: none;
}
nav ul {
  display: flex;
  align-items: center;
  gap: 50px;
  list-style-type: none;
}
.nav-item {
  text-decoration: none;
  color: var(--primary-white);
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
}
.nav-item:hover {
  border-bottom: 3px solid var(--primary-white);
  padding-bottom: 10px;
}
.bars {
  width: 40px;
  height: 40px;
  display: none;
}
.bars:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.close {
  width: 40px;
  height: 40px;
  display: none;
}
.close:hover {
  transform: scale(1.2);
  cursor: pointer;
}
.router-link-active {
  border-bottom: 3px solid var(--primary-white);
  padding-bottom: 10px;
}
.icons {
  width: 40px;
  height: 40px;
}
.icons:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.icons-container {
  display: flex;
  gap: 30px;
}

@media (width < 800px) {
  nav {
  }
  .clicked {
    position: fixed;
    top: 0;
    width: 100%;
    opacity: 0.98;
    background-color: var(--light-gray);
    height: 100vh;
  }
  .bars {
    display: block;
  }
  .close {
  }
  nav ul {
    display: none;
    margin-top: 60px;
    flex-direction: column;
    width: 100%;
    position: relative;
  }
  .show {
    display: flex;
  }
  .hide {
    display: none;
  }
  .icons-container {
    flex-direction: column;
    gap: 30px;
  }
}
</style>
