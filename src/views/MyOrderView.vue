<template>
  <main>
    <h1 class="text text-center">
       <span class="underline"> My </span>  
       <span> Order </span>
      </h1>
    <LatestPost/>
  </main>
</template>

<style scoped>
.tez-card{
  margin-top: 5%;
  border:none;
}
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
.background{
  background-color: #F5F5F5;
}
.c-item{
  height: 480px;
}
.c-img {

height: 292px;
object-fit:cover;
display: block;
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
font-size: 28px;
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
width: auto;
height: auto;
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
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #6D7280;
text-align: left;
display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>