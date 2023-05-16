<script setup>
import LatestPost from '../components/LatestPost.vue'
</script>

<template>
  <main>
    <h1 class="text text-center">
       <span class="underline"> My </span>  
       <span > Order </span>
      </h1>
    <LatestPost :latest="this.latestBlog"/>
  </main>
</template>

<script>
import axios from 'axios'
import { getAuth} from 'firebase/auth'

const URL = "http://127.0.0.1:5000/"

export default {
  name: 'home',
  data() {
    return {
      latestBlog: [],
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
    for (let i = 0; i < this.latestBlog.length; i++) {
      this.latestBlog[i].time = this.convertTime(this.latestBlog[i].time)
      await axios.get(URL + 'user/' + this.latestBlog[i].author)
        .then((response) => {
          this.latestBlog[i].author_name = response.data[0].username
          console.log(this.latestBlog[i].author_name)
        }).catch((error) => {
          console.log(error)
        })
    }
  },methods: {
    convertTime: function (datetime) {
      let date = new Date(datetime);

      let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Bangkok'
      };

      return date.toLocaleDateString('en-GB',options);
    },
  }
}
</script>

<style scoped>
.text{
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 56px;
  color: #272343;
}
.underline{
  text-decoration: underline;
  text-decoration-color: #FB743E;
  text-decoration-thickness: 4px;
}
</style>