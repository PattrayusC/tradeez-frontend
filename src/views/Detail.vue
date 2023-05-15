<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="background" style="font-family: 'PT Serif', serif;">
    <div class="gray">
      <div class="image-container">
        <img :src="`${this.Blogs.product_img}`" />
      </div>
    </div>
    <div class="overlap-wrapper">
      <div class="overlap">
        <div class="whitespace"></div>
        <div class="content">
          <p class="blockquote-footer mt-2 fs-6 tez-mc">
            <text class="tez-mc-author">{{ this.name }}</text>
          <h1 class="text-truncate" style="color: black">{{ this.Blogs.product_name }}</h1>
          <div class="profile-line">
            <div class="profile">
              <div class="circle">
                <img :src="`${this.pfp}`" />
              </div>
              <div v-for="category in this.Blogs.categories" style="color: black">
                <span class="profile-text">{{ category }}</span>
              </div>
              <div class="dot"></div>
              <span class="profile-text" style="color: gray">{{ convertTime() }}</span>
            </div>
            <div class="social">
              <a href="#" class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>
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
            <h2 class="text-truncate">{{ this.Blogs.product_name }}</h2>
          </div>
          <div class="description">
            <p style="white-space: pre-line;">{{ this.Blogs.description }}</p>
          </div>
          <div class="price">
            <h3 class="text-truncate">ราคา {{ this.Blogs.price }} บาท</h3>
            <h3 class="text-truncate">ค่าส่ง {{ this.Blogs.shipping_cost }} บาท</h3>
          </div>
          <div class="buttons">
            <button v-if="!isOwner" class="btn btn-primary px-4 py-2 fs-6 tez-btn" id="like" @click="check()">
              <i class="fa fa-thumbs-up thumbs-up-icon"></i>
              <span>Like</span>
            </button>
            <button v-else class="btn btn-primary px-4 py-2 fs-6 tez-btn"
              @click="$router.push('/edit/' + this.$route.params.item)">Edit Post</button>
            <button v-if="!isOwner" class="btn btn-primary px-4 py-2 fs-6 tez-btn" id="chat">Chat</button>
            <button v-else class="btn btn-primary px-4 py-2 fs-6 tez-btn" @click="confirmFinishPost">Finish Post</button>
          </div>
          <div class="comment">
            <div class="inputSection" v-if="!isOwner">
              <h5>Send Offer</h5>
              <div class="inputOffer">
                <input type="text" placeholder="Offer Price" class="inputOffer" v-model="this.commentary" />
              </div>
              <button class="btn btn-primary px-5 py-0 tez-btn" @click="submitForm">Post Offer</button>
            </div>

            <div class="commentSection" v-if="Blogs && Blogs.offers">
              <div class="offerAmount">
                <h6>Offer ({{ this.Blogs.offers.length }})</h6>
              </div>
              <div class="commentBox" v-for="offer in this.Blogs.offers">
                <div class="commentProfile">
                  <div class="circle">
                    <img :src="`${offer.commenter_pfp}`" />
                    <!-- <img :src="getPicture(offer.commenter_uid)" /> -->
                  </div>
                  <div class="commenter">
                    <span>{{ offer.commenter_name }}</span>
                    <span class="smallText">{{ relativeTime(offer.time) }}</span>
                  </div>
                </div>
                <div class="commentText smallText">
                  {{ offer.description }}
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
const url = 'http://127.0.0.1:5000/'
import axios from 'axios'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import async from 'hbs/lib/async'
export default {
  name: 'Blogs',
  data() {
    return {
      isOwner: false,
      Blogs: [],
      name: '',
      pfp: '',
      commentary: '',
    }
  },
  async mounted() {
    await axios.get(url + 'detail/' + this.$route.params.item)
      .then((response) => {
        this.Blogs = response.data
        console.log(this.Blogs.offers)
        if (this.Blogs.sold) {
          this.Blogs.product_name += " #ขายแล้ว"
          let likeButton = document.getElementById("like")
          let chatButton = document.getElementById("chat")
          likeButton.disabled = true
          chatButton.disabled = true
        }
        console.log(this.Blogs)
        axios.get(url + 'user/' + this.Blogs.author)
          .then((response) => {
            console.log(response.data[0])
            this.name = response.data[0].username
            this.pfp = response.data[0].picture_uri
          }).catch((error) => {
            console.log(error)
          })
        for (let i = 0; i < this.Blogs.offers.length; i++) {
          // console.log(this.Blogs.offers[i].commenter_uid)
          axios.get(url + 'user/' + this.Blogs.offers[i].commenter_uid)
            .then((response) => {
              // console.log(response.data[0])
              this.Blogs.offers[i].commenter_name = response.data[0].username
              this.Blogs.offers[i].commenter_pfp = response.data[0].picture_uri
              console.log(this.Blogs.offers[i])
            }).catch((error) => {
              console.log(error)
            })
        }
        onAuthStateChanged(getAuth(), (user) => {
          if (user) {
            //console.log("test " + user.uid + " " + this.Blogs.author)
            if (this.Blogs.author == user.uid) {
              this.isOwner = true
            }
            else {
              this.isOwner = false
            }
            console.log(this.isOwner)
          }
          else {
            this.isOwner = false
          }
        })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    convertTime: function () {
      let date = new Date(this.Blogs.time);

      let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };

      return date.toLocaleDateString('en-US', options);
    },
    confirmFinishPost: async function () {
      if (confirm("Are you sure?")) {
        this.Blogs.sold = true
        await axios.put(url + 'edit/' + this.$route.params.item, this.Blogs)
          .then((response) => {
            console.log(response)
            let save = this.$route.params.item
            this.$router.push('/detail/' + save)
          })
          .catch((error) => {
            console.error(error);
          })
      }
    },
    relativeTime: function (t) {
      console.log(t)
      let currentTime = new Date()
      let timeDiff = currentTime.getTime() - new Date(t).getTime()
      let secondsDiff = Math.floor(timeDiff / 1000)
      let minutesDiff = Math.floor(timeDiff / (1000 * 60))
      let hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60))
      let displayString
      if (secondsDiff < 60) {
        displayString = "just now"
      }
      else if (minutesDiff < 60) {
        displayString = minutesDiff + " minutes ago"
      }
      else if (hoursDiff < 24) {
        displayString = hoursDiff + " hours ago"
      }
      else {
        displaySring = "a day ago"
      }
      return displayString
    },
    submitForm: async function () {
      await onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          const newOffer = {
            commenter_uid: user.uid,
            time: new Date().toUTCString(),
            description: this.commentary,
            commenter_pfp: '',
            commenter_name: '',
          }
          this.Blogs.offers.unshift(newOffer)
          axios.put(url + 'edit/' + this.$route.params.item, this.Blogs)
            .then((response) => {
              console.log(response.data)
            })
            .catch((error) => {
              console.error(error)
            })
        }
        else {
          console.log("You are not authorized to access this area.")
        }
      })
    },
  }
}
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
  width: 100%;
  height: 100%;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.background {
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
}

.gray {
  height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #c4c4c4; */
  z-index: 1;
  overflow: hidden;
}

.overlap-wrapper {
  height: fit-content;
  /* background-color: #FFFFFF; */
  z-index: 1;
  /* border-radius: 5vh; */
}

.overlap {
  display: grid;
  grid-template-columns: 1fr 50% 1fr;
  grid-column-gap: 0;
  grid-template-rows: min-content;
  border-top-left-radius: 2.5vh;
  border-top-right-radius: 2.5vh;
  /* background-color: #FFFFFF; */
  background-image: linear-gradient(to bottom, transparent 62%, #ffffff 10%);
}

.content {
  /* background-image: linear-gradient(to bottom, #fd902a 10%, #ffffff 80.67%); */
  /* box-shadow: 0 0 0.5vh rgba(255, 145, 0, 0.8), 0 0 0.5vh rgba(255, 187, 84, 0.6), 0 0 0.5vh rgba(255, 198, 93, 0.4); */
  border: 0.3vh solid #ff7b00;
  border-radius: 4vh;
  padding-left: 2.5vh;
  transform: translateY(-25%);
  background-color: white;
}

.whitespace {
  background-image: linear-gradient(to top, #ffffff 50%, transparent);
}

.overlap2 {
  height: auto;
  width: 100%;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  display: grid;
  grid-template-columns: 20% 1fr;
  padding: 5vh;
  border-bottom-left-radius: 2.5vh;
  border-bottom-right-radius: 2.5vh;
  background-color: #FFFFFF;
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

.tez-btn {
  border: none;
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

.profile-line>* {
  margin-right: 10px;
}

.profile-text {
  font-size: 12px;
}

.profile {
  display: flex;
  align-items: center;
}

.profile>* {
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
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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

.commentBox {
  display: grid;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
}
</style>