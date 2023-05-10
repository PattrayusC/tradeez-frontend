<template>
  <div class="col-12 col-md-12 col-lg-11">
    <h1 class="text text-center">
      <span class="title"> Account </span>
    </h1>
  </div>
  <div class="account row">
    <div class="profile-pic col-12 col-md-5 col-lg-3 container text-center ">
      <img
        src="https://upload-os-bbs.hoyolab.com/upload/2023/02/09/8a6544ccfb9e668bb66ca0adfb77a8a0_4549650843582388561.png?x-oss-process=image/resize,s_1000/quality,q_80/auto-orient,0/interlace,1/format,png"
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
            <input type="text" id="info" class="form-control" aria-describedby="passwordHelpInline" placeholder="Hello"
              disabled>
          </div>
        </div>

        <div class="row g-3 align-items-center information ">
          <div class="col-2 col-md-2 col-lg-1">
            <label for="info" class="col-form-label">Email</label>
          </div>
          <div class="col-10 col-md-10 col-lg-5">
            <input type="text" id="info" class="form-control" aria-describedby="passwordHelpInline" placeholder="Hello"
              disabled>
          </div>
        </div>

        <div class="row g-3 align-items-center information ">
          <div class="col-2 col-md-2 col-lg-1">
            <label for="info" class="col-form-label">Phone</label>
          </div>
          <div class="col-10 col-md-10 col-lg-5">
            <input type="text" id="info" class="form-control" aria-describedby="passwordHelpInline" placeholder="Hello"
              disabled>
          </div>
        </div>

        <div class="row g-3 align-items-center information ">
          <div class="col-2 col-md-2 col-lg-1">
            <label for="info" class="col-form-label">Username</label>
          </div>
          <div class="col-10 col-md-10 col-lg-5">
            <input type="text" id="info" class="form-control" aria-describedby="passwordHelpInline" placeholder="Hello"
              disabled>
          </div>
        </div>

        <div class="row g-3 align-items-center information ">
          <div class="col-2 col-md-2 col-lg-1">
            <label for="info" class="col-form-label">Facebook</label>
          </div>
          <div class="col-10 col-md-10 col-lg-5">
            <input type="text" id="info" class="form-control" aria-describedby="passwordHelpInline" placeholder="Hello"
              disabled>
          </div>
        </div>

        <div class="row g-3 align-items-center information ">
          <div class="col-2 col-md-2 col-lg-1">
            <label for="info" class="col-form-label">Twitter</label>
          </div>
          <div class="col-10 col-md-10 col-lg-5 ">
            <input type="text" id="info" class="form-control" aria-describedby="passwordHelpInline" placeholder="Hello"
              disabled>
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
                <label for="link">Facebook</label>
                <input type="link" class="form-control">
              </div>
              <div class="mb-3 mt-3 tez-form-text">
                <label for="link">Twitter</label>
                <input type="link" class="form-control">
              </div>
              <div class="mb-3 mt-3 tez-form-text">
                <label for="formFileSm" class="form-label">Picture</label>
                <input class="form-control form-control-sm " id="formFileSm" type="file" style="opacity:0.5;height:10;">
              </div>
              <button type="button" class="btn btn-primary mt-3 tez-btn tez-form-btn" data-bs-dismiss="modal"> Confirm
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
                <label for="password">Password</label>
                <input type="password" class="form-control">
              </div>
              <div class="mb-3 mt-3 tez-form-text">
                <label for="password">New Password</label>
                <input type="password" class="form-control">
              </div>
              <div class="mb-3 mt-3 tez-form-text">
                <label for="password">Confirm New Password</label>
                <input type="password" class="form-control">
              </div>
              <button type="button" class="btn btn-primary mt-3 tez-btn tez-form-btn" data-bs-dismiss="modal"> Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
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
}</style>
  