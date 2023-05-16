
<template>
  <div class="announce" style="background-color: #F5F5F5;">

    <body style="background-color: #F5F5F5;">
      <div>
      <div id="post-carousel" class="carousel slide" data-bs-ride="carousel" >
        <div class="carousel-indicators">
          <button type="button" v-for="(aannounce, index) in announce" :key="index" :data-bs-target="`#post-carousel`" :data-bs-slide-to="index" :class="{ active: index === 0}"></button>
        </div>
        <div class="carousel-inner ">
          <!-- class="carousel-item active c-item" -->
          <div v-for="(aannounce, index) in announce" :key="index" :class="{'carousel-item': true, active: index === 0}" style="height: 480px;"> 
            <img :src="`${aannounce.product_img}`"
              class="d-block w-50 c-img" :alt="`Slide ${index}`">
            <div class="carousel-caption top-0 mt-4">
              <div class="card border-0">
                <div class="card-body d-flex flex-column">
                  <p class="blockquote-footer mt-5 fs-6 tez-mc"> <text class="tez-mc-author ">{{ aannounce.author_name }}</text></p>
                  <h5 class="card-title tez-title text-truncate">{{aannounce.product_name}}</h5>
                  <h6 class="card-subtitle mb-2 tez-title2 text-truncate">พร้อมให้แลกแล้ววันนี้</h6>
                  <p class="card-text">{{ aannounce.time }}</p>
                  <p class="card-text description" style="max-width: 800px;">{{aannounce.description}}</p>
                  <RouterLink :to="`detail/${aannounce._id}`">
                    <button class="btn btn-primary px-4 py-2 fs-6 tez-btn">Read More</button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </body>
  </div>
</template>
  
<script>
export default {
  name: 'home',
  props: {
    announce: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.carousel-inner {
  height: 580px;
}

.carousel-indicators [data-bs-target] {
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #FB743E;

}

.carousel-indicators {
  bottom: 15%;
  left: -35%;
}

.card {
  width: 35rem;
  height: 25rem;
  color: black;
  left: -5%;
  bottom: 3%;
}

.card-text {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #6D7280;
  text-align: left;
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

.tez-title {
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  color: #272343;
  text-align: left;
}

.tez-title2 {
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 120%;
  color: #FB743E;
  text-align: left;
}

.tez-btn {
  border: none;
  width: 145px;
  height: 48px;
}

.tez-mc {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 600;
  color: #FB743E;
  text-align: left;

}

.tez-mc-author {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 100;
  font-size: 15px;
  color: #000000;
  text-align: left;
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.c-item {
  height: 480px;
}

.c-img {
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  display: block;
  margin-left: auto;
  margin-right: 0;
}</style>