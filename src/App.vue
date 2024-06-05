<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import BottomFooter from './components/BottomFooter.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <BottomFooter />
</template>

<style scoped></style>
