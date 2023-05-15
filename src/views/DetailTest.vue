<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-12 col-md-12 col-lg-12">
                <div class="image-container text-center">
                    <img :src="`${this.Blogs.product_img}`" class="img-fluid smaller-img" />
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-12">
                <div class="profile-box mt-3">
                    <p class="blockquote-footer mt-2 fs-6 tez-mc">
                        <text class="tez-mc-author">{{ this.name }}</text>
                        <h1 class="text-truncate">{{ this.Blogs.product_name }}</h1>
                    </p>
                    <div class="d-flex align-items-center">
                        <img :src="`${this.pfp}`" class="d-block p-img tez-border" />
                        <div class="d-flex flex-column ms-2">
                            <p v-for="category in this.Blogs.categories" class="mb-0">
                                {{ category }}
                            </p>
                            <span class="small-circle"></span>
                            <span class="badge bg-secondary rounded-circle"></span>
                            {{ convertTime() }}
                        </div>
                        <div class="ms-auto">
                            <a href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook-official ms-2"></i></a>
                            <a href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter ms-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-12 mt-3">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-2">
                        <div class="d-flex align-items-center">
                            <i class="fa fa-thumbs-up me-4"></i>
                            <p v-if="Blogs && Blogs.likes" class="mb-0">{{ this.Blogs.likes.length }} likes</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-8">
                        <h2>{{ this.Blogs.product_name }}</h2>
                        <div class="description">
                            <div class="orange-line"></div>
                            <p class="long-text">{{ this.Blogs.description }}</p>
                        </div>
                        <h3>ราคา {{ this.Blogs.price }} บาท</h3>
                        <h3>ค่าส่ง {{ this.Blogs.shipping_cost }} บาท</h3>
                        <div class="mt-2 gray-line">
                            <div class="button-container">
                                <button v-if="!isOwner" class="btn btn-primary mt-3 tez-btn" id="like" @click="hitLike()">Like</button>
                                <button v-else class="btn btn-primary mt-3 tez-btn" @click="$router.push('/edit/' + this.$route.params.item)">Edit Post</button>
                                <button v-if="!isOwner" class="btn btn-primary mt-3 tez-btn" id="chat">Chat</button>
                                <button v-else class="btn btn-primary mt-3 tez-btn" @click="confirmFinishPost">Finish Post</button>
                            </div>
                        </div>
                        <div v-if="!isOwner" class="d-flex align-items-center mt-3">
                            <p class="me-2">Send Offer</p>
                            <input type="text" placeholder="Offer Price" class="me-2 inputOffer" v-model="this.commentary" />
                            <button class="btn btn-primary mt-3 tez-btn" @click="submitForm" >Post Offer</button>
                        </div>
                        <h6 v-if="Blogs && Blogs.offers">Offer ({{ this.Blogs.offers.length }})</h6>
                        <div class="comment-box" v-for="offer in this.Blogs.offers" :key="offer.id">
                            <div class="comment-header">
                                <img :src="`${offer.commenter_pfp}`" class="d-block p-img tez-border">
                                <div class="comment-info">
                                    <p class="comment-name">{{ offer.commenter_name }}</p>
                                    <p class="comment-date">{{ relativeTime(offer.time) }}</p>
                                </div>
                            </div>
                            <p class="comment-description">{{ offer.description }}</p>
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
            this.facebook = response.data[0].facebook
            this.twitter = response.data[0].twitter
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
            let index = this.Blogs.likes.indexOf(user.uid);
            if (index !== -1) {
              // console.log('found')
              this.isLiked = false
            }
            else {
              // console.log('not found')
              this.isLiked = true
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

      return date.toLocaleDateString('th-TH', options);
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
    hitLike: function () {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          let index = this.Blogs.likes.indexOf(user.uid);
          if (index !== -1) {
            console.log('found')
            this.isLiked = true
            this.Blogs.likes.splice(index, 1);
          }
          else {
            console.log('not found')
            this.isLiked = false
            this.Blogs.likes.push(user.uid)
          }
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
    }
  }
}
</script>

<style scoped>
.profile-box {
    border: 1px solid orange;
    border-radius: 10px; padding: 10px;
    max-width: 400px; /* Adjust the width as desired */
    margin-left: auto;
    margin-right: auto;
}

.p-img {
    width: 4vh;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    display: block;
}

.tez-border {
    border: 0.1vh solid rgb(105, 104, 103);
}

.smaller-img {
    max-width: 30%; /* Allow the image to scale down */
    height: auto;
}

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
    background-color: orange;
}

.gray-line {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding-top: 10px;
    padding-bottom: 10px;
}

.button-container {
    display: flex;
    gap: 10px; /* Adjust the gap as desired */
}

.long-text {
    white-space: pre-wrap;
    word-wrap: break-word;
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
</style>
