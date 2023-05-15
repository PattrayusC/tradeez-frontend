<script setup>
import AnnouncementPost from '../components/AnnouncementPost.vue'
import LatestPost from '../components/LatestPost.vue'
import AllPost from '../components/AllPost.vue'
</script>

<template>
  <main>
    <AnnouncementPost />
    <h1 class="text">
      <span class="underline"> Latest </span>
      <span> Post </span>
    </h1>
    <LatestPost :latest="this.latestBlog" />
    <AllPost  :allblog="this.allBlog"/>
  </main>
</template>

<script>
import axios from 'axios'
import { getAuth, onAuthStateChanged, updatePassword } from 'firebase/auth'

const URL = "http://127.0.0.1:5000/"

export default {
  name: 'home',
  data() {
    return {
      announceBlog: [],
      latestBlog: [],
      allBlog: [],
      auth: getAuth()
    }
  },
  async mounted() {
    await axios.get(URL + 'latest').then((response) => {
      this.latestBlog = response.data
      console.log(this.latestBlog)
    }).catch((error) => {
      console.log(error)
    })
    for(let i=0; i<this.latestBlog.length;i++){
     this.latestBlog[i].time = this.convertTime(this.latestBlog[i].time)
    }
    await axios.get(URL + 'allblog').then((response) => {
    this.allBlog = response.data
    }).catch((error) => {
      console.log(error)
    })
  },methods : {
    convertTime: function (datetime) {
      let date = new Date(datetime);

      let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };

      return date.toLocaleDateString('en-TH', options);
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