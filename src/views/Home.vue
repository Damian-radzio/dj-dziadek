<template>
  <section class="home">
    <h1 class="h1">Najlepszy DJ na Twoją imprezę! <span>DJ Dziadek</span></h1>
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
  position: relative;
  .h1 {
    position: absolute;
    bottom: 100px;
    left: 90px;
    color: white;
    font-size: 60px;
    font-weight: 500;
    span {
      margin-top: 15px;
      display: block;
      font-weight: 400;
    }
  }
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
