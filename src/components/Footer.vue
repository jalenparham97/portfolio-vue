<template>
  <footer class="footer">
    <div class="footer-content">
      <h1 class="logo">JP</h1>
      <h2 class="motto">Living, learning, and leveling up one day at a time.</h2>

      <div class="social">
        <a href="https://github.com/jalenparham97" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jalen-parham" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:jalenparham97@gmail.com">
          <i class="fas fa-envelope"></i>
        </a>
      </div>

      <div class="copywrite">
        <p>
          Jalen Parham
          <span>&copy;</span> 2018
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  margin-top: 100px;
  padding: 4em 5em;
  background: #6c63ff;
}

.footer-container {
  width: 90%;
  margin: 0 auto;
}

.footer-content {
  text-align: center;
  color: #fff;
}

.logo,
.motto,
.social {
  margin-bottom: 40px;
}

.logo {
  font-size: 2rem;
}

.motto {
  font-size: 1.5rem;
  font-weight: 300;
}

.copywrite p {
  font-weight: 300;
  font-size: 1.2rem;
}

.social a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0px 10px;
  padding: 15px 20px;
  border: 1px solid #6c63ff;
  border-radius: 60px;
  transition: 0.3s;
}

.social a:hover {
  background: #4c4981;
  border: 1px solid #4c4981;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

@media only screen and (max-width: 670px) {
  .motto {
    line-height: 1.5;
  }
}
</style>
