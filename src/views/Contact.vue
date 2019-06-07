<template>
  <div class="contact">
    <h1 class="title">Dont be a stranger, Just say hello</h1>
    <p
      class="subtitle"
    >Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of.</p>
    <div class="contact-container">
      <div class="contact-description">
        <img src="../assets/img/calling.svg" alt="Contact Me">
      </div>

      <div class="form">
        <form class="contact-form" @submit.prevent="send">
          <h1 class="form-title">Let's Get In Touch</h1>
          <div class="error-message" v-if="error !== '' && !msg">
            <p>{{ error }}</p>
            <span @click="clearErrMsg">
              <i class="far fa-times-circle"></i>
            </span>
          </div>
          <div class="form">
            <div class="form-control">
              <input type="text" class="form-input" placeholder="Full Name" v-model="form.name">
            </div>
            <div class="form-control">
              <input
                type="email"
                class="form-input"
                placeholder="Email Address"
                v-model="form.email"
              >
            </div>
            <div class="form-control">
              <textarea
                type="text"
                rows="3"
                class="form-input"
                placeholder="Message..."
                v-model="form.message"
              ></textarea>
            </div>
            <button class="form-btn ripple" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>

    <div id="snackbar" ref="snackbar">
      <h4>Message Sent!</h4>
      <h4>Thank You!</h4>
    </div>
  </div>
</template>

<script>
import { sendEmail } from "../utils/utils";

export default {
  data: () => ({
    form: {
      name: "",
      email: "",
      message: ""
    },
    error: "",
    msg: false
  }),
  methods: {
    clearForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
    isEmailValid(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    isFormValid({ name, email, message }) {
      if (name !== "" && email !== "" && message !== "") {
        if (this.isEmailValid(email)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    send() {
      if (this.isFormValid(this.form)) {
        sendEmail(this.form)
          .then(res => {
            if (res.data) {
              this.showSnackbar();
              this.clearForm();
            }
          })
          .catch(console.log());
      } else {
        this.msg = false;
        this.error = "All fields are required to send a message";
      }
    },
    clearErrMsg() {
      this.msg = true;
    },
    showSnackbar() {
      // Get the snackbar DIV
      const snackbar = this.$refs.snackbar;
      // Add the "show" class to DIV
      snackbar.className = "show";
      // After 3 seconds, remove the show class from DIV
      setTimeout(
        () => (snackbar.className = snackbar.className.replace("show", "")),
        3000
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px auto;
}

.title,
.subtitle {
  text-align: center;
  color: #4c4981;
}

.title {
  margin-top: 70px;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.3rem;
  width: 550px;
  margin: 0 auto;
  line-height: 1.5;
}

.contact-description img {
  width: 700px;
}

.contact-form {
  width: 500px;
  display: flex;
  flex-direction: column;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-title {
  font-size: 2rem;
  color: #4c4981;
}

.form-control {
  margin-bottom: 20px;
}

.form-input {
  padding: 10px;
  border: 1px solid #4c4981;
  border-radius: 5px;
  font-size: 1.1rem;
  width: 100%;
}

.input-error {
  border: 1px solid #e96060;
}

.error-message {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f70909;
  padding: 20px;
  border: 1px solid #f70909;
  border-radius: 5px;
  margin-top: 10px;
}

.error-message span {
  font-size: 1.2rem;
  cursor: pointer;
}

.form-control:first-child {
  margin-top: 20px;
}

.form-btn {
  padding: 6px;
  background: #4c4981;
  color: #fff;
  border: 1px solid #4c4981;
  font-size: 1.2rem;
  border-radius: 50px;
  transition: 0.3s;
  cursor: pointer;
}

.form-btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #34a853;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@media only screen and (min-width: 1482px) {
  .contact-container {
    width: 1400px;
  }
}

@media only screen and (max-width: 1482px) {
  .contact-container {
    justify-content: space-around;
  }

  .contact-description img {
    width: 500px;
  }
}

@media only screen and (max-width: 1100px) {
  .contact-form {
    width: 400px;
  }
}

@media only screen and (max-width: 1000px) {
  .contact-container {
    flex-direction: column;
  }

  .contact-description {
    margin-bottom: 70px;
    text-align: center;
  }

  .form {
    width: 80%;
    margin: 0 auto;
  }

  .contact-form {
    width: 100%;
  }

  .form-title {
    text-align: center;
  }
}

@media only screen and (max-width: 650px) {
  .title,
  .subtitle {
    width: 90%;
  }

  .title {
    margin: 70px auto 20px auto;
    line-height: 1.5;
  }
}

@media only screen and (max-width: 600px) {
  .contact-description img {
    width: 90%;
  }

  .form {
    width: 90%;
  }
}
</style>

