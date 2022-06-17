<template>
  <footer>
    <section class="facebook-container">
      <h2>Facebook</h2>
      <Facebook />
    </section>
    <section>
      <h2>Instagram</h2>
      <div class="photos">
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
      </div>
    </section>
    <section class="contact">
      <h2>Kontakt</h2>
      <div class="contact-data-container">
        <p>(+48) 555 555 555</p>
        <p>djslawekdziadek@gmail.com</p>
        <p>formularz kontaktowy</p>
      </div>
    </section>
  </footer>
</template>

<style lang="scss">
footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 85px;
  section {
    text-align: center;
    width: 30%;
    height: 250px;
    h2 {
      margin-bottom: 20px;
    }
  }
  .facebook-container {
    svg {
      margin-top: 40px;
    }
  }
  .photos {
    display: flex;
    max-width: 310px;
    flex-wrap: wrap;
    margin: 0 auto;
    text-align: center;
    justify-content: space-between;
    align-items: space-around;
    height: 210px;
    margin-top: 40px;
    .photo {
      width: 100px;
      height: 100px;
      background-color: grey;
    }
  }
  .contact {
    display: flex;
    flex-direction: column;
    .contact-data-container {
      margin-top: 35px;
      padding-left: 150px;
      p {
        padding-bottom: 25px;
        max-width: 250px;
        text-align: left;
      }
    }
  }
}
</style>

<script>
import Facebook from '../../assets/svg/facebook.svg';
export default {
  name: 'Menu',
  components: { Facebook },
};
</script>
