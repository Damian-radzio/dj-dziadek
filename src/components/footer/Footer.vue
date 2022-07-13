<template>
  <footer>
    <section class="social-container" v-if="this.width <= 1024">
      <div class="social-tile">
        <h2>Instagram</h2>
        <img src="../../assets/svg/instagram.png" />
      </div>
      <div class="social-tile">
        <h2>Facebook</h2>
        <Facebook />
      </div>
    </section>

    <section class="contact">
      <div class="contact-data-container">
        <h2>Kontakt</h2>
        <p>(+48) 555 555 555</p>
        <p v-if="this.width >= 1024">slawekdjdziadek@gmail.com</p>
        <router-link to="/contact" @click="scrollToTop()">formularz kontaktowy</router-link>
        <p v-if="this.width <= 1024">slawekdjdziadek@gmail.com</p>
      </div>
    </section>
  </footer>
</template>

<script>
import Facebook from '../../assets/svg/facebook.svg';
export default {
  name: 'Footer-component',
  components: { Facebook },
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
  align-items: center;
  justify-content: center;
  margin-top: 85px;
  section {
    text-align: center;
    width: 30%;
    height: 250px;
    h2 {
      margin-bottom: 20px;
    }
  }
  .social-container {
    h2 {
      margin: 0;
    }
    .social-tile {
      margin-bottom: 50px;
      svg {
        margin-top: 24px;
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
      padding-left: 150px;
      display: flex;
      flex-direction: column;
      p,
      a {
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
