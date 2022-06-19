<template>
  <Menu />
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
#footer {
  width: 100%;
  height: 2.5rem;
  z-index: -100;
}
</style>
