<template>
  <header class="header-container">
    <div class="icon-wrapper">
      <DjDziadekIcon />
    </div>
    <nav>
      <ul>
        <li><router-link class-active="active" to="/">Start</router-link></li>
        <li><router-link class-active="active" to="/about">O mnie</router-link></li>
        <li><router-link class-active="active" to="/gallery">Galeria</router-link></li>
        <li><router-link class-active="active" to="/reviews">Opinie</router-link></li>
        <li><router-link class-active="active" to="/contact">Kontakt</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.header-container {
  display: flex;
  align-items: center;
  display: flex;

  justify-content: space-between;
  .icon-wrapper {
    margin-left: 100px;
  }
  nav {
    margin-right: 100px;
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
}
</style>

<script>
import DjDziadekIcon from '../../assets/svg/dj-dziadek-logo.svg';
export default {
  name: 'Menu',
  components: { DjDziadekIcon },
};
</script>
