<template>
  <div class="about">
    <section class="about-general">
      <div class="text">
        <h2>Cześć, jestem Sławek!</h2>
        <p>
          Od lat dokładam wszelkich starań, by każda poprowadzona przeze mnie impreza stała się
          najlepszym wspomnieniem moich klientów. Konsola od zawsze była moim hobby, dlatego mimo
          pracy na etacie postanowiłem podążać za marzeniami i spełniać się w tym co kocham. Tym
          sposobem, jestem częścią tej branży od 8 lat i nie zamierzam zwalniać a przeciwnie,
          dopiero nabieram rozpędu.
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

<style lang="scss">
.about {
  max-width: 1640px;
  margin: 0 auto;
  margin-top: 60px;
  .about-general {
    margin-top: 150px;
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

      width: 26%;
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
    img {
      width: 25%;
      min-width: 350px;
    }
  }
  .announcers-wrapper {
    text-align: center;
    width: 100%;
    margin: 120px auto;
    h2 {
      margin-bottom: 80px;
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
        background-color: #1d1d1d30;
        position: relative;
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
</style>
<script>
export default {
  name: 'About',
};
</script>
