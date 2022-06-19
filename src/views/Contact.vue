<template>
  <div class="wrapper">
    <header class="section-header-text">
      <h2>Cieszę się że tu zajrzałeś.</h2>
      Oznacza to że rozważasz skontaktowanie się ze mną w sprawie twojego przyjęcia, a ja wychodzę
      na przeciw aby Ci to ułatwić. Poniżej znajduje się formularz kontaktowy, który odpowiednio
      wypełniony zostanie do mnie bezpośrednio wysłany, a ja szybko będę mógł na niego odpowiedzieć.
      Jeśli jednak masz do mnie więcej pytań, skontaktuj się ze mną bezpośrednio.
    </header>

    <section class="contact-form-wrapper">
      <h2>Formularz kontaktowy</h2>

      <form
        action="https://formsubmit.co/slawekdjdziadek@gmail.com"
        method="POST"
        class="contact-form"
      >
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="http://localhost:3000/contact/sent" />
        <input type="hidden" name="_autoresponse" value="Otrzymałem twoją wiadomość, dziękuję!" />
        <input type="hidden" name="_subject" value="Nowa wiadomość, ze strony djdziadek!" />
        <input type="hidden" name="_captcha" value="false" />
        <form action="https://formsubmit.co/email" method="POST" />
        <input
          type="text"
          class="input"
          name="imie_nazwisko"
          placeholder="Imię i nazwisko *"
          required
        />
        <input type="email" class="input" name="email" placeholder="Email *" required />
        <input name="numer_tel" class="input" type="text" placeholder="Telefon *" required />
        <input name="lokalizacja_imprezy" class="input" type="text" placeholder="Miejscowość" />
        <input name="termin-imprezy" class="input" type="date" placeholder="Termin" />
        <input name="wiadomosc" class="message input" type="text" placeholder="Wiadomość" />
        <input
          name="skad_polecenie"
          class="input"
          type="text"
          placeholder="Skąd się o mnie dowiedziałeś"
        />
        <input class="submit" type="submit" value="Wyślij" />
      </form>
      <router-view />
    </section>
  </div>
</template>
<style lang="scss">
.wrapper {
  max-width: 1640px;
  margin: 0 auto;
}
.section-header-text {
  h2 {
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 40px;
  }
  font-weight: lighter;
  font-size: 24px;
  padding: 100px;
}
.contact-form-wrapper {
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    margin-bottom: 100px;
  }
  align-items: center;
  .contact-form {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 700px;
    justify-content: space-between;
    align-items: center;
    .message {
      resize: none;
      align-items: center;
      padding: 30px;
    }
    .input {
      min-width: 300px;
      width: 100%;
      outline: none;

      border-style: none;
      height: 95px;
      border-bottom: 1px solid black;
      transition: 0.4s;
      padding: 0px 10px;
      font-weight: bolder;
      color: #1d1d1d;
      &::placeholder {
        color: #8a8a8a;
        opacity: 1;
      }
    }
    .submit {
      border-style: none;
      background-color: #1d1d1d;
      color: white;
      letter-spacing: 1.3px;
      align-self: flex-end;
      margin-top: 80px;
      padding: 10px 40px;
      border-radius: 25px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        padding: 10px 46px;
      }
    }
  }
}
</style>
<script>
import Vuex from 'vuex';

export default {
  name: 'Contact',
  data() {
    return {
      inputsData: {
        name: '',
        email: '',
        phone: '',
        location: '',
        eventDate: '',
        message: '',
        reference: '',
      },
    };
  },
};
</script>
