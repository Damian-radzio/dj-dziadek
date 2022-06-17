<template>
  <section class="home">
    <div class="hero-image"></div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
.home {
  .hero-image {
    background-image: url('../assets/img/HeroImage.png');
    background-size: cover;
    background-position: 70% center;
    -webkit-box-shadow: inset 0px 14px 24px -6px rgba(0, 0, 0, 0.304);
    -moz-box-shadow: inset 0px 14px 24px -6px rgba(0, 0, 0, 0.304);
    box-shadow: inset 0px 14px 24px -6px rgba(0, 0, 0, 0.304);
    width: 100%;
    height: 800px;
  }
}
</style>
