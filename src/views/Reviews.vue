<template>
  <div id="reviews-wrapper" class="elfsight-app-de030aa4-f700-428f-9012-7bfadbd38fe1" async></div>
</template>

<script>
export default {
  name: 'Reviews-section',
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  mounted() {
    const googleReviews = document.createElement('script');
    googleReviews.setAttribute('src', 'https://apps.elfsight.com/p/platform.js');
    document.head.appendChild(googleReviews);
  },

  methods: {
    removeLoader() {
      return (this.isLoading = false);
    },
  },
};
</script>

<style lang="scss">
#reviews-wrapper {
  width: 82%;
  margin: 240px auto 0px auto;
  overflow: hidden;
}
@media (max-width: 768px) {
  #reviews-wrapper {
    margin-top: 120px;
  }
}
</style>
