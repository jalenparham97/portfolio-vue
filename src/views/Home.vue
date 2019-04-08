<template>
  <section class="home">
    <div class="fullvh">
      <header class="hero">
        <div class="hero-content">
          <h1>Full Stack Web Developer</h1>
          <h3>I create Web Applications using the latest technologies the web has to offer.</h3>
          <div class="hero-actions">
            <button class="action-btn ripple">Hire Me</button>
            <button class="action-btn ripple">Contact</button>
          </div>
        </div>

        <div class="hero-image">
          <img src="../assets/img/coding.svg" alt="Vector image of a person coding on a computer">
        </div>
      </header>
    </div>

    <main>
      <section class="about">
        <div class="about-container">
          <h1>Hi, I'm Jalen. Nice to meet you.</h1>
          <p>Since embarking on my journey to learn web development, it has become a passion of mine. I've had the opportunity to work and collaborate with very talented people to create awesome applications. I'm naturally curious, a confident team player, and always working to improve my skills.</p>
        </div>
      </section>

      <section class="skills">
        <h1>What Can I Do?</h1>

        <div class="skills-container">
          <div class="skill">
            <img src="../assets/img/design.svg" alt="Html, CSS, Javascript">
            <h2>Design</h2>
            <p>My designs are beautiful and made to deliver compelling apps, and intuitive user interfaces.</p>
          </div>
          <div class="skill">
            <img src="../assets/img/front.svg" alt="Html, CSS, Javascript">
            <h2>Front-end Development</h2>
            <p>I love bringing ideas to life in the browser with impactfull and stunning user experiances.</p>
          </div>
          <div class="skill last-skill">
            <img src="../assets/img/back.svg" alt="Html, CSS, Javascript">
            <h2>Back-end Development</h2>
            <p>I create fast and secure web applications using the latest backend technologies available.</p>
          </div>
        </div>
      </section>

      <section class="work">
        <h1>My Work</h1>
        <div class="work-contact">
          <h2>Like what you see?</h2>
          <button class="ripple">Let's Talk</button>
        </div>

        <div class="work-container">
          <div class="project border">
            <img src="../assets/img/newscycle.jpg" alt="NewsCycle, get your news on a cycle">
            <h3 class="title">NewsCycle</h3>
            <p>A news application where users can Login and get up to date news, save articles to their personal feed, comment and like on news articles, and search for their favorite news outlets.</p>
            <div class="card-action-btns">
              <button class="card-action-btn ripple">Source Code</button>
              <button class="card-action-btn ripple">Visit Site</button>
            </div>
          </div>
          <div class="project border">
            <img src="../assets/img/newscycle.jpg" alt="NewsCycle, get your news on a cycle">
            <h3 class="title">NewsCycle</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, ipsum id! Laborum similique veritatis eligendi.</p>
            <div class="card-action-btns">
              <button class="card-action-btn ripple">Source Code</button>
              <button class="card-action-btn ripple">Visit Site</button>
            </div>
          </div>
          <div class="project border">
            <img src="../assets/img/newscycle.jpg" alt="NewsCycle, get your news on a cycle">
            <h3 class="title">NewsCycle</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, ipsum id! Laborum similique veritatis eligendi.</p>

            <div class="card-action-btns">
              <button class="card-action-btn ripple">Source Code</button>
              <button class="card-action-btn ripple">Visit Site</button>
            </div>
          </div>
        </div>
      </section>

      <section class="contact">
        <div class="contact-container">
          <img src="../assets/img/calling.svg" alt="Let's get in touch" class="contact-img">
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
      </section>
    </main>
  </section>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  })
};
</script>


<style scoped>
/* Heading */
.fullvh {
  height: 85vh;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 80vh;
  margin: 0 auto;
}

.hero .hero-content h1 {
  font-size: 2rem;
  color: #4c4981;
  margin-bottom: 20px;
}

.hero-content h3 {
  font-size: 1.2rem;
  color: #4c4981;
  line-height: 1.5;
  width: 400px;
}

.hero-image {
  width: 700px;
  margin-top: 100px;
}

.hero-image img {
  width: 100%;
}

.hero-actions {
  margin: 40px auto auto auto;
}

.action-btn {
  padding: 0.8em 1.5em;
  font-size: 1.2rem;
  background: #6d63ff;
  color: #fff;
  border: 1px solid #6d63ff;
  border-radius: 40px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
}

.action-btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.action-btn:first-child {
  margin-right: 20px;
}

.action-btn:last-child {
  background: #fff;
  color: #4c4881;
}

.action-btn:last-child:hover {
  background: #4c4881;
  color: #fff;
  border: 1px solid #4c4881;
}

/* Main Content */
main {
  margin-top: 150px;
}

/* About Section */
.about {
  /* padding: 2em auto; */
  padding: 7em 0;
  background: #6c63ff;
}

.about-container {
  /* width: 90%; */
  width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}

.about-container h1 {
  font-size: 1.7rem;
  margin-bottom: 20px;
}

.about-container p {
  font-size: 1.5rem;
  line-height: 1.5;
}

/* Skills Section */
.skills {
  padding: 7em 2em;
  margin: 50px 0px 50px 0px;
}

.skills h1,
.work h1 {
  text-align: center;
  font-size: 2rem;
  color: #4c4881;
}

.skills-container {
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
}

.skill {
  text-align: center;
}

.skill img {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.skill h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #6c63ff;
}

.skill p {
  font-size: 1.5rem;
  width: 400px;
  line-height: 1.5;
  color: #4c4881;
}

/* Work Section */
.work {
  margin-bottom: 70px;
}

.work-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.work-contact h2 {
  font-size: 1.5rem;
  color: #6c63ff;
  margin: 0px 10px;
}

.work-contact button {
  margin: 0px 10px;
  font-size: 1.2rem;
  color: #fff;
  background: #4c4881;
  padding: 0.3em 0.8em;
  border: 1px solid #4c4881;
  border-radius: 20px;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
}

.work-contact button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.work-container {
  margin: 70px auto auto auto;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5em 1em;
}

.project {
  width: 100%;
  padding: 0px 10px;
}

.project img {
  width: 100%;
}

.project h3 {
  margin-top: 10px;
  font-size: 1.8rem;
  color: #4c4981;
}

.project p {
  width: 100%;
  margin-top: 20px;
  font-size: 1.2rem;
  color: #4c4981;
}

.card-action-btn {
  margin-left: 20px;
  background: #fff;
  font-size: 1.2rem;
  color: #4c4981;
  padding: 0.3em 0.8em;
  border: 1px solid #6c63ff;
  border-radius: 20px;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
  float: right;
}

.card-action-btns {
  margin-top: 20px;
}

.card-action-btn:hover {
  background: #6c63ff;
  color: #fff;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.border {
  border-right: 1px solid #4c4881;
  border-left: 1px solid #4c4881;
}

/* Contact Section */
.contact {
  margin-top: 150px;
}

.contact-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.contact-img {
  width: 600px;
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
  transition: .3s;
  cursor: pointer;
}

.form-btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

/* Media Queries */
@media only screen and (min-width: 1482px) {
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1400px;
    margin: 0 auto;
  }

  .hero-content h1 {
    font-size: 3rem;
    color: #4c4981;
    margin-bottom: 20px;
  }

  .hero-content h3 {
    font-size: 1.5rem;
    width: 600px;
    color: #4c4981;
    line-height: 1.5;
  }

  .hero-image {
    width: 700px;
  }

  .hero-image img {
    width: 100%;
  }

  /* Main Content */
  main {
    margin-top: 150px;
  }

  .about {
    padding: 7em 5em;
    background: #6c63ff;
  }

  .about-container {
    width: 800px;
    margin: 0 auto;
    text-align: center;
    color: #fff;
  }

  .about-container h1 {
    /* font-size: 2rem; */
    margin-bottom: 20px;
  }

  .about-container p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
}

@media only screen and (max-width: 1320px) {
  .skill img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  .skill h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #6c63ff;
  }

  .skill p {
    font-size: 1.2rem;
    width: 300px;
    line-height: 1.5;
    color: #4c4881;
  }
}

@media only screen and (max-width: 1175px) {
  .contact-img {
    width: 500px;
  }

  .contact-form {
    width: 400px;
  }
}

@media only screen and (max-width: 1050px) {
  .hero {
    display: flex;
    flex-direction: column;
  }

  .hero-content {
    margin-top: 200px;
    text-align: center;
  }

  .hero-image {
    width: 500px;
    height: 500px;
  }

  /* Contact Section */

}

@media only screen and (max-width: 999px) {
  /* Skills Section */
  .skills-container {
    flex-direction: column;
  }

  .skill img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  .skill h2 {
    font-size: 1.5rem;
  }

  .skill p {
    font-size: 1.2rem;
    width: 80%;
    margin: auto auto 40px auto;
  }

  /* Work Section */
  .work-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 960px) {
  .contact {
    margin-top: 150px;
  }

  .contact-container {
    flex-direction: column;
  }

  .contact-img {
    width: 400px;
    margin-bottom: 40px;
  }

  .contact-form {
    width: 80%;
  }
}

@media only screen and (max-width: 850px) {
  /* About Section */
  .about-container {
    width: 90%;
  }

  .about-container p {
    font-size: 1.2rem;
    line-height: 2;
  }
}

@media only screen and (max-width: 750px) {
  /* Work Section */
  .work {
    width: 80%;
    margin: 0 auto;
  }

  .work-container {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 525px) {
  /* Header Section */
  .hero-image {
    width: 90%;
  }

  /* Work Section */
  .work {
    width: 90%;
  }
}
</style>

