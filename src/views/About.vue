<template>
  <div class="about">
    <h1 class="about-me-title">About Me</h1>
    <div class="about-img">
      <img class="about-me" src="../assets/img/aboutme.svg" alt="About me">
    </div>

    <h1 class="about-title tc">I'm a Full Stack Web Developer</h1>

    <div class="about-description tc">
      <p>I specialize in HTML, CSS, and Javascript. Each site I develope is built with the user in mind, delivering a great user experiance and design, using the latest web technologies. Coding has become a passion of mine and I strive everyday to hone my craft and become the best developer I can be.</p>
    </div>

    <section class="skills">
      <div class="front-end skill">
        <img src="../assets/img/code.svg" alt>
        <h3>Front End Developer</h3>
        <p class="lang">Languages I Speak</p>
        <p class="langs">HTML, CSS, Javascript, SCSS</p>
        <p class="dev-tools">Dev Tools</p>
        <p v-for="tool in front" :key="tool" class="tool">{{ tool }}</p>
      </div>
      <div class="back-end skill">
        <img src="../assets/img/server.svg" alt>
        <h3>Back End Developer</h3>
        <p class="lang">Languages I Speak</p>
        <p class="langs">NodeJS</p>
        <p class="dev-tools">Dev Tools</p>
        <p v-for="tool in back" :key="tool" class="tool">{{ tool }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    front: ["jQuery", "Bootstrap", "Vuejs", "AngularJs", "ReactJs", "Webpack"],
    back: [
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Firebase/Firestore",
      "Socket.io"
    ]
  })
};
</script>

<style scoped>
.about-me-title {
  text-align: center;
  margin-bottom: -100px;
  margin-top: 70px;
  color: #4c4981;
}

.about-img {
  width: 600px;
  margin: 70px auto auto auto;
}

.about-me {
  width: 100%;
}

.about-title {
  margin: 40px auto;
  color: #4c4981;
}

.about-description {
  width: 700px;
  margin: 0 auto;
}

.about-description p {
  font-size: 1.3rem;
  line-height: 1.5;
  color: #4c4981;
}

.skills {
  display: flex;
  justify-content: center;
  width: 1000px;
  margin: 100px auto auto auto;
}

.skill {
  text-align: center;
  border-top: 1px solid #6c63ff;
  border-bottom: 1px solid #6c63ff;
  width: 700px;
  padding: 50px 0px;
  margin: 0 auto;
}

.front-end {
  border-left: 1px solid #6c63ff;
  border-right: 0.5px solid #6c63ff;
  border-radius: 10px 0px 0px 10px;
}

.back-end {
  border-left: 0.3px solid #6c63ff;
  border-right: 1px solid #6c63ff;
  border-radius: 0px 10px 10px 0px;
}

.skill h3 {
  margin: 20px auto 10px auto;
  color: #4c4981;
  font-size: 1.8rem;
}

.skill .lang {
  color: #6c63ff;
}

.skill .dev-tools {
  color: #6c63ff;
}

.lang,
.dev-tools {
  font-size: 1.5rem;
}

.lang,
.dev-tools,
.langs,
.tool {
  margin-bottom: 15px;
}

.skill .langs {
  font-size: 1.2rem;
  color: #4c4981;
}

.skill .tool {
  color: #4c4981;
  font-size: 1.2rem;
}

.skill img {
  width: 200px;
}

/* Media Queries */
@media only screen and (max-width: 1050px) {
  .skills {
    width: 800px;
  }
}

@media only screen and (max-width: 850px) {
  .about-img {
    width: 80%;
  }

  .skills {
    flex-direction: column;
    width: 100%;
  }

  .skill {
    width: 80%;
  }

  .front-end {
    border-left: 1px solid #6c63ff;
    border-right: 0.5px solid #6c63ff;
    border-radius: 10px 10px 0px 0px;
  }

  .back-end {
    border-left: 1px solid #6c63ff;
    border-right: 1px solid #6c63ff;
    border-top: 0.2px solid #6c63ff;
    border-radius: 0px 0px 10px 10px;
  }
}

@media only screen and (max-width: 800px) {
  .about-title {
    width: 80%;
  }

  .about-description {
    width: 80%;
  }
}
</style>



