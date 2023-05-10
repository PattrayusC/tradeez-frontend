<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="background" style="font-family: 'PT Serif', serif;">
      <div class="gray">
        <div class="image-container">
          <img :src="'https://i.imgflip.com/5dtgih.jpg'" />
        </div>
      </div>
      <div class="overlap-wrapper">
          <div class="overlap">
            <div class="whitespace"></div>
            <div class="content">
              <p class="blockquote-footer mt-2 fs-6 tez-mc">
                <text class="tez-mc-author">Mark</text>
                <h1 class="text-truncate">CPU Intel Core I9</h1>
                <div class="profile-line">
                  <div class="profile">
                    <div class="circle"></div>
                    <span class="profile-text">Computer</span>
                    <div class="dot"></div>
                    <span class="profile-text">March 25, 2023</span>
                  </div>
                  <div class="social">
                    <a href="#" class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>
                    <a href="#" class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="btn btn-social-icon btn-pinterest"><i class="fa fa-pinterest"></i></a>
                  </div>
                </div>
              </p>
            </div>
            <div class="whitespace"></div>
          </div>
      </div>
      <div class="overlap-wrapper">
        <div class="overlap2">
          <div class="left-div">
            <i class="fa fa-thumbs-up thumbs-up-icon"></i>
            <span class="text-truncate">0 Likes</span>
          </div>
          <div class="right-div">
            <div class="topic">
              <h2 class="text-truncate">CPU Intel Core I9</h2>
            </div>
            <div class="description">
              <p>DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
                DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
                DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
                DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
                DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
                DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
                DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
              </p>
            </div>
            <div class="price">
              <h3 class="text-truncate">ราคา 0 บาท</h3>
              <h3 class="text-truncate">ค่าส่ง 0 บาท</h3>
            </div>
            <div class="buttons">
              <button v-if="isOwner" class="btn btn-primary px-4 py-2 fs-6 tez-btn">
                <i class="fa fa-thumbs-up thumbs-up-icon"></i>
                <span>Like</span>
              </button>
              <button v-else class="btn btn-primary px-4 py-2 fs-6 tez-btn" @click="$router.push('/edit/123')">Edit Post</button>
              <button v-if="isOwner" class="btn btn-primary px-4 py-2 fs-6 tez-btn">Chat</button>
              <button v-else class="btn btn-primary px-4 py-2 fs-6 tez-btn">Finish Post</button>
            </div>
            <div class="comment">
              <div class="inputSection">
                <h5>Send Offer</h5>
                <div class="inputOffer">
                  <input type="text" placeholder="Offer Price" class="inputOffer" />
                </div>
                <button class="btn btn-primary px-5 py-0 tez-btn">Post Offer</button>
              </div>
              <div class="commentSection">
                <div class="offerAmount">
                    <h6>Offer (01)</h6>
                </div>
                <div class="commentBox">
                  <div class="commentProfile">
                    <div class="circle"></div>
                    <div class="commenter">
                      <span>Kevin</span>
                      <span class="smallText">2 hours ago</span>
                    </div>
                  </div>
                  <div class="commentText smallText">
                    20,000 บาท
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOwner: true
    };
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .profile-line {
    flex-direction: column;
  }

  .inputSection {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.background {
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
}

.gray {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4c4c4;
  z-index: 1;
}

.overlap-wrapper {
  height: fit-content;
  background-color: #FFFFFF;
  z-index: 1;
}

.overlap {
  display: grid;
  grid-template-columns: 1fr 50% 1fr;
  grid-column-gap: 0;
  grid-template-rows: min-content;
}

.content {
  background-color: #FFFFFF;
  padding-left: 2.5vh;
}

.whitespace {
  background-image: linear-gradient(to bottom, #C4C4C4 50%, #FFFFFF 50%);
}

.overlap2 {
  height: auto;
  width: 80%;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  display: grid;
  grid-template-columns: 20% 1fr;
  padding: 5vh;
}

.right-div {
  display: grid;
  grid-template-rows: min-content auto min-content min-content auto;
  gap: 3vh;
}

.topic {
  display: flex;
  align-items: center;
}

.thumbs-up-icon {
  display: inline-block;
  font-size: 16px;
  color: #000;
  background-color: transparent;
}

.description {
  border-left: 0.5vh solid #ff7b00;
  word-wrap: break-word;
  padding-left: 1vh;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  display: flex;
  flex-wrap: wrap;
}

.comment {
  display: flex;
  flex-direction: column;
}

.inputSection {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3vh;
}

.inputSection button {
  border-radius: 0;
  height: 100%;
}

.inputSection input {
  width: 100%;
}

.inputOffer {
  display: flex;
  flex-grow: 1;
}

.commentProfile {
  display: flex;
  align-items: center;
}

.commenter {
  margin-left: 1.5vh;
}

.commentProfile span {
  display: block;
}

.smallText {
  font-size: 1.5vh;
  color: grey;
}

.buttons {
  border-top: 2px solid #C4C4C4;
  border-bottom: 2px solid #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1vh;
  padding-right: 1vh;
}

.buttons button {
  flex-grow: 1;
  border-radius: 0;
  width: 50%;
  height: 60%;
  justify-content: center;
  align-items: center;
  margin-right: 2vh;
}

.buttons button:last-child {
  margin-right: 0;
}

.tez-mc {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 600;
  color: #FB743E;
  text-align: left;
}

.tez-btn{
  border:none;
  font-family: "PT Serif";
  border: none;
  height: auto;
  width: 180px;
  margin-left: 0%;
  margin-right: 0%;
  font-weight: 700;
  background-color: #fb743e;
  padding: 0.5em 0;
}
.tez-btn:focus {
    border-color: rgb(251, 116, 62);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 10px rgba(251, 90, 62, 0.7);
}

.tez-mc-author {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 100;
  font-size: 12px;
  color: #000000;
  text-align: left;
}

.profile-line {
  display: flex;
  align-items: center;
  top: 5%;
  left: 0;
  justify-content: space-between;
  padding-right: 1vh;
}

.profile-line > * {
  margin-right: 10px;
}

.profile-text {
  font-size: 12px;
}

.profile {
  display: flex;
  align-items: center;
}

.profile > * {
  margin-right: 1vh;
}

.social {
  display: flex;
  justify-content: flex-end;
}

.circle {
  width: 4vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #5e5e5e;
  top: 0;
  left: 0;
}

.dot {
  width: 0.6vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #5e5e5e;
  top: 0;
  left: 0;
}

.fa {
  font-size: 1.8vh;
  width: 3.2vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fa-thumbs-up {
  background-color: transparent;
}

.btn-primary {
  background-color: #FB743E !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-primary:visited,

.btn-primary:hover,

.btn-primary:active,

.btn-primary::backdrop {
  background-color: #d44911 !important;
}
</style>