<template>
  <div class="about">
    <section class="about-general">
      <div class="text">
        <h2>Cześć, jestem Sławek!</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem
          ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
          dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit
          amet, consectetur lorem ipsum dolor sit amet, consectetur.
        </p>
      </div>
      <img src="../assets/img/slawek.jpeg" alt="Zdięcie wodzireja" />
    </section>
    <section class="announcers-wrapper">
      <h2>Imprezę obsługuje Dj Dziadek i jego konferansjer.</h2>
      <div class="announcers">
        <div>
          <div class="img-wrapper">
            <img src="../assets/img/DamianR.jpeg" alt="zdięcie konferansjera" />
          </div>
          <p>Konferansjer<span>Damian Radecki</span></p>
        </div>
        <div class="middle">
          <div class="img-wrapper">
            <img src="../assets/img/SlawekD.jpeg" alt="Zdięcia wodzireja" />
          </div>
          <p>Wodzirej<span>Sławomir Dziadek</span></p>
        </div>
        <div>
          <div class="img-wrapper">
            <img src="../assets/img/SzymonG.jpeg" alt="zdięcie konferansjera" />
          </div>
          <p>Konferansjer<span>Szymon Gatner</span></p>
        </div>
      </div>
    </section>
    <section class="announcers-wrapper coworkers-wrapper">
      <h2>Współpracuję z:</h2>
      <div class="announcers coworkers">
        <div>
          <div class="img-wrapper">
            <img src="../assets/img/MartynaS.jpeg" alt="zdięcie fotografa" />
          </div>
          <p>Fotograf<span>Martyna Skrond</span></p>
        </div>

        <div>
          <div class="img-wrapper">
            <img src="../assets/img/MartynaS.jpeg" alt="zdięcie skrzypaczki" />
          </div>

          <p>Skrzypaczka<span>Anna Nowak</span></p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.about {
  margin-top: 60px;
  .about-general {
    display: flex;
    justify-content: space-around;
    .text {
      width: 50%;
      padding-left: 120px;
      h2 {
        font-weight: 600;
        margin-bottom: 20px;
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
    margin: 100px auto;
    h2 {
      margin-bottom: 135px;
    }
    .announcers {
      margin: 0 auto;
      display: flex;
      width: 80%;
      justify-content: space-around;
      align-items: center;
      height: 450px;
      p {
        padding-top: 14px;
        font-weight: 600;
        font-size: 24px;
        span {
          font-size: 20px;
          display: block;
          padding-top: 16px;
          font-weight: 300;
        }
      }
      .middle {
        align-self: flex-start;
      }
      .img-wrapper {
        margin: 0 30px;
        width: 260px;
        height: 260px;
        border-radius: 50%;
        overflow: hidden;
        background-color: grey;
        img {
          width: 100%;
        }
      }
    }
  }
  .coworkers-wrapper {
    margin: 50px auto;
    h2 {
      margin-bottom: 30px;
    }
    .coworkers {
      .img-wrapper {
        img {
          width: 130%;
          transform: translate(-40px, -20px); 
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
