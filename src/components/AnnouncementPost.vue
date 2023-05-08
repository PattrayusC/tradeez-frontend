
<template>
  <div class="announce">
    <body>
      <div id="post-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#post-carousel" data-bs-slide-to="0" class="active" aria-current="true"
            aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#post-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#post-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active c-item">
            <img src="https://down-th.img.susercontent.com/file/1dca365468f0ebedaa6b22925285cce0" class="d-block w-50 c-img" alt="Slide 1">
            <div class="carousel-caption top-0 mt-4">
              <div class="card border-0">
                <div class="card-body d-flex flex-column">
                  <p class="blockquote-footer mt-5 fs-6 tez-mc"> <text class="tez-mc-author ">Admin</text></p>
                  <h5 class="card-title tez-title text-truncate">ตุ๊กตาจรเข้น่ารักตะมุตะมิ</h5>
                  <h6 class="card-subtitle mb-2 tez-title2 text-truncate">พร้อมให้แลกแล้ววันนี้</h6>
                  <p class="card-text">March 5,2023 - 4 Like</p>
                  <p class="card-text description" style="max-width: 800px;">ผู้ที่สนใจสามารถแลกได้ โดยใช้เพียง 300 คะแนน พร้อมกับค่าส่ง 100 บาท สินค้าพร้อมส่งถึงบ้านคุณ </p>
                  <button class="btn btn-primary px-4 py-2 fs-6 tez-btn ">Read More</button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="carousel-item c-item">
            <img src="https://rukminim1.flixcart.com/image/416/416/kufuikw0/stuffed-toy/m/i/y/crocodile-stuffed-plush-soft-toy-for-kids-80-cm-80-patly-original-imag7kb7waj9jzbg.jpeg?q=70" class="d-block w-0 c-img" alt="Slide 2">
            <div class="carousel-caption top-0 mt-4">
              <div class="card border-0" >
                <div class="card-body d-flex flex-column">
                  <p class="blockquote-footer mt-5 fs-6 tez-mc"> <text class="tez-mc-author ">Admin</text></p>
                  <h5 class="card-title tez-title text-truncate">ตุ๊กตาจรเข้น่ารักตะมุตะมิ</h5>
                  <h6 class="card-subtitle mb-2 tez-title2 text-truncate">พร้อมให้แลกแล้ววันนี้</h6>
                  <p class="card-text">March 5,2023 - 4 Like</p>
                  <p class="card-text description" style="max-width: 800px;">ผู้ที่สนใจสามารถแลกได้ โดยใช้เพียง 300 คะแนน พร้อมกับค่าส่ง 100 บาท สินค้าพร้อมส่งถึงบ้านคุณ </p>
                  <button class="btn btn-primary px-4 py-2 fs-6 tez-btn " >Read More</button>
                </div>
              </div>
            </div>
          </div>
         
          <div class="carousel-item c-item">
            <img src=" https://cdn1.takatomo.de/media/catalog/product/g/l/global-affairs-kuscheltier-krokodil-9523258.jpg" class="d-block w-50 c-img" alt="Slide 3">
            <div class="carousel-caption top-0 mt-4">
              <div class="card border-0">
                <div class="card-body d-flex flex-column">
                  <p class="blockquote-footer mt-5 fs-6 tez-mc"> <text class="tez-mc-author ">Admin</text></p>
                  <h5 class="card-title tez-title text-truncate">ตุ๊กตาจรเข้น่ารักตะมุตะมิ</h5>
                  <h6 class="card-subtitle mb-2 tez-title2 text-truncate">พร้อมให้แลกแล้ววันนี้</h6>
                  <p class="card-text">March 5,2023 - 4 Like</p>
                  <p class="card-text description" style="max-width: 800px;">ผู้ที่สนใจสามารถแลกได้ โดยใช้เพียง 300 คะแนน พร้อมกับค่าส่ง 100 บาท สินค้าพร้อมส่งถึงบ้านคุณ </p>
                  <button class="btn btn-primary px-4 py-2 fs-6 tez-btn ">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <button class="carousel-control-prev" type="button" data-bs-target="#post-carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#post-carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> -->
      </div>
    </body>
  </div>
</template>
  
<script>

</script>

<style scoped>

.carousel-inner{
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
.card{
  width: 35rem; 
  height: 25rem; 
  color: black;
  left: -5%;
  bottom: 3%;
}
.card-text{
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
.tez-title{
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  color: #272343;
  text-align: left;
}
.tez-title2{
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
  text-align:left;
}
.description{
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