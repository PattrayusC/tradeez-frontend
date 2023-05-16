<template>
  <div style="background-color: #f5f5f5">
  <div class="col-12 col-md-12 col-lg-11">
    <h1 class="text text-center">
      <span class="title"> Account </span>
    </h1>
  </div>
  <div class="account row">
    <div class="profile-pic col-12 col-md-5 col-lg-3 container text-center ">
      <img
        :src="`${this.profile.picture_uri}`"
        class="rounded-circle mx-auto d-block p-img border border-danger border-top-0 border-3 border-opacity-75"
        alt="Cinque Terre">
    </div>
    <div class="col-12 col-md-7 col-lg-9 container">

      <div class="tez-information text">
        <div class="row g-3 align-items-center information ">
          <div class="col-2 col-md-2 col-lg-1">
            <label for="info" class="col-form-label">Name</label>
          </div>
          <div class="col-10 col-md-10 col-lg-5">
            <input type="text" id="name"  class="form-control" aria-describedby="passwordHelpInline" :placeholder="`${this.profile.firstname} ${this.profile.lastname}`"
              disabled>
          </div>
        </div>

        <div class="row g-3 align-items-center information ">
          <div class="col-2 col-md-2 col-lg-1">
            <label for="info" class="col-form-label">Email</label>
          </div>
          <div class="col-10 col-md-10 col-lg-5">
            <input type="text"  class="form-control" aria-describedby="passwordHelpInline" :placeholder="`${this.profile.email}`"
              disabled>
          </div>
        </div>

        <div class="row g-3 align-items-center information ">
          <div class="col-2 col-md-2 col-lg-1">
            <label for="info" class="col-form-label">Phone</label>
          </div>
          <div class="col-10 col-md-10 col-lg-5">
            <input type="text" class="form-control" aria-describedby="passwordHelpInline" :placeholder="`${this.profile.phone}`"
              disabled>
          </div>
        </div>

        <div class="row g-3 align-items-center information ">
          <div class="col-2 col-md-2 col-lg-1">
            <label for="info" class="col-form-label">Username</label>
          </div>
          <div class="col-10 col-md-10 col-lg-5">
            <input type="text"  class="form-control" aria-describedby="passwordHelpInline" :placeholder="`${this.profile.username}`"
              disabled>
          </div>
        </div>

        <div class="row g-3 align-items-center information ">
          <div class="col-2 col-md-2 col-lg-1">
            <label for="info" class="col-form-label">Facebook</label>
          </div>
          <div class="col-10 col-md-10 col-lg-5">
            <input type="text" class="form-control" aria-describedby="passwordHelpInline" :placeholder="`${this.profile.facebook}`"
              disabled>
          </div>
        </div>

        <div class="row g-3 align-items-center information ">
          <div class="col-2 col-md-2 col-lg-1">
            <label for="info" class="col-form-label">Twitter</label>
          </div>
          <div class="col-10 col-md-10 col-lg-5 ">
            <input type="text" class="form-control" aria-describedby="passwordHelpInline" :placeholder="`${this.profile.twitter}`"
              disabled>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="row g-3 col-12 col-md-12 col-lg-11">
    <h1 class="text title text-center">
      <button type="button" class="btn btn-primary mt-3 tez-btn" data-bs-toggle="modal" data-bs-target="#edit-p"> Edit
        Profile </button>
      <button type="button" class="btn btn-primary mt-3 tez-btn" data-bs-toggle="modal" data-bs-target="#change-pass">
        Change
        Password </button>
    </h1>
  </div>
  <div id="edit-p" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="btn-close btn-close-black" data-bs-dismiss="modal"></button>
          <div class="tez-form bg-white">
            <h1 class="text-center tez-form-header tez-form-header-2"> Edit <span class="tez-form-header"> Profile </span>
            </h1>
            <form action="#">
              <div class="mb-3 mt-3 tez-form-text">
                <label for="fname">First Name</label>
                <input type="fname" class="form-control" :placeholder="`${this.edit_temp.firstname}`" v-model="this.edit_temp.firstname">
              </div>
              <div class="mb-3 mt-3 tez-form-text">
                <label for="lname">Last Name</label>
                <input type="lname" class="form-control" :placeholder="`${this.edit_temp.lastname}`" v-model="this.edit_temp.lastname">
              </div>
              <div class="mb-3 mt-3 tez-form-text">
                <label for="username">Username</label>
                <input type="username" class="form-control" :placeholder="`${this.edit_temp.username}`" v-model="this.edit_temp.username">
              </div>
              <div class="mb-3 mt-3 tez-form-text">
                <label for="link">Phone</label>
                <input type="link" class="form-control" :placeholder="`${this.edit_temp.phone}`" v-model="this.edit_temp.phone">
              </div>
              <div class="mb-3 mt-3 tez-form-text">
                <label for="link">Facebook</label>
                <input type="link" class="form-control" :placeholder="`${this.edit_temp.facebook}`" v-model="this.edit_temp.facebook">
              </div>
              <div class="mb-3 mt-3 tez-form-text">
                <label for="link">Twitter</label>
                <input type="link" class="form-control" :placeholder="`${this.edit_temp.twitter}`" v-model="this.edit_temp.twitter">
              </div>
              <div class="mb-3 mt-3 tez-form-text">
                <label for="formFileSm" class="form-label">Picture</label>
                <input type="file" accept="image/*" class="form-control form-control-sm "
                        style="opacity:0.5;height:10;" @change="uploadImage($event)" id="file-input" :disabled="!isUploaded">
              </div>
              <button type="button" class="btn btn-primary mt-3 tez-btn tez-form-btn" data-bs-dismiss="modal" @click="updateUser()" :disabled="!isUploaded"> Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="change-pass" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="btn-close btn-close-black" data-bs-dismiss="modal"></button>
          <div class="tez-form bg-white">
            <h1 class="text-center tez-form-header tez-form-header-2" style="font-size: 38px;"> Change <span
                class="tez-form-header" style="font-size: 38px;">Password</span> </h1>
            <form action="#">
              <div class="mb-3 mt-3 tez-form-text">
                <label for="password">New Password</label>
                <input type="password" class="form-control" v-model="this.restpass.newpassword">
              </div>
              <div class="mb-3 mt-3 tez-form-text">
                <label for="password">Confirm New Password</label>
                <input type="password" class="form-control" v-model="this.restpass.confirmpassword">
              </div>
              <button type="button" class="btn btn-primary mt-3 tez-btn tez-form-btn" data-bs-dismiss="modal" @click="resetpassword()"> Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getAuth, onAuthStateChanged, updatePassword} from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const URL = "http://127.0.0.1:5000/"

export default {
  name: 'account',
  data() {
    return {
      profile: {
        email: "",
        firstname: "",
        lastname: "",
        username: "",
        picture_uri: "",
        uid: "",
        facebook:"",
        Twitter:""
      },
      edit_temp: {
        _id: "",
        email: "",
        firstname: "",
        lastname: "",
        username: "",
        picture_uri: "",
        uid: "",
        facebook:"",
        Twitter:""
      },
      restpass:{
        newpassword: '',
        confirmpassword: '',
        user:'',
      },
      auth: getAuth(),
      isUploaded: true
    }
  },
  mounted() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log("login")
        this.restpass.user = user.currentUser
        if (!this.isRegister) {
          this.isLoggedIn = true
          axios.get(URL + 'user/' + user.uid).then((response) => {
            this.profile = response.data[0]
            this.edit_temp = this.profile
            console.log(this.profile)
          }).catch((error) => {
            console.log(error)
          })
        }
      }
      else {
        this.$router.push('/')
      }
    })
  }, methods: {
    async uploadImage(event) {
      this.isUploaded = false
      let path = 'profile/' + Date.now()
      console.log(path)
      let storageRef = ref(getStorage(), path)
      await uploadBytes(storageRef, event.target.files[0]).then(
        (snapshot) => {
          console.log("uploaded => " + snapshot)
        }).catch((error) => {
          console.error(error)
        })
      await getDownloadURL(ref(getStorage(), path)).then(
        (download_url) => {
          this.edit_temp.picture_uri = download_url
          this.isUploaded = true
        }
      ).catch((error) => {
        console.error(error)
      })
      console.log(this.regis_user.picture_uri)
    },
    // uploadImage(event) {
    //   this.uploadDone = false
    //   let data = new FormData();
    //   data.append('name', 'my-picture');
    //   data.append('image', event.target.files[0]);
    //   let config = {
    //     header: {
    //       'Content-Type': 'image/png'
    //     }
    //   }
    //   axios.post(URL + 'upload', data, config)
    //     .then(
    //       response => {
    //         this.edit_temp.picture_uri = response.data.uri
    //         this.uploadDone = true
    //       }
    //     ).catch((error)=>{
    //       console.log(error)
    //     })
    // },
    updateUser(){
      if(this.edit_temp.username !== '' && this.edit_temp.picture_uri !== '' && this.edit_temp.firstname !== '' && this.edit_temp.lastname !== ''){
        axios.put(URL + 'user/' + this.edit_temp._id, this.edit_temp)
          .then(
            response=>{
              console.log('update sucessfully !! > ', response.data)
              alert('update sucessfully !!')
            }
          ).catch((error)=>{
          console.log(error)
        })
      }else{
        alert("Please fill all form")
      }
    },
    resetpassword(){
      if(this.restpass.newpassword === this.restpass.confirmpassword){
        updatePassword(this.auth.currentUser,this.restpass.newpassword).then((response)=>{
          alert("Sucessfully reset !!")
        }).catch((error) => {
          console.log(error)
          alert(error.code + '\n' + error.massage)
        })
      }else{
        alert("wrong password")
      }
    }
  }
}
</script>


<style scoped>
.information {
  padding: 1%;
}

.text {
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 700;
  color: #3c3d42;
}

.title {
  line-height: 56px;
  font-size: 48px;
  color: #fa8a55;
  position: relative;
}

.p-img {
  height: 200px;
  width: 200px;
  object-fit: cover;
  display: block;
}

.profile-pic {
  margin-top: 1%;
  margin-bottom: 3%;
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
  width: 180px;
  margin-left: 4%;
  margin-right: -1%;
  font-weight: 700;
  background-color: #fb743e;
  padding: 0.5em 0;
}

.tez-btn:focus {
  border-color: rgb(251, 116, 62);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 10px rgba(251, 90, 62, 0.7);
}

.tez-form-btn {
  width: 100%;
  margin-left: 0%;
  margin-right: 0%;
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
</style>
  