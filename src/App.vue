<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div style="background-color: #F5F5F5;">
  <div>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom container">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span class="LOGO1 fs-4 fw-bold">Trade </span>&nbsp
        <span class="LOGO2 fs-4 fw-bold">EZ</span>&nbsp&nbsp
        <span class="LOGO1 fs-4 fw-bold">ซื้อขาย </span>
        <span class="LOGO2 fs-4 fw-bold">สบายใจ </span>
      </a>
      <ul class="nav">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Computer</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Food</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Lifestyle</a></li>
        <li class="nav-item">
          <a href="#" class="nav-login nav-link">LOGIN</a>
        </li>
      </ul>
    </header>
  </div>
  <div class="min-vh-100 d-flex flex-column justify-content-between" >
    <div class="container">

      <body class="d-flex flex-column" style="margin-bottom: 5%; backgroundColor:#F5F5F5">
        <RouterView />
      </body>
    </div>

    <div class="Footer">
      <footer class="mt-auto py-3 container">
        <a href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none footerlogo">
          <span class="LOGO3 fs-4 fw-bold">Trade </span>&nbsp
          <span class="LOGO2 fs-4 fw-bold">EZ</span>&nbsp&nbsp
          <span class="LOGO3 fs-4 fw-bold">ซื้อขาย </span>
          <span class="LOGO2 fs-4 fw-bold">สบายใจ </span>
        </a>
        <p class="footer-text">เว็บไซต์เพื่อคนชอบช็อป ซื้อง่าย ขายคล่อง</p>
        <br />
        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-0 border-top">
          <p class="footer-text">
            &copy; 2023 Trade EZ, EGCO 427 Mahidol University.
          </p>
        </div>
      </footer>
    </div>
  </div>
</div>
</template>

<style scoped>
.LOGO1 {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: #272343;
}

.LOGO2 {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: #fb743e;
}

.LOGO3 {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: #ffffff;
}

.nav-link {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #6d7280;
}

.nav-login {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 22px;
  /* Accents */
  color: #fb743e;
}

.Footer {
  background-color: #272343;
}

.footer-text {
  width: 336px;
  height: 24px;
  left: 300px;
  top: 84px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  opacity: 0.6;
}

.footerlogo {
  left: 14.27%;
  right: 68.12%;
  top: 11.78%;
  bottom: 78.12%;
}
</style>
