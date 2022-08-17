<template>
  <footer>
    <section class="social-container">
      <div class="social-tile">
        <a href="https://www.instagram.com/_djdziadek_/">
          <h2>Instagram</h2>
          <img src="@/assets/svg/instagram.png" />
        </a>
      </div>
      <div class="social-tile">
        <a href="https://www.facebook.com/Dj-wodzirej-S%C5%82awomir-Dziadek-106330881397763/">
          <h2>Facebook</h2>
          <img :src="Facebook" />
        </a>
      </div>
    </section>

    <section class="contact">
      <div class="contact-data-container">
        <h2>Kontakt</h2>
        <p><a href="tel:514-209-538">(+48) 514 209 538</a></p>
        <p v-if="this.width >= 1024">
          <a href="mailto:slawekdjdziadek@gmail.com">slawekdjdziadek@gmail.com</a>
        </p>
        <router-link to="/contact" @click="scrollToTop()">formularz kontaktowy</router-link>
        <p v-if="this.width <= 1024">
          <a href="mailto:slawekdjdziadek@gmail.com">slawekdjdziadek@gmail.com </a>
        </p>
      </div>
    </section>
  </footer>
</template>

<script>
import Facebook from '../../assets/svg/facebook.svg';
export default {
  name: 'Footer-component',
  setup() {
    return {
      Facebook,
    };
  },
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  created() {
    window.addEventListener('resize', this.onResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
    scrollToTop() {
      window.scrollTo(0, 1200);
    },
  },
};
</script>

<style lang="scss">
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eeeeee;
  padding: 150px 0px 110px 0px;
  section {
    text-align: center;
    width: 33%;
  }
  .social-container {
    display: flex;
    width: 75%;
    justify-content: space-around;
    align-items: flex-start;
    .social-tile {
      h2 {
        font-size: 20px;
      }
      a {
        color: black;
        text-decoration: none;
      }
      svg {
        margin-top: 24px;
        cursor: pointer;
      }
      img {
        margin-top: 24px;
        width: 80px;
      }
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    h2 {
      text-align: left;
      margin-bottom: 40px;
    }
    .contact-data-container {
      margin-right: 24px;
      padding-left: 150px;
      display: flex;
      flex-direction: column;
      p,
      a {
        color: black;
        text-decoration: none;
        padding-bottom: 25px;
        max-width: 250px;
        text-align: left;
      }
    }
  }
}
@media (max-width: 1024px) {
  footer {
    flex-direction: column;
    width: 100%;
    padding: 120px 0px 0px 0px;

    .social-container {
      flex-direction: column;
      align-items: center;
      height: 200px;
      width: 100%;
      .social-tile {
        margin-top: 48px;
        h2 {
          font-size: 18px;
        }
        img {
          width: 60px;
        }
      }
    }
    .contact {
      padding-top: 48px;
    }
    section {
      width: 100%;
      margin-top: 0px;
      &.contact {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        .contact-data-container {
          width: 100%;
          padding-left: 0;
          h2 {
            text-align: center;
          }
          p,
          a {
            margin: 0 auto;
            width: 100%;
            text-align: center;
          }
        }
      }
      &.facebook-container {
        padding: 0;
        svg {
          margin-top: 0px;
        }
      }
    }
  }
}
</style>
