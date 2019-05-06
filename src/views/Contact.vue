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
        <form action class="contact-form">
          <h1 class="form-title">Let's Get In Touch</h1>
          <div class="form">
            <input type="text" class="form-control" placeholder="Name">
            <input type="text" class="form-control" placeholder="Email">
            <textarea type="text" rows="3" class="form-control" placeholder="Message"></textarea>
            <button class="form-btn ripple" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #4c4981;
  border-radius: 5px;
  font-size: 1.1rem;
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

