<template>
  <footer>
    <section class="social-container">
      <div class="social-tile">
        <a href="https://www.instagram.com/_djdziadek_/">
          <h2>Instagram</h2>
          <img src="@/assets/svg/instagram.png" />
        </a>
      </div>
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
      <div class="social-tile">
        <a href="https://www.facebook.com/Dj-wodzirej-S%C5%82awomir-Dziadek-106330881397763/">
          <h2>Facebook</h2>
          <img :src="Facebook" />
        </a>
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
  align-items: createBundleRenderer;
  background-color: #eeeeee;
  padding: 50px 0;
  section {
    text-align: center;
    width: 33%;
  }
  .social-container {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    .social-tile {
      h2 {
        font-size: 20px;
        font-weight: 400;
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
    align-items: center;
    text-align: center;
    h2 {
      text-align: left;
      margin-bottom: 0;
      padding: 0 0 24px 0;
    }
    .contact-data-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 45px;
      h2 {
        font-weight: 400;
        font-size: 20px;
        text-align: center;
      }
      p,
      a {
        color: black;
        padding-bottom: 25px;
      }
    }
  }
}
@media (max-width: 768px) {
  footer {
    flex-direction: column;
    width: 100%;
    padding: 50px 0px 0px 0px;
    padding-bottom: 50px;
    .social-container {
      flex-direction: column;
      align-items: center;
      width: 100%;
      .social-tile {
        h2 {
          font-size: 20px;
        }
        img {
          width: 70px;
        }
      }
    }

    section {
      width: 100%;
      margin-top: 0px;
      &.contact {
        display: flex;
        flex-direction: column;
        .contact-data-container {
          width: 100%;
          margin: 20px 0;
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

@media (max-width: 400px) {
  footer {
    .social-container {
      .social-tile {
        h2 {
          font-size: 18px;
          font-weight: 500;
        }
        img {
          width: 60px;
        }
      }
    }

    section {
      &.contact {
        .contact-data-container {
          width: 100%;
          padding-left: 0;
          h2 {
            text-align: center;
            font-weight: 400;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
