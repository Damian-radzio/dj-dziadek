<template>
  <ul class="images-wrapper">
    <div class="photograph-link" :class="{ hiddenNavbar: !this.showNavbar }">
      <div class="social-container">
        <div class="text"><p>Fotograf</p></div>
        <div>
          <a href="instagram.com/photo_martynek/">
            <img src="../assets/svg/instagram.png" />
          </a>
          <a href="https://www.facebook.com/Fotografia-Skrond-Martyna-103140005265426">
            <img :src="Facebook" />
          </a>
        </div>
      </div>
    </div>
    <div class="images-wrapper" :class="{ lessFromTop: !this.showNavbar }">
      <a
        class="image-wrapper"
        v-for="image in images"
        v-bind:key="image"
        :href="image.responsiveImage.src"
        data-lightbox="roadtrip"
      >
        <img class="img" :src="image.responsiveImage.src" aspect-ratio="1 " alt="img" lazy="true" />
      </a>
    </div>
  </ul>
</template>

<script>
import axios from 'axios';
import Facebook from '../assets/svg/facebook-small.svg';

export default {
  name: 'Gallery-section',
  setup() {
    return {
      Facebook,
    };
  },
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
      src
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
  z-index: 99;
  padding: 10px;

  .social-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 0px;
    .text {
      background-color: #e5e5e5;
      width: 116px;
      height: 37px;
      text-align: center;
      line-height: 37px;
      border-radius: 18.5px;
      margin: 0 100px 0 80px;
    }

    img {
      width: 43px;
    }
    a {
      margin-right: 12px;
    }
  }
  transition: 0.2s ease;
}
.hiddenNavbar {
  top: 85px;
  transition: 0.3s ease;
}
.images-wrapper {
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .image-wrapper {
    height: 25vh;
    width: auto;
    flex-grow: 1;
    list-style: none;

    .img {
      height: 100%;
      width: 100%;
      max-width: 500;
      padding: 4px;
      object-fit: cover;
      vertical-align: bottom;
    }
  }
  transition: 0.2s;
}
.lessFromTop {
  margin-top: 0;
}
@media (max-width: 768px) {
  .photograph-link {
    padding: 10px;
    top: 85px;

    .social-container {
      justify-content: space-between;
      padding: 12px 24px;
      .text {
        background-color: #e5e5e5;
        width: 116px;
        height: 37px;
        text-align: center;
        line-height: 37px;
        border-radius: 18.5px;
        margin: 0;
      }

      img {
        width: 43px;
      }
      a {
        margin-right: 0;
      }
    }
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
