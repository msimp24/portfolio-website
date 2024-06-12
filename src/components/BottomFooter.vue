<script setup></script>

<template>
  <div class="hero">
    <div class="container">
      <div class="footer">
        <p>Copyright 2024 - Mark Simpson</p>
        <div class="icons-container">
          <a target="”_blank”" href="https://github.com/msimp24"
            ><img src="/github.svg" alt=""
          /></a>
          <a target="”_blank”" href="https://www.linkedin.com/in/mark-simpson-230162145/"
            ><img src="/linked-in.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  width: 100%;
  height: 100px;
  color: var(--primary-white);
  justify-content: space-between;
}
p {
  align-self: flex-end;
  color: var(--primary-white);
}
.hero {
  background-color: var(--light-gray);
}

.icons-container {
  display: flex;
  align-self: flex-end;
  gap: 20px;
}
img {
  height: 30px;
  width: 30px;
}
img:hover {
  transform: scale(1.2);
  cursor: pointer;
}

@media (width<700px) {
  .footer {
    flex-direction: column;
    text-align: center;
  }
  p {
    align-self: center;
  }
  .icons-container {
    align-self: center;
  }
}
</style>
