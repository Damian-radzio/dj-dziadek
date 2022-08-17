<template>
  <div id="menu">
    <Menu />
  </div>
  <div class="children">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
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
  unmounted() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.onScroll);
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
  font-family: 'Brygada 1918', serif;
}
body {
  position: relative;
}
.children {
  min-height: 80vh;
}
#menu {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  z-index: 9999999999;
  transition: 0.3s ease-out;
}
#menu.showNavbar {
  top: 0px;
  transition: 0.2s;
  width: 100%;
}

#footer {
  width: 100%;
  z-index: -100;
}

.route-enter-from {
  opacity: 0.3;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>
