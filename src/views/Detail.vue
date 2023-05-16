<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div style="background-color: #f5f5f5">
  <div class="container">
      <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-12 col-lg-12">
              <div class="image-container text-center">
                  <img :src="`${this.Blogs.product_img}`" class="img-fluid smaller-img" />
              </div>
          </div>
          <div class="col-12 col-md-12 col-lg-12">
              <div class="profile-box mt-3">
                  <p class="blockquote-footer mt-1 fs-6 tez-mc">
                      <text class="tez-mc-author text-dark">{{ this.name }}</text>
                      <h1 class="text-truncate text-dark">{{ this.Blogs.product_name }}</h1>
                  </p>
                  <div class="d-flex align-items-center">
                      <img :src="`${this.pfp}`" class="d-block p-img tez-border" />
                      <div class="align-items-center ms-2 categories">
                          <p v-for="category in this.Blogs.categories" class="mb-0 me-2">
                              {{ category }}
                          </p>
                          <span class="small-circle mx-2"></span>
                          <span class="ms-auto mx-3 small text-secondary">{{ convertTime() }}</span>
                      </div>
                      <div class="ms-auto">
                          <a :href="'https://' + this.facebook" target="_blank"><i class="fa fa-facebook-official ms-2"></i></a>
                          <a :href="'https://' + this.twitter" target="_blank"><i class="fa fa-twitter ms-1"></i></a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-12 col-md-12 col-lg-12 mt-2 cool-bg pt-5 pb-2">
              <div class="row justify-content-center">
                  <div class="col-12 col-md-6 col-lg-2 mb-5">
                      <div class="d-flex align-items-center">
                          <i class="fa fa-thumbs-up me-4"></i>
                          <p v-if="Blogs && Blogs.likes" class="mb-0">{{ this.Blogs.likes.length }} Likes</p>
                      </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-8">
                      <h2 class="text-truncate">{{ this.Blogs.product_name }}</h2>
                      <div class="description mt-4">
                          <div class="orange-line"></div>
                          <p class="long-text">{{ this.Blogs.description }}</p>
                      </div>
                      <h3 v-if="this.Blogs.reward" class="mt-4">TEz : {{ Currency(this.Blogs.price) }} Point</h3>
                      <h3 v-else class="mt-4">ราคา : {{ Currency(this.Blogs.price) }} บาท</h3>
                      <h3 class="mt-4">ค่าส่ง : {{ Currency(this.Blogs.shipping_cost) }} บาท</h3>
                      <div class="mt-4 gray-line">
                          <div class="button-container d-flex gap-4">
                              <button v-if="!isOwner" class="btn btn-primary tez-btn flex-grow-1" id="like" @click="hitLike()" :class="{ 'liked': this.isLiked }">
                                <span v-if="isLiked">Like</span>
                                <span v-else>Unlike</span>
                              </button>
                              <button v-else class="btn btn-primary tez-btn flex-grow-1" @click="$router.push('/edit/' + this.$route.params.item)">Edit Post</button>
                              <a v-if="this.Blogs.event" class="btn btn-primary tez-btn flex-grow-1" href="https://www.facebook.com/GaydoradoGAY">Join Event</a>
                              <button v-else-if="!isOwner" class="btn btn-primary tez-btn flex-grow-1" id="chat" @click="ChatwithAuthor()">Chat</button>
                              <button v-else class="btn btn-primary tez-btn flex-grow-1" @click="confirmFinishPost" :disabled="this.Blogs.sold" >Finish Post</button>
                          </div>
                      </div>
                      <div v-if="!isOwner" class="d-flex align-items-center mt-2 justify-content-center gap-2">
                        <h5 class="mt-3">Send Offer</h5>
                        <div class="input-group flex-fill">
                            <input type="text" placeholder="Offer Price" class="form-control flex-grow-1 inputOffer" v-model="this.commentary" />
                            <button class="btn btn-primary tez-btn" id="post" @click="submitForm" >Post Offer</button>
                        </div>
                      </div>
                      <h6 v-if="Blogs && Blogs.offers" class="mt-3">Offer ({{ this.Blogs.offers.length }})</h6>
                      <div class="comment-box mt-3 mb-5" v-for="offer in this.Blogs.offers" :key="offer.id">
                        <div class="comment-header d-flex align-items-center">
                          <img :src="`${offer.commenter_pfp}`" class="d-block p-img tez-border me-2">
                          <div class="comment-info d-block">
                            <p class="comment-name mb-0">{{ offer.commenter_name }}</p>
                            <p class="comment-date mb-0 small text-secondary">{{ relativeTime(offer.time) }}</p>
                          </div>
                        </div>
                        <p class="comment-description long-text">{{ offer.description }}</p>
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
export default {
  name: 'Blogs',
  data() {
      return {
      isOwner: false,
      Blogs: [],
      name: '',
      pfp: '',
      facebook: '',
      twitter: '',
      commentary: '',
      isLiked: false,
      currentUser: ''
      }
  },
  async mounted() {
  await axios.get(url + 'detail/' + this.$route.params.item)
    .then((response) => {
      this.Blogs = response.data
      // console.log(this.Blogs.offers)
      if (this.Blogs.sold) {
        this.Blogs.description += "\n #ขายแล้ว"
        let likeButton = document.getElementById("like")
        let chatButton = document.getElementById("chat")
        let postButton = document.getElementById("post")
        likeButton.disabled = true
        chatButton.disabled = true
        postButton.disabled = true
      }
      // console.log(this.Blogs)
      axios.get(url + 'user/' + this.Blogs.author)
        .then((response) => {
          console.log(response.data[0])
          this.name = response.data[0].username
          this.pfp = response.data[0].picture_uri
          this.facebook = response.data[0].facebook
          this.twitter = response.data[0].twitter
        }).catch((error) => {
          console.error(error)
        })
      for (let i = 0; i < this.Blogs.offers.length; i++) {
        // console.log(this.Blogs.offers[i].commenter_uid)
        axios.get(url + 'user/' + this.Blogs.offers[i].commenter_uid)
          .then((response) => {
            // console.log(response.data[0])
            this.Blogs.offers[i].commenter_name = response.data[0].username
            this.Blogs.offers[i].commenter_pfp = response.data[0].picture_uri
            // console.log(this.Blogs.offers[i])
          }).catch((error) => {
            console.error(error)
          })
      }
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          //console.log("test " + user.uid + " " + this.Blogs.author)
          this.currentUser = user.uid
          if (this.Blogs.author == user.uid) {
            this.isOwner = true
          }
          else {
            this.isOwner = false
          }
          let index = this.Blogs.likes.indexOf(user.uid);
          if (index !== -1) {
            // console.log('found')
            this.isLiked = false
          }
          else {
            // console.log('not found')
            this.isLiked = true
          }
          // console.log(this.isOwner)
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

    return date.toLocaleDateString('th-TH', options);
  },
  confirmFinishPost: async function () {
    if (confirm("Are you sure?")) {
      this.Blogs.sold = true
      await axios.put(url + 'edit/' + this.$route.params.item, this.Blogs)
        .then((response) => {
          // console.log(response)
          let save = this.$route.params.item
          this.$router.push('/detail/' + save)
        })
        .catch((error) => {
          console.error(error);
        })
    }
  },
  relativeTime: function (t) {
    // console.log(t)
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
            // console.log(response.data)
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
  hitLike: function () {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        let index = this.Blogs.likes.indexOf(user.uid);
        if (index !== -1) {
          // console.log('found')
          this.isLiked = true
          this.Blogs.likes.splice(index, 1);
        }
        else {
          // console.log('not found')
          this.isLiked = false
          this.Blogs.likes.push(user.uid)
        }
        axios.put(url + 'edit/' + this.$route.params.item, this.Blogs)
          .then((response) => {
            // console.log(response.data)
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
  ChatwithAuthor(){
    this.$router.push('/chat/1/' + this.Blogs.author)
    axios.put(url + 'updateOrder/' + this.currentUser, this.Blogs)
          .then((response) => {
            console.log(response.data)
          })
          .catch((error) => {
            console.error(error)
          })
    // console.log(this.Blogs)
  },
  Currency: function (amount) {
    if (amount === 0) {
      return "ฟรี"
    }
    else {
      return amount
    }
  }
}
}

</script>

<style scoped>
@media only screen and (max-width: 767px) {
.categories {
    display: block;
}

.profile-box {
    width: auto;
}

.ms-auto {
    margin-right: 20%;
}

.smaller-img {
    max-width: 60%;
    height: auto;
}
}

@media only screen and (min-width: 768px) {
.categories {
    display: flex;
}

.profile-box {
  width: 60%;
}

.ms-auto {
  margin-right: 10%;
}

.smaller-img {
  max-width: 30%;
  height: auto;
}
}

.comment-info {
  display: flex;
  align-items: center;
}

.comment-info img {
  margin-right: 10px;
}

.liked {
  background-color: #ffb293 !important;
  color: #4e4e4e;
}

.cool-bg {
  background-image: linear-gradient(to top, #ffffff 50%, transparent);
}

.container {
  font-family: 'PT Serif', serif;
}

.profile-box {
  border: 0.3vh solid #ff7b00;
  border-radius: 4vh;
  padding: 2.5vh;
  /* width: 60%; */
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}

.p-img {
  width: 4vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.tez-border {
  border: 0.1vh solid #FB743E;
}

/* .smaller-img {
  max-width: 50%;
  height: auto;
} */

.small-circle {
  width: 5px;
  height: 5px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
}

.description {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

.orange-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: #FB743E;
}

.gray-line {
  border-top: 1px solid rgb(161, 161, 161);
  border-bottom: 1px solid gray;
  padding-top: 10px;
  padding-bottom: 10px;
}

.long-text {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.btn-primary:not(.liked) {
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
  /* margin-left: 4%; */
  /* margin-right: -1%; */
  font-weight: 700;
  /* background-color: #fb743e; */
  padding: 0.5em 0;
}

.tez-btn:focus {
  border-color: rgb(251, 116, 62);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 10px rgba(251, 90, 62, 0.7);
}

.fa {
  font-size: 200%;
}

.ms-auto {
  /* margin-right: 10%; */
  display: flex;
  gap: 80%;
}
</style>
