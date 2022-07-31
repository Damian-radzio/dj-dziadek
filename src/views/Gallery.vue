<template>
  <ul class="images-wrapper">
    <div class="photograph-link" :class="{ hiddenNavbar: !this.showNavbar }">
      <div class="social-container">
        <div class="text"><p>Fotograf</p></div>

        <img src="../assets/svg/instagram.png" />
        <Facebook />
      </div>
    </div>
    <a
      class="image-wrapper"
      v-for="image in images"
      v-bind:key="image"
      :href="image.responsiveImage.webpSrcSet"
      data-lightbox="roadtrip"
    >
      <img
        class="img"
        :src="image.responsiveImage.webpSrcSet"
        aspect-ratio="1 "
        alt="img"
        lazy="false"
      />
    </a>
  </ul>
</template>

<script>
import axios from 'axios';
import Facebook from '../assets/svg/facebook-small.svg';
export default {
  name: 'Gallery-section',
  components: { Facebook },
  data() {
    return {
      images: [],
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll);

    const lightbox = document.createElement('script');
    lightbox.setAttribute('src', 'lightbox/lightbox-plus-jquery.min.js');
    document.head.appendChild(lightbox);
  },
  unmounted() {
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

    getPhotos() {
      axios
        .post(
          'https://graphql.datocms.com/',
          {
            query: `
        {
        allUploads(first: 100) {
    responsiveImage {
      src,
      webpSrcSet
    }
  }
        }`,
          },
          {
            headers: {
              authorization: `Bearer: ebd56168c699113d9671ac9266db48 `,
            },
          }
        )
        .then(data => (this.images = data.data.data.allUploads))
        .catch(err => err);
    },
  },
  created() {
    this.getPhotos();
    window.addEventListener('resize', this.onResize);
  },
};
</script>

<style lang="scss">
.photograph-link {
  position: fixed;
  width: 100%;
  background-color: white;
  top: 130px;
  z-index: 999;
  padding: 10px;

  .social-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 24px;
    padding-right: 100px;
    .text {
      background-color: #e5e5e5;
      width: 116px;
      height: 37px;
      text-align: center;
      line-height: 37px;
      border-radius: 18.5px;
      margin-right: 100px;
    }
    svg {
      margin-left: 26px;
    }
    img {
      width: 43px;
    }
  }
  transition: 0.3s ease-in;
}
.hiddenNavbar {
  padding: 10px;
  top: 85px;
  transition: 0.3s ease-out;
}
.images-wrapper {
  margin-top: 220px;
  display: flex;
  flex-wrap: wrap;

  .image-wrapper {
    height: 40vh;
    flex-grow: 1;
    list-style: none;

    .img {
      max-height: 100%;
      min-width: 100%;
      padding: 4px;
      object-fit: cover;
      vertical-align: bottom;
    }
  }
}
@media (max-width: 768px) {
  .photograph-link {
    padding: 10px;

    .social-container {
      padding: 12px 24px;
    }
  }
}
</style>
