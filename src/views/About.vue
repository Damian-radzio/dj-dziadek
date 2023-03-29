<template>
  <div class="about">
    <section class="about-general">
      <div class="text" :class="{ active: this.mounted }">
        <h2>Cześć, jestem Sławek!</h2>
        <p>
          Od lat dokładam wszelkich starań, by każda poprowadzona przeze mnie impreza stała się najlepszym wspomnieniem
          moich klientów. Konsola od zawsze była moim hobby, dlatego mimo pracy na etacie postanowiłem podążać za
          marzeniami i spełniać się w tym co kocham. Tym sposobem, jestem częścią tej branży od
          {{ this.getExperienceDate() }} lat i nie zamierzam zwalniać a przeciwnie, dopiero nabieram rozpędu.
        </p>
      </div>
      <div class="about-me-image"></div>
    </section>
    <section class="announcers-wrapper">
      <h2>Imprezę obsługuje Dj Dziadek i jego konferansjer.</h2>
      <div class="announcers">
        <div>
          <div class="img-wrapper">
            <img src="../assets/img/SlawekD.png" alt="Zdięcia wodzireja" />
            <p class="name">Wodzirej<span>Sławomir Dziadek</span></p>
          </div>
        </div>

        <div>
          <div class="img-wrapper">
            <img src="../assets/img/DamianR.png" alt="zdięcie konferansjera" />
            <p class="name">Konferansjer<span>Damian Radecki</span></p>
          </div>
        </div>
      </div>
    </section>
    <section class="announcers-wrapper coworkers-wrapper">
      <h2>Współpracuję z:</h2>
      <div class="announcers coworkers">
        <div>
          <div class="img-wrapper">
            <img src="../assets/img/MartynaS.png" alt="zdięcie fotografa" />
            <p class="name">Fotograf<span>Martyna Skrond</span></p>
          </div>
        </div>

        <div>
          <div class="img-wrapper">
            <img src="../assets/img/MarlenaK.png" alt="zdięcie skrzypaczki" />
            <p class="name">Skrzypaczka<span>Marlena Król</span></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About-section',
  mounted() {
    this.mounted = true;
  },
  data() {
    return {
      mounted: false,
    };
  },
  methods: {
    getExperienceDate() {
      const date = new Date();
      const year = date.getFullYear();
      return year - 2014;
    },
  },
  
};
</script>

<style lang="scss">
.about {
  max-width: 1640px;
  margin: 0 auto;
  .about-general {
    margin: 240px 100px 0px 100px;

    display: flex;
    justify-content: space-around;
    .about-me-image {
      width: 511px;
      height: 700px;
      background-image: url('../assets/img/slawek.jpeg');
      overflow: hidden;
      background-image: cover;
      background-size: 100%;
    }
    .text {
      font-family: 'Brygada 1918';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 45px;
      color: #000000;
      width: 40%;
      opacity: 0.4;
      transform: translate(-40px, -5px);
      transition: 0.3s ease-out;
      h2 {
        font-weight: 600;
        margin-bottom: 50px;
        font-size: 28px;
      }
      p {
        font-size: 24px;
        font-weight: 400;
      }
    }
    .text.active {
      opacity: 1;
    }
    img {
      width: 20%;
      min-width: 350px;
    }
  }
  .announcers-wrapper {
    text-align: center;
    width: 100%;
    margin: 0px auto;
    h2 {
      margin-bottom: 80px;
      padding-top: 64px;
    }
    .announcers {
      margin: 0 auto;
      display: flex;
      width: 80%;
      justify-content: space-around;
      align-items: center;
      height: 450px;
      .name {
        width: 100%;
        color: white;
        font-weight: 500;
        font-size: 24px;
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translate(-50%);
        span {
          font-size: 20px;
          display: block;
          font-weight: 400;
        }
      }

      .img-wrapper {
        margin: 0 30px;
        width: 303px;
        height: 303px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #1d1d1d35;
        position: relative;
        box-shadow: 5px 10px 25px 3px #00000025;
        img {
          position: absolute;
          z-index: -1;
          left: 0;
          width: 100%;
        }
      }
    }
  }
  .coworkers-wrapper {
    h2 {
      margin-bottom: 80px;
    }
    .coworkers {
      .img-wrapper {
        background-color: #1d1d1d40;

        img {
          width: 100%;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .about {
    .about-general {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .text {
        width: 100%;
        padding: 48px;
      }
    }
    .announcers-wrapper {
      .announcers {
        height: auto;
        .img-wrapper {
          margin-bottom: 75px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    overflow: hidden;
    .about-general {
      margin: 75px auto 0 auto;
      .text {
        width: 100%;
        margin-left: 40px;
        h2 {
          font-size: 24px;
          margin-bottom: 0;
          font-weight: 600;
        }
        p {
          margin-top: 20px;
          line-height: 1.8;
          font-size: 18px;
          font-weight: 300;
        }
        width: 100%;
      }
      .about-me-image {
        margin-top: 15px;
        width: 100%;
        height: 600px;
      }
    }
    .announcers-wrapper {
      h2 {
        font-weight: 500;
        width: 80%;
        margin: 24px auto;
      }
      .announcers {
        align-items: center;
        div{
          height: 200px;
          display: flex;
          align-items: center;
        }
        .img-wrapper {
          width: 156px;
          height: 156px;
          margin-bottom: 0;
          p {
            bottom: 20px;
            font-size: 14px;
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
    .coworkers-wrapper {
      h2 {
        margin-bottom: 60px;
        font-weight: 500;
        margin: 24px auto;
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 520px) {
    .announcers-wrapper {
      .announcers {
        height: auto;
        flex-direction: column;
        .img-wrapper {
          margin-bottom: 75px;
        }
      }
    }
  .about {
    .about-general {
      .about-me-image {
        height: 500px;
        min-width: 400px;
      }
    }
  }
}
</style>
