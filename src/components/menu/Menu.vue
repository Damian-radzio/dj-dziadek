<template>
  <header class="header-container">
    <div class="icon-wrapper">
      <DjDziadekIcon />
    </div>
    <nav v-if="this.width >= 1240">
      <ul>
        <li><router-link class-active="active" to="/">Start</router-link></li>
        <li><router-link class-active="active" to="/about">O mnie</router-link></li>
        <li><router-link class-active="active" to="/gallery">Galeria</router-link></li>
        <li><router-link class-active="active" to="/reviews">Opinie</router-link></li>
        <li><router-link class-active="active" to="/contact">Kontakt</router-link></li>
      </ul>
    </nav>

    <div v-else class="hamburger-wrapper" v-on:click="openMobileMenu">
      <HamburgerBtn v-if="!this.isMobileMenuOpen" />
      <OpenedHamburgerBtn v-if="this.isMobileMenuOpen" />
    </div>
    <div class="mobile-menu" v-if="this.isMobileMenuOpen && this.width <= 1240">
      <nav>
        <ul>
          <li>
            <router-link class-active="active" to="/" v-on:click="this.isMobileMenuOpen = false"
              >Start</router-link
            >
          </li>
          <li>
            <router-link
              class-active="active"
              to="/about"
              v-on:click="methodsAfterMenuElementClick()"
              >O mnie</router-link
            >
          </li>
          <li>
            <router-link
              class-active="active"
              to="/gallery"
              v-on:click="methodsAfterMenuElementClick()"
              >Galeria</router-link
            >
          </li>
          <li>
            <router-link
              class-active="active"
              to="/reviews"
              v-on:click="methodsAfterMenuElementClick()"
              >Opinie</router-link
            >
          </li>
          <li>
            <router-link
              class-active="active"
              to="/contact"
              v-on:click="methodsAfterMenuElementClick()"
              >Kontakt</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import DjDziadekIcon from '../../assets/svg/dj-dziadek-logo.svg';
import HamburgerBtn from '../../assets/svg/hamburger.svg';
import OpenedHamburgerBtn from '../../assets/svg/opened-menu-hamburger.svg';
export default {
  name: 'Menu',
  components: { DjDziadekIcon, HamburgerBtn, OpenedHamburgerBtn },
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobileMenuOpen: false,
    };
  },
  created() {
    window.addEventListener('resize', this.onResize);
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize(e) {
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
  },
};
</script>

<style lang="scss">
.header-container {
  display: flex;
  align-items: center;
  display: flex;
  margin: 0 100px;
  margin-top: 12px;
  justify-content: space-between;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;

  .header-container--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }
  nav {
    width: 50%;
    min-width: 700px;
    ul {
      width: 100%;
      display: flex;
      width: 100%;
      max-width: 1200px;
      justify-content: space-between;

      li {
        list-style: none;
        padding: 5px 15px;
        min-width: 100px;
        text-align: center;
        a {
          font-weight: 600;
          font-size: 20px;
          text-decoration: none;
          color: #1d1d1d;
          font-weight: 400;
          &.router-link-exact-active {
            font-weight: 600;
          }
        }
      }
    }
  }
  .hamburger-wrapper {
    cursor: pointer;
  }

  .mobile-menu {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: auto;
    left: 0;
    top: 125px;
    background-color: #fff;
    nav {
      width: 100%;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        li {
          padding: 30px 48px;
          text-align: right;
        }
        margin-bottom: 46px;
      }
    }
  }
  transition: 0.2s;
}
.hiddenNavbar {
  transform: translateY(-100%);
}
@media (max-width: 1240px) {
  .header-container {
    margin: 12px 32px 0px 16px;
    nav {
      min-width: 280px;
    }
  }
}
</style>
