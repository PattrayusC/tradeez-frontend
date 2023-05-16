<script setup>
import LatestPost from '../components/LatestPost.vue'
</script>

<template>
  <main style="background-color: #f5f5f5">
    <h1 class="text text-center">
      <span class="underline"> My </span>
      <span> Order </span>
    </h1>
    <LatestPost :latest="this.latestBlog" />
  </main>
</template>

<script>
import axios from 'axios'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const URL = "http://127.0.0.1:5000/"

export default {
  name: 'home',
  data() {
    return {
      latestBlog: [],
      currentUser: [],
      auth: getAuth()
    }
  },
  async mounted() {
    await onAuthStateChanged(this.auth, (user) => {
      if (user) {
        axios.get(URL + 'user/' + user.uid).then((response) => {
          this.currentUser = response.data[0]
          console.log(this.currentUser)
          axios.post(URL + 'getManyBlog',response.data[0].orderBlog).then((response) => {
            this.latestBlog = response.data
            console.log(this.latestBlog)
          }).catch((error) => {
            console.log(error)
          })
        }).catch((error) => {
          console.log(error)
        })
      }
      else {
        this.$router.push('/')
      }
    })
    // for (let i = 0; i < this.latestBlog.length; i++) {
    //   this.latestBlog[i].time = this.convertTime(this.latestBlog[i].time)
    //   await axios.get(URL + 'user/' + this.latestBlog[i].author)
    //     .then((response) => {
    //       this.latestBlog[i].author_name = response.data[0].username
    //       console.log(this.latestBlog[i].author_name)
    //     }).catch((error) => {
    //       console.log(error)
    //     })
    // }
  }, methods: {
    convertTime: function (datetime) {
      let date = new Date(datetime);

      let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Bangkok'
      };

      return date.toLocaleDateString('en-GB', options);
    },
  }
}
</script>

<style scoped>
.text {
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 56px;
  color: #272343;
}

.underline {
  text-decoration: underline;
  text-decoration-color: #FB743E;
  text-decoration-thickness: 4px;
}
</style>