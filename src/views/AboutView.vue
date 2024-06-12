<script setup></script>

<template>
  <div class="hero">
    <div class="container">
      <h2 class="h2-title">About Me</h2>
      <hr />
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <img src="/images/action-shot.jpeg" alt="" />
      </div>
      <div class="col">
        <img src="/images/action-shot.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
