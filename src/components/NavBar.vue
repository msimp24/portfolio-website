<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav class="nav">
      <ui class="nav-list">
        <li class="nav-item">
          <RouterLink>
            <img class="logo" src="./../assets/images/networking.svg" alt="" />
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/work">Work</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link">GitHub</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link">Contact</RouterLink>
        </li>
      </ui>
    </nav>
  </div>
</template>

<style scoped>
.nav {
  width: 100%;
}

.nav-list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-link {
  color: var(--primary-white);
  text-decoration: none;
}
.nav-link:hover {
  color: var(--primary-orange);
}
.nav-item {
  list-style-type: none;
  font-size: 18px;
  font-weight: 500;
}
.logo {
  height: 60px;
  width: 60px;
}
</style>
