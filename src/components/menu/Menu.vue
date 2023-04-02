<template>
  <header class="header-container">
    <div class="icon-wrapper">
      <img :src="DjDziadekIcon" alt="logo" />
    </div>
    <nav v-if="this.width >= 768">
      <ul>
        <li><router-link class-active="active" to="/">Start</router-link></li>
        <li><router-link class-active="active" to="/about">O mnie</router-link></li>
        <li><router-link class-active="active" to="/gallery">Galeria</router-link></li>
        <li><router-link class-active="active" to="/reviews">Opinie</router-link></li>
        <li><router-link class-active="active" to="/contact">Kontakt</router-link></li>
      </ul>
    </nav>

    <div v-else class="hamburger-wrapper" v-on:click="openMobileMenu">
      <img :src="HamburgerBtn" v-if="!this.isMobileMenuOpen" :click="(this.menuMobileOpen = true)" />
      <img :src="OpenedHamburgerBtn" v-if="this.isMobileMenuOpen" :click="(this.menuMobileOpen = false)" />
    </div>
    <div
      v-if="this.width < 768"
      class="mobile-menu-wrapper"
      :class="{ open: this.isMobileMenuOpen, close: !this.isMobileMenuOpen }"
    >
      <div class="mobile-menu">
        <section class="social-container">
          <div class="social-tile">
            <a href="https://www.instagram.com/_djdziadek_/">
              <img src="../../assets/svg/instagram.png" />
            </a>
          </div>
          <div class="social-tile">
            <a href="https://www.facebook.com/Dj-wodzirej-S%C5%82awomir-Dziadek-106330881397763/">
              <img :src="Facebook" />
            </a>
          </div>
        </section>
        <nav>
          <ul>
            <li>
              <router-link class-active="active" to="/" v-on:click="this.isMobileMenuOpen = false">Start</router-link>
            </li>
            <li>
              <router-link class-active="active" to="/about" v-on:click="methodsAfterMenuElementClick()"
                >O mnie</router-link
              >
            </li>
            <li>
              <router-link class-active="active" to="/gallery" v-on:click="methodsAfterMenuElementClick()"
                >Galeria</router-link
              >
            </li>
            <li>
              <router-link class-active="active" to="/reviews" v-on:click="methodsAfterMenuElementClick()"
                >Opinie</router-link
              >
            </li>
            <li>
              <router-link class-active="active" to="/contact" v-on:click="methodsAfterMenuElementClick()"
                >Kontakt</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import DjDziadekIcon from '@/assets/svg/dj-dziadek-logo.svg';
import HamburgerBtn from '../../assets/svg/hamburger.svg';
import OpenedHamburgerBtn from '../../assets/svg/opened-menu-hamburger.svg';
import Facebook from '../../assets/svg/facebook.svg';

export default {
  name: 'Menu-component',
  setup() {
    return {
      DjDziadekIcon,
      HamburgerBtn,
      OpenedHamburgerBtn,
      Facebook,
    };
  },
  props: ['showNavbar'],
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobileMenuOpen: false,
      isOpen: false,
    };
  },
  created() {
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.onScroll);
  },

  unmounted() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
    openMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    methodsAfterMenuElementClick() {
      this.isMobileMenuOpen = false;
      this.scrollToTop();
    },
    onScroll() {
      const navBar = document.querySelector('.header-container');
      if (window.scrollY > 50) {
        navBar.classList.add('active');
      } else {
        navBar.classList.remove('active');
      }
    },
  },
};
</script>

<style lang="scss">
.header-container {
  display: flex;
  align-items: center;
  margin: 0 45px 0 100px;
  margin-top: 5px;
  height: 120px;
  justify-content: space-between;

  transform: translate3d(0, 0, 0);
  transition: 0.3s height ease-out;

  .header-container--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }
  nav {
    margin-left: 0;
    display: flex;
    ul {
      width: 100%;
      display: flex;
      min-width: 600px;
      max-width: 1200px;
      justify-content: space-between;

      li {
        list-style: none;
        width: 100%;
        width: 20%;
        text-align: center;
        a {
          font-weight: 600;
          font-size: 20px;
          text-decoration: none;
          color: #1d1d1d;
          font-weight: 400;
          padding: 20px 0;

          &.router-link-exact-active {
            font-weight: 600;
          }
        }
      }
    }
  }
  .hamburger-wrapper {
    cursor: pointer;
    transition: 0.4s;
  }
  .mobile-menu-wrapper {
    position: fixed;
    width: 100%;
    top: 85px;
    left: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    .mobile-menu {
      display: flex;
      z-index: 9999;
      width: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      background-color: #fff;
      .social-container {
        position: absolute;
        bottom: 30px;
        left: 25px;
        display: flex;
        width: 200px;
        .social-tile {
          img {
            width: 50px;
          }
        }
      }
      nav {
        width: 100%;
        ul {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          li {
            text-align: right;
            padding: 20px 5px 20px 15px;
            margin-right: 20px;
          }
          margin-bottom: 30px;
        }
      }
      transition: 0.3s;
    }
    transition: 0.4s;
  }
  .open {
    animation: open 0.4s both;
  }
  .close {
    animation: close 0.4s both;
  }
  .showMobileMenu {
    transition: 0.3s;
    top: 125px;
  }
}
.active {
  transition: 0.4s;
}
.hiddenNavbar {
  transform: translateY(-100%);
}

@media (max-width: 1024px) {
  .header-container {
    padding: 0px 24px;
    margin: 0;
    nav {
      min-width: 200px;
    }
  }
}
@media (max-width: 768px) {
  .header-container {
    height: 85px;
    .icon-wrapper {
      img {
        width: 80px;
      }
    }
    .hamburger-wrapper {
      img {
        width: 30px;
      }
    }
    .mobile-menu {
      nav {
        ul {
          min-width: auto;
          li {
            padding: 24px;
          }
        }
      }
    }
  }
}
@media (max-width: 280px) {
  .header-container {
    .mobile-menu {
      .social-container {
        flex-direction: column;
      }
    }
  }
}
@keyframes open {
  from {
    height: 0vh;
  }
  to {
    height: 100vh;
  }
}
@keyframes close {
  from {
    height: 100vh;
  }
  to {
    height: 0vh;
  }
}
</style>
