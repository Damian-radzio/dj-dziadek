<template>
  <div class="vld-parent">
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />
  </div>

  <div id="reviews-wrapper" class="elfsight-app-de030aa4-f700-428f-9012-7bfadbd38fe1" async></div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
    Loading,
  },
  mounted() {
    const googleReviews = document.createElement('script');
    googleReviews.setAttribute('src', 'https://apps.elfsight.com/p/platform.js');
    document.head.appendChild(googleReviews);
    if (googleReviews.attributes.src !== '') {
      console.log('now');
    }
  },

  methods: {
    removeLoader() {
      console.log('siema');
      return (this.isLoading = false);
    },
  },
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
}
#reviews-wrapper {
  margin: 100px;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
