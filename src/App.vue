<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div style="background-color: #f5f5f5" class="TradeEZ">
    <div>
      <header
        class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom container"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span class="LOGO1 fs-4 fw-bold">Trade </span>&nbsp
          <span class="LOGO2 fs-4 fw-bold">EZ</span>&nbsp&nbsp
          <span class="LOGO1 fs-4 fw-bold">ซื้อขาย </span>
          <span class="LOGO2 fs-4 fw-bold">สบายใจ </span>
        </a>

        <ul class="nav" v-show="this.$route.name === 'detail'">
          <li class="nav-item">
            <a
              href=""
              @click="$router.replace({ path: '/account' })"
              class="nav-link"
              v-show="true"
              >{{ this.profile.username }}</a
            >
          </li>
          <li class="nav-item">
            <a
              href=""
              @click="$router.push({ path: '/createpost' })"
              class="nav-link"
              v-show="isLoggedIn"
              >Create Post</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#"
              type="button"
              class="nav-login nav-link"
              v-show="!isLoggedIn"
              data-bs-toggle="modal"
              data-bs-target="#login"
              >LOGIN</a
            >
            <div class="dropdown">
              <button
                class="btn text-white fw-bold px-3"
                v-show="isLoggedIn"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  :src="`${this.profile.picture_uri}`"
                  class="rounded-circle mx-auto d-block p-img border border-danger border-top-0 border-3 border-opacity-75"
                  alt="Cinque Terre"
                />
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <a
                    href=""
                    class="dropdown-item"
                    @click="$router.replace({ path: '/reward' })"
                    >TEz point: {{ this.profile.point }}</a
                  >
                </li>
                <li>
                  <a
                    href=""
                    class="dropdown-item"
                    @click="$router.replace({ path: '/account' })"
                    >My Account</a
                  >
                </li>
                <li>
                  <a
                    href=""
                    class="dropdown-item"
                    @click="$router.replace({ path: '/mypost' })"
                    >My Post</a
                  >
                </li>
                <li>
                  <a
                    href=""
                    class="dropdown-item"
                    @click="$router.replace({ path: '/myorder' })"
                    >My Order</a
                  >
                </li>
                <li>
                  <a
                    href=""
                    class="dropdown-item"
                    @click="$router.replace({ path: '/chat/0' })"
                    >My Chat</a
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="" @click="LogOut()">Logout</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul class="nav" v-show="this.$route.name !== 'detail'">
          <li class="nav-item">
            <router-link to="account" class="nav-link" v-show="true">{{
              this.profile.username
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="createpost" class="nav-link" v-show="isLoggedIn">
              Create Post
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="#"
              type="button"
              class="nav-login nav-link"
              v-show="!isLoggedIn"
              data-bs-toggle="modal"
              data-bs-target="#login"
              >LOGIN</a
            >
            <div class="dropdown">
              <button
                class="btn text-white fw-bold px-3"
                v-show="isLoggedIn"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  :src="`${this.profile.picture_uri}`"
                  class="rounded-circle mx-auto d-block p-img border border-danger border-top-0 border-3 border-opacity-75"
                  alt="Cinque Terre"
                />
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <RouterLink to="reward" class="dropdown-item"
                    >TEz point: {{ this.profile.point }}</RouterLink
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <RouterLink to="account" class="dropdown-item"
                    >My Account</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="mypost" class="dropdown-item"
                    >My Post</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="myorder" class="dropdown-item"
                    >My Order</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="chat/0" class="dropdown-item"
                    >My Chat</RouterLink
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="" @click="LogOut()">Logout</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div id="login" class="modal fade">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <button
                  type="button"
                  class="btn-close btn-close-black"
                  data-bs-dismiss="modal"
                ></button>
                <div class="tez-form bg-white">
                  <h1 class="text-center tez-form-header tez-form-header-2">
                    Sign<span class="tez-form-header">In</span>
                  </h1>
                  <form action="#">
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="user.email"
                      />
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="email">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        v-model="user.password"
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary mt-3 tez-btn"
                      @click="signIn()"
                    >
                      Login
                    </button>
                    <p class="form-signup">
                      Not a Member
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#Register"
                        class="link-signup"
                        >SignUp</a
                      >
                    </p>
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
                <button
                  type="button"
                  class="btn-close btn-close-black"
                  data-bs-dismiss="modal"
                ></button>
                <div class="tez-form bg-white">
                  <h1 class="text-center tez-form-header tez-form-header-2">
                    Sign<span class="tez-form-header">Up</span>
                  </h1>
                  <form action="#">
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="fname">First Name</label>
                      <input
                        type="fname"
                        class="form-control"
                        v-model="regis_user.firstname"
                      />
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="lname">Last Name</label>
                      <input
                        type="lname"
                        class="form-control"
                        v-model="regis_user.lastname"
                      />
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="username">Username</label>
                      <input
                        type="username"
                        class="form-control"
                        v-model="regis_user.username"
                      />
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="regis_user.email"
                      />
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        v-model="regis_user.password"
                      />
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="password">Confirm Password</label>
                      <input
                        type="password"
                        class="form-control"
                        v-model="regis_user.confirmpassword"
                      />
                    </div>
                    <div class="mb-3 mt-3 tez-form-text">
                      <label for="formFileSm" class="form-label">Picture</label>

                      <input
                        type="file"
                        accept="image/*"
                        class="form-control form-control-sm"
                        style="opacity: 0.5; height: 10"
                        @change="uploadImage($event)"
                        id="file-input"
                        :disabled="!isUploaded"
                      />
                    </div>
                    <div id="liveAlertPlaceholder"></div>
                    <button
                      type="button"
                      class="btn btn-primary mt-3 tez-btn"
                      id="submit"
                      @click="checkform()"
                      :disabled="!isUploaded"
                    >
                      SignUp
                    </button>
                    <p class="form-signup">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#login"
                        class="link-signup"
                        >Already have an account?
                      </a>
                    </p>
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
        <body
          class="d-flex flex-column"
          style="margin-bottom: 5%; backgroundcolor: #f5f5f5"
        >
          <RouterView />
        </body>
      </div>

      <div class="Footer">
        <footer class="mt-auto py-3 container">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none footerlogo"
          >
            <span class="LOGO3 fs-4 fw-bold">Trade </span>&nbsp
            <span class="LOGO2 fs-4 fw-bold">EZ</span>&nbsp&nbsp
            <span class="LOGO3 fs-4 fw-bold">ซื้อขาย </span>
            <span class="LOGO2 fs-4 fw-bold">สบายใจ </span>
          </a>
          <p class="footer-text">เว็บไซต์เพื่อคนชอบช็อป ซื้อง่าย ขายคล่อง</p>
          <br />
          <div
            class="d-flex flex-column flex-sm-row justify-content-between py-4 my-0 border-top"
          >
            <p class="footer-text">
              &copy; 2023 Trade EZ, EGCO 427 Mahidol University.
            </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { SENDBIRD_CONSTANTS } from "./CONSTS";

const URL = "http://127.0.0.1:5000/";

export default {
  name: "App",
  data() {
    return {
      profile: {
        email: "",
        firstname: "",
        lastname: "",
        username: "",
        picture_uri: "",
        uid: "",
        point: "",
      },
      regis_user: {
        email: null,
        password: null,
        firstname: null,
        lastname: null,
        username: null,
        confirmpassword: null,
        picture_uri: null,
        uid: null,
      },
      user: {
        email: null,
        password: null,
      },
      auth: getAuth(),
      isLoggedIn: false,
      isRegister: false,
      isUploaded: true,
    };
  },
  mounted() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log("login");
        this.regis_user.uid = user.uid;
        if (!this.isRegister) {
          this.isLoggedIn = true;
          axios
            .get(URL + "user/" + user.uid)
            .then((response) => {
              this.profile = response.data[0];
              console.log(this.profile);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        this.isLoggedIn = false;
        console.log("not login");
      }
    });
  },
  methods: {
    async uploadImage(event) {
      this.isUploaded = false;
      let path = "profile/" + Date.now();
      console.log(path);
      let storageRef = ref(getStorage(), path);
      await uploadBytes(storageRef, event.target.files[0])
        .then((snapshot) => {
          console.log("uploaded => " + snapshot);
        })
        .catch((error) => {
          console.error(error);
        });
      await getDownloadURL(ref(getStorage(), path))
        .then((download_url) => {
          this.regis_user.picture_uri = download_url;
          this.isUploaded = true;
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(this.regis_user.picture_uri);

      // let data = new FormData();
      // data.append('name', 'my-picture');
      // data.append('image', event.target.files[0]);
      // let config = {
      //   header: {
      //     'Content-Type': 'image/png'
      //   }
      // }
      // axios.post(URL + 'upload',data,config)
      // .then(
      //   response => {
      //     console.log('image upload response > ', response.data.uri)
      //     this.regis_user.picture_uri = response.data.uri
      //     this.user.img = response.data.uri
      //   }
      // )
    },
    register() {
      // const URL = 'http://127.0.0.1:5000/user';
      axios
        .post(URL + "user", this.regis_user)
        .then((response) => {
          
          console.log(response);
          this.regis_user.uid = null;
          this.regis_user.password = null;
          this.regis_user.email = null;
          this.regis_user.firstname = null;
          this.regis_user.lastname = null;
          this.regis_user.username = null;
          this.regis_user.confirmpassword = null;
          this.regis_user.picture_uri = null;
          alert("Successfully register");
          this.isRegister = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    checkform() {
      if (
        this.regis_user.password != null &&
        this.regis_user.email != null &&
        this.regis_user.firstname != null &&
        this.regis_user.lastname != null &&
        this.regis_user.username != null &&
        this.regis_user.confirmpassword != null &&
        this.regis_user.picture_uri != null
      ) {
        if (this.regis_user.password === this.regis_user.confirmpassword) {
          console.log(this.regis_user);
          this.signUp();
        } else {
          alert("password incorrect");
        }
      } else {
        alert("Please fill all form");
      }
    },
    signUp() {
      const auth = getAuth();
      this.isRegister = true;
      createUserWithEmailAndPassword(
        auth,
        this.regis_user.email,
        this.regis_user.password
      )
        .then((userCredential) => {
          console.log("Successfully register");
          this.createSendbirdUser();
        })
        .catch((error) => {
          this.isRegister = false;
          console.log(error.code + ": " + error.massage);
          alert(error.code + "\n" + error.massage);
        });
    },
    LogOut() {
      signOut(this.auth)
        .then(() => {
          console.log("Successfully Logout");
          this.$router.replace("/");
        })
        .catch((error) => {
          console.log(error.massage);
        });
    },
    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((userCredential) => {
          console.log("Successfully login");
          console.log(this.user.uid);
        })
        .catch((error) => {
          console.log(error.code + ": " + error.massage);
          alert(error.code + "\n" + error.massage);
        });
    },
    async createSendbirdUser() {
      const response = await fetch(`${SENDBIRD_CONSTANTS.API_URL}/v3/users`, {
        method: "POST",
        headers: {
          "Api-Token": SENDBIRD_CONSTANTS.API_TOKEN,
        },
        body: JSON.stringify({
          user_id: this.regis_user.uid, // user id
          nickname: this.regis_user.username, // username
          profile_url: this.regis_user.picture_uri, // image link
          issue_access_token: true,
        }),
      });
      const jsonData = await response.json();
      console.log(jsonData);
      this.register();
    },
  },
};
</script>

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
  color: #fb743e;
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
  color: #6c4d3b;
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
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(251, 116, 62, 0.7);
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
  border-bottom: 1px solid #000000;
}

.form-control:focus {
  border-color: rgb(251, 116, 62);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(251, 116, 62, 0.7);
}

.form-signup {
  font-family: "PT Serif";
  text-align: center;
  padding-top: 2em;
  color: gray;
}

.tez-form-text {
  padding-top: 1em;
  font-family: "PT Serif";
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
  color: #fb743e;
}

.tez-form-header-2 {
  color: #272343;
}

.btn-primary {
  background-color: #fb743e !important;
}

.btn-primary:visited,
.btn-primary:hover,
.btn-primary:active,
.btn-primary::backdrop {
  background-color: #d44911 !important;
}

.dropdown-item {
  font-family: "PT Serif";
  color: #6c4d3b;
}
.dropdown-item:hover,
.dropdown-item:active,
.dropdown-item::backdrop,
.dropdown-item:focus {
  background-color: #fda07c !important;
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
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 20px rgba(251, 90, 62, 0.7);
}

.p-img {
  height: 50px;
  width: 50px;
  object-fit: cover;
  /* display: block; */
}
</style>
