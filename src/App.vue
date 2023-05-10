<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div style="background-color: #F5F5F5;" class="TradeEZ">
    <div>
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom container">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span class="LOGO1 fs-4 fw-bold">Trade </span>&nbsp
          <span class="LOGO2 fs-4 fw-bold">EZ</span>&nbsp&nbsp
          <span class="LOGO1 fs-4 fw-bold">ซื้อขาย </span>
          <span class="LOGO2 fs-4 fw-bold">สบายใจ </span>
        </a>
        <ul class="nav">
          <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="createpost" class="nav-link" v-show="true" >Create Post</a></li>
          <li class="nav-item"><a href="account" class="nav-link" v-show="true" >Yutthasat</a></li>
          <li class="nav-item">
            <a href="#" type="button" class="nav-login nav-link" v-show="false" data-bs-toggle="modal"
              data-bs-target="#login">LOGIN</a>
            <div class="dropdown">
              <button class="btn  text-white fw-bold px-3" v-show="true" type="button" id="dropdownMenu2"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img
                  src="https://upload-os-bbs.hoyolab.com/upload/2023/02/09/8a6544ccfb9e668bb66ca0adfb77a8a0_4549650843582388561.png?x-oss-process=image/resize,s_1000/quality,q_80/auto-orient,0/interlace,1/format,png"
                  class="rounded-circle mx-auto d-block p-img border border-danger border-top-0 border-3 border-opacity-75 "
                  alt="Cinque Terre">
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu2">
                <li><a class="dropdown-item disabled" href="#aboutme"> TEz point: 999</a></li>
                <li><a class="dropdown-item" href="account">My Account</a></li>
                <li><a class="dropdown-item" href="mypost">My Post</a></li>
                <li><a class="dropdown-item" href="myorder">My Order</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#contact">Logout</a></li>
              </ul>
            </div>
          </li>
        </ul>

        <div id="login" class="modal fade">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <button type="button" class="btn-close btn-close-black" data-bs-dismiss="modal"></button>
                <div class="tez-form bg-white">
                  <h1 class="text-center tez-form-header tez-form-header-2"> Sign<span class="tez-form-header">In</span>
                  </h1>
                  <form action="#">
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="email">Email</label>
                      <input type="email" class="form-control">
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="email">Password</label>
                      <input type="password" class="form-control">
                    </div>
                    <button type="button" class="btn btn-primary mt-3 tez-btn"> Login </button>
                    <p class="form-signup">Not a Member <a href="#" data-bs-toggle="modal" data-bs-target="#Register"
                        class="link-signup">SignUp</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Register" class="modal fade">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <button type="button" class="btn-close btn-close-black" data-bs-dismiss="modal"></button>
                <div class="tez-form bg-white">
                  <h1 class="text-center tez-form-header tez-form-header-2"> Sign<span class="tez-form-header">Up</span>
                  </h1>
                  <form action="#">
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="fname">First Name</label>
                      <input type="fname" class="form-control">
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="lname">Last Name</label>
                      <input type="lname" class="form-control">
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="username">Username</label>
                      <input type="username" class="form-control">
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="email">Email</label>
                      <input type="email" class="form-control">
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="password">Password</label>
                      <input type="password" class="form-control">
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="password">Confirm Password</label>
                      <input type="password" class="form-control">
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="formFileSm" class="form-label">Picture</label>
                      <input class="form-control form-control-sm " id="formFileSm" type="file"
                        style="opacity:0.5;height:10;">
                    </div>
                    <button type="button" class="btn btn-primary mt-3 tez-btn"> SignUp </button>
                    <p class="form-signup"><a href="#" data-bs-toggle="modal" data-bs-target="#login"
                        class="link-signup">Already have an account? </a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="min-vh-100 d-flex flex-column justify-content-between">
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

.link-signup {
  color: #FB743E;
  text-decoration: none;
}

.link-signup:hover {
  color: #d44911;
  text-decoration: none;
}

.nav-link {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 50px;
  color: #6d7280;
}

.nav-link:hover,
.nav-link:active,
.nav-link::backdrop,
.nav-link:focus {
  color: #d44911;
}

.nav-login {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  /* line-height: 22px; */
  /* Accents */
  color: rgb(251, 116, 62);
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

.tez-form {
  max-width: 100%;
}

.modal-body {
  padding: 0px;
}

.tez-form {
  font-family: "PT Serif";
  box-shadow: 0 4px 6px 0px rgba(22, 22, 26, 0.18);
  padding: 2em;
  max-width: 100%;
}

.btn-close {
  position: absolute;
  right: 0;
  padding: 1em;
}

.btn-close:focus {
  border-color: rgb(251, 116, 62);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(251, 116, 62, 0.7);
}

.modal-content {
  width: 80%;
  margin: 0px auto;
}

.modal-body {
  padding: 0px;
}

.form-control {
  padding-top: 10px;
  background-color: inherit;
  color: #291d1d;
  padding-left: 5px;
  border: 0px;
  border-bottom: 1px solid #000000
}

.form-control:focus {
  border-color: rgb(251, 116, 62);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(251, 116, 62, 0.7);
}

.form-signup {
  font-family: "PT Serif";
  text-align: center;
  padding-top: 2em;
  color: gray;
}

.tez-form-text {
  padding-top: 1em;
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 100%;
  color: #272343;
}

.tez-form-header {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  color: #FB743E;
}

.tez-form-header-2 {
  color: #272343;
}

.btn-primary {
  background-color: #FB743E !important;
}

.btn-primary:visited,
.btn-primary:hover,
.btn-primary:active,
.btn-primary::backdrop {
  background-color: #d44911 !important;
}


.tez-btn {
  font-family: "PT Serif";
  border: none;
  height: auto;
  width: 100%;
  font-weight: 700;
  background-color: #fb743e;
  border-radius: 0;
  padding: 0.5em 0;
}

.tez-btn:focus {
  border-color: rgb(251, 116, 62);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 20px rgba(251, 90, 62, 0.7);
}

.p-img {
  height: 50px;
  width: 50px;
  object-fit: cover;
  /* display: block; */
}</style>
