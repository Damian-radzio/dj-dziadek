<template>
  <div class="wrapper">
    <header class="section-header-text">
      <h2>Cieszę się że tu zajrzałeś.</h2>
      <p>
        Oznacza to że rozważasz skontaktowanie się ze mną w sprawie twojego przyjęcia, a ja wychodzę na przeciw aby Ci
        to ułatwić. Poniżej znajduje się formularz kontaktowy, który odpowiednio wypełniony zostanie do mnie
        bezpośrednio wysłany, a ja szybko będę mógł na niego odpowiedzieć. Jeśli jednak masz do mnie więcej pytań,
        skontaktuj się ze mną bezpośrednio.
      </p>
    </header>

    <section class="contact-form-wrapper">
      <h2>Formularz kontaktowy</h2>

      <form action="https://formsubmit.co/slawekdjdziadek@gmail.com" method="POST" class="contact-form">
        <input type="hidden" name="_template" value="table" id="formularz" />
        <input type="hidden" name="_next" value="https://djslawomirdziadek.pl/contact/sent" />
        <input type="hidden" name="_autoresponse" value="Otrzymałem twoją wiadomość, dziękuję!" />
        <input type="hidden" name="_subject" value="Nowa wiadomość, ze strony djdziadek!" />
        <input type="hidden" name="_captcha" value="false" />
        <form action="https://formsubmit.co/email" method="POST" />
        <input type="text" class="input" name="imie_nazwisko" placeholder="Imię i nazwisko *" required />
        <input type="email" class="input" name="email" placeholder="Email *" required />
        <input name="numer_tel" class="input" type="text" placeholder="Telefon *" required />
        <input name="lokalizacja_imprezy" class="input place" type="text" placeholder="Miejscowość" />
        <label for="temin-imprezy" class="label date">Wybierz termin imprezy</label>
        <input name="termin-imprezy" class="input" type="date" />
        <textarea name="wiadomosc" class="message input" type="text" placeholder="Wiadomość (opcjonalnie)" />

        <input class="submit" type="submit" value="Wyślij" />
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact-section',
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

<style lang="scss">
.wrapper {
  max-width: 1640px;
  margin: 0 auto;
  margin-top: 130px;
}
header {
  p {
    line-height: 33px;
  }
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
    margin-bottom: 48px;
    align-items: center;
    .message {
      resize: none;
      align-items: center;
    }

    .date {
      padding-bottom: 12px;
      min-width: 300px;
    }
    .input {
      min-width: 280px;
      width: 100%;
      outline: none;
      margin-bottom: 64px;
      border-style: none;
      min-height: 40px;
      background-color: #e5e5e5;
      border-radius: 29px;
      transition: 0.4s;
      height: 40px;
      padding: 0px 30px;
      font-weight: bolder;
      color: #1d1d1d;
      &::placeholder {
        color: #8a8a8a;
        opacity: 1;
      }
    }
    .place {
      margin-bottom: 48px;
    }
    .message {
      height: 100px;
      padding: 20px;
    }
    .submit {
      border-style: none;
      background-color: #1d1d1d;
      color: white;
      letter-spacing: 1.3px;
      align-self: flex-end;
      margin-top: 30px;
      width: 120px;
      height: 40px;
      border-radius: 25px;
      cursor: pointer;
      transition: 0.3s;
      font-size: 18px;
      &:hover {
        padding: 10px 46px;
      }
    }
  }
  .contact {
    text-align: center;
    position: relative;
    a {
      color: black;
    }
    .contact-data-container {
      h2 {
        margin-bottom: 0;
      }
    }

    .social-container {
      img {
        width: 20%;
      }
    }
  }
  text-align: center;
}
@media (max-width: 768px) {
  .section-header-text {
    padding: 50px;
    font-size: 16px;
    h2 {
      font-size: 22px;
    }
  }
  .contact-form-wrapper {
    h2 {
      margin-bottom: 48px;
      font-size: 20px;
      font-weight: 500;
    }
    .contact-form {
      .input {
        margin-bottom: 20px;
      }
      .submit {
        align-self: center;
      }
    }
  }
}
@media (max-width: 1024px) {
  .contact {
    display: flex;
    flex-direction: column;
    .contact-data-container {
      width: 100%;
      padding-left: 0;
      h2 {
        margin: 0;
        padding: 0 0 24px 0;
        text-align: center;
      }
      p,
      a {
        margin: 0 auto;
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
