<template>
  <div id="menu" :class="{ showNavBar: this.showNavbar, hideNavbar: !this.showNavbar }">
    <Menu />
  </div>
  <div class="children">
    <router-view />
  </div>
  <div id="footer">
    <Footer />
  </div>
</template>

<script>
import Menu from './components/menu/Menu.vue';
import Footer from './components/footer/Footer.vue';
export default {
  name: 'App',
  components: {
    Menu,
    Footer,
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },

  created() {
    window.addEventListener('resize', this.onResize);
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) return;
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) return;
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Brygada 1918', serif;
  position: relative;
}
.children {
  min-height: 100vh;
}
#menu {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  z-index: 100;
  transition: 0.3s ease-out;
}
#menu.showNavbar {
  top: 0px;
  transition: 0.3s ease-out;
}
#menu.hideNavbar {
  top: -200px;
  transition: 0.3s ease-in;
}

#footer {
  width: 100%;
  height: 2.5rem;
  z-index: -100;
}
</style>
