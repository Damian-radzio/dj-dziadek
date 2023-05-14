<template>
  <section class="home">
    <div class="twist-wrapper">
      <h3 class="twist-header">nowość w ofercie!</h3>
      <div class="twist-content">
        <a href="https://www.instagram.com/fotobudkatwist360/">
          <img class="twist-img" src="../assets/img/twist-360.jpeg" alt="twist-360-zdjecie" />
        </a>
        <div class="text-content-wrapper">
          <div class="content-text">
            <p class="first">Zainteresowany?</p>
            <p class="second">Porozmawiajmy!</p>
          </div>
          <div class="contact">
            <a href="tel:">tel: 784 932 890</a>
          </div>
          <div class="content-contact">
            <div class="social">
              <a href="https://www.instagram.com/fotobudkatwist360/">Instagram</a>

              <a href="https://www.instagram.com/fotobudkatwist360/"
                ><img src="../assets/svg/instagram.svg" alt="instagram link"
              /></a>
            </div>
            <div class="social">
              <a href="https://www.facebook.com/profile.php?id=100091000385194">Facebook</a>
              <a href="https://www.facebook.com/profile.php?id=100091000385194"
                ><img src="../assets/svg/facebook.svg" alt="Facebook link"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  .twist-wrapper {
    max-width: 100%;
    height: auto;
    padding: 25px 150px;
    background: rgb(238, 238, 238);
    background: -moz-linear-gradient(68deg, rgba(238, 238, 238, 1) 64%, rgba(255, 255, 255, 1) 100%);
    background: -webkit-linear-gradient(68deg, rgba(238, 238, 238, 1) 64%, rgba(255, 255, 255, 1) 100%);
    background: linear-gradient(68deg, rgba(238, 238, 238, 1) 64%, rgba(255, 255, 255, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#eeeeee",endColorstr="#ffffff",GradientType=1);
    color: #1d1d1d;
    a {
      transition: 0.3s !important;
      &:hover {
        color: #b2b2b2 !important;
      }
    }
    .twist-header {
      margin-top: 25px;
      text-align: center;
      color: #1d1d1d;
      font-weight: normal;
      text-transform: uppercase;
      font-size: 32px;
      padding-bottom: 10px;
      border-bottom: 2px solid #b5b5b5;
    }
    .twist-img {
      margin-top: 25px;
      object-position: 0 -10px;
      max-width: 800px;
      width: 100%;
    }
    .twist-content {
      align-items: center;
      justify-content: space-between;
      display: flex;
      max-width: 1600px;
      width: 100%;
      margin: 0 auto;
    }
    .contact {
      margin-top: 25px;
      text-align: center;
      font-weight: bolder;
      margin-right: 20px;
      letter-spacing: 1.1px;

      a {
        font-size: 20px;
        display: block;
        margin-top: 10px;
        color: #1d1d1d;
        text-decoration: none;
        padding-bottom: 5px;
        border-bottom: 1px solid #b5b5b5;
      }
    }
    .content-text {
      text-align: right;
      display: flex;
      font-size: 32px;
      .first {
        padding-bottom: 10px;
      }
      .second {
        padding-top: 10px;
        margin-left: 25px;
      }
    }
    .content-contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 25px;
      a {
        display: block;
      }
      .social {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 260px;
        height: 100px;
        a,
        p {
          font-weight: normal;
          font-size: 20px;
          text-decoration: none;
          text-transform: uppercase;
          margin-right: 20px;
        }
        img {
          cursor: pointer;
          width: 75px;
        }
      }
    }
  }
  .hero-image {
    position: relative;
    background-image: url('../assets/img/HeroImage.png');
    background-size: cover;
    background-position: 70% center;
    -webkit-box-shadow: inset 0px 14px 24px -6px rgba(0, 0, 0, 0.304);
    -moz-box-shadow: inset 0px 14px 24px -6px rgba(0, 0, 0, 0.304);
    box-shadow: inset 0px 14px 24px -6px rgba(0, 0, 0, 0.304);
    width: 100%;
    height: 85vh;
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
}
@media (max-width: 1650px) {
  .home {
    .twist-wrapper {
      padding: 25px 75px;
    }
  }
}
@media (max-width: 1470px) {
  .home {
    .twist-wrapper {
      padding: 25px;
    }
  }
}
@media (max-width: 1370px) {
  .home {
    .twist-wrapper {
      background: rgb(238, 238, 238);

      .twist-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .text-content-wrapper {
        margin-top: 100px;
      }
    }
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
      position: relative;
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
@media (max-width: 500px) {
  .home {
    .text-content-wrapper {
      width: 100%;
    }
    .twist-wrapper {
      padding: 25px 10px;
      .content-text {
        justify-content: center;
        flex-wrap: wrap;
        font-size: 24px;
        .first {
          margin-right: 100px;
        }
        .second {
          margin-left: 100px;
        }
      }
      .content-contact {
        width: 100%;
        .social {
          width: 210px;
          height: 75px;
          a,
          p {
            font-size: 16px;
            margin-right: 10px;
          }
          img {
            width: 65px;
          }
        }
      }
    }
  }
}
</style>
