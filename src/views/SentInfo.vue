<template>
  <section class="sent-info-wrapper">
    <router-link to="/contact">
      <div class="close-icon">
        <CloseIcon />
      </div>
    </router-link>
    <h2>
      Twoja wiadomość została wysłana!
      <span>W najbliszym czasie oczekuj odpowiedzi na swoim e-mailu.</span>
    </h2>
  </section>
</template>
<style lang="scss">
.sent-info-wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  width: 817px;
  height: 455px;
  background-color: rgba(0, 0, 0, 0.86);

  h2 {
    text-align: center;
    font-size: 38px;
    color: white;
    padding: 0 110px;
    span {
      display: block;
      padding-top: 60px;
      font-weight: 400;
      font-size: 28px;
    }
  }

  .close-icon {
    position: absolute;
    top: 0;
    right: 5px;
    padding: 10px;
    width: 5%;
  }
}
</style>
<script>
import CloseIcon from '../assets/svg/close-icon-x.svg';

export default {
  name: 'SentInfo',
  components: { CloseIcon },
};
</script>
