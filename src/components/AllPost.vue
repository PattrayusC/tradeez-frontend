<template>
  <div class="all">
    <h1 class="text">
      <span class="underline"> All </span>
      <span> Post </span>
    </h1>
    <div class="row">
      <div class="search container col-12 col-md-12 col-lg-4 order-1 order-md-2 order-lg-last" style="margin-top: 5%">
        <div class="input-group rounded">
          <span class="input-group-text border-0" id="search-addon">
            <i class="bi bi-search"></i>
          </span>
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" v-model="this.search" />
        </div>
        <br />
        <div class="container category">
          <span class="tag tez-title underline">Category</span>
          <div><br /></div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Computer" id="flexCheckDefault" v-model="this.cata" />
            <label class="form-check-label" for="flexCheckDefault">
              <span class="tez-title" style="font-size: 17px"> Computer</span>
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Food" id="flexCheckDefault" v-model="this.cata" />
            <label class="form-check-label" for="flexCheckDefault">
              <span class="tez-title" style="font-size: 17px"> Food</span>
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Fashion" id="flexCheckDefault" v-model="this.cata" />
            <label class="form-check-label" for="flexCheckDefault">
              <span class="tez-title" style="font-size: 17px"> Fashion</span>
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Kid" id="flexCheckDefault" v-model="this.cata" />
            <label class="form-check-label" for="flexCheckDefault">
              <span class="tez-title" style="font-size: 17px"> Kid</span>
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Game" id="flexCheckDefault" v-model="this.cata" />
            <label class="form-check-label" for="flexCheckDefault">
              <span class="tez-title" style="font-size: 17px"> Game</span>
            </label>
          </div>
        </div>
      </div>
      <br/>
      <div class="all-card background container col-12 col-md-12 col-lg-8 order-2 order-md-10 order-lg-first"
        style="margin-left: 0%">
        <div class="all-card background" style="margin-left: 0%" v-for="aallblog in filterBlog" v-bind="aallblog.id">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  :src="`${aallblog.product_img}`"
                  class="card-img-top d-block c-img" alt="" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="blockquote-footer mt-1 fs-6 tez-mc">
                    <text class="tez-mc-author">{{aallblog.author_name}}</text>
                  </p>
                  <h5 class="card-title tez-title">
                    {{ aallblog.product_name }}
                  </h5>
                  <p class="card-text">{{aallblog.time}}</p>
                  <br v-show="alatest.categories.length == 0"/>
                  <div class="row">
                <div class="col-auto" v-for="cate in aallblog.categories" v-bind="aallblog.id">
                  <span class=" card-text text-truncate">• {{ cate }}</span>
                </div>
              </div>
            <br/>
                  <p class="card-text description">ราคา {{aallblog.price}} บาท</p>
                  <p class="card-text description"><span> </span></p>
                  <RouterLink :to="`detail/${aallblog._id}`">
                  <button class="btn btn-primary px-4 py-2 fs-6 tez-btn">
                    Read More
                  </button>
                </RouterLink>
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
  name: "home",
  props: {
    allblog: Array,
  },
  data() {
    return {
      Blog: [],
      search: "",
      cata: [],
    };
  },
  computed: {
    filterBlog: function () {
      let x;
      let y;
      let check = true;
      // console.log(this.cata);
      x = this.allblog.filter((allblog) => {
        return allblog.product_name
          .toLowerCase()
          .match(this.search.toLowerCase());
      });
      // console.log(x);
      if (this.cata.length > 0) {
        y = x.filter((allblog) => {
          // console.log(allblog);
          check = false;
          // console.log("set check");
          // console.log("check" + check);
          for (let i = 0; i < allblog.categories.length; i++) {
            // console.log(this.cata + " == " + allblog.categories[i]);
            // console.log(this.cata.includes(allblog.categories[i]));
            if (this.cata.includes(allblog.categories[i])) {
              check = true;
              // console.log("find same =>" + check);
            }
          }
          return check;
        });
        // console.log(y);
        return y;
      } else {
        return x;
      }
    },
  },
};
</script>

<style scoped>
.all {
  margin-top: 4%;
}

.all-card,
.search {
  margin-top: 3%;
}

.tez-card {
  margin-top: 5%;
  border: none;
}

.text {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 56px;
  color: #272343;
}

.underline {
  text-decoration: underline;
  text-decoration-color: #fb743e;
  text-decoration-thickness: 4px;
}

.background {
  background-color: #f5f5f5;
}

.c-item {
  height: 480px;
}

.c-img {
  height: 292px;
  object-fit: cover;
  display: block;
}

.btn-primary {
  background-color: #fb743e !important;
}

.btn-primary:visited,
.btn-primary:hover,
.btn-primary:active,
.btn-primary::backdrop {
  background-color: #d44911 !important;
}

.tez-title {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  color: #272343;
  text-align: left;
}

.tez-title2 {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 120%;
  color: #fb743e;
  text-align: left;
}

.tez-btn {
  border: none;
  width: auto;
  height: auto;
}

.tez-mc {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 600;
  color: #fb743e;
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
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #6d7280;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
