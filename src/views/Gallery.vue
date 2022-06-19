<template>
  <ul class="images-wrapper">
    <a
      class="image-wrapper"
      v-for="image in images"
      v-bind:key="image"
      :href="image.responsiveImage.src"
      data-lightbox="roadtrip"
    >
      <img class="img" :src="image.responsiveImage.src" aspect-ratio="1 " alt="img" lazy="true" />
    </a>
  </ul>
</template>
<style lang="scss">
.images-wrapper {
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
</style>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    const lightbox = document.createElement('script');
    lightbox.setAttribute('src', 'lightbox/lightbox-plus-jquery.min.js');
    document.head.appendChild(lightbox);
  },
  methods: {
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
  },
};
</script>
