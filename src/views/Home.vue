<template>
  <section class="home">
    <h1 class="h1">
      <span class="first"> Najlepszy DJ </span>
      na Twoją imprezę! <span>DJ Dziadek</span>
    </h1>
    <div class="hero-image"></div>
  </section>
</template>

<script>
export default {
  name: 'Home-section',
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
    margin-top: 130px;
    background-image: url('../assets/img/HeroImage.png');
    background-size: cover;

    background-position: 70% center;
    -webkit-box-shadow: inset 0px 14px 24px -6px rgba(0, 0, 0, 0.304);
    -moz-box-shadow: inset 0px 14px 24px -6px rgba(0, 0, 0, 0.304);
    box-shadow: inset 0px 14px 24px -6px rgba(0, 0, 0, 0.304);
    width: 100%;
    height: 85vh;
  }
}
@media (max-width: 968px) {
  .home {
    overflow: hidden;
    .h1 {
      font-size: 40px;
      left: 50px;
      bottom: 150px;
      span {
        margin-top: 15px;
        display: block;
        font-weight: 400;
      }
      .first {
        display: inline-block;
      }
    }
    .hero-image {
      background-image: url('../assets/img/HeroImageMobile.png');
      background-size: 100%;
      background-position: top 20% center;
      min-width: 460px;
    }
  }
}
@media (max-width: 768px) {
  .home {
    .h1 {
      font-size: 30px;
      left: 30px;
      span {
        margin-top: 15px;
        display: block;
        font-weight: 400;
      }
      .first {
        display: block;
      }
    }
  }
}
</style>
