<script setup>
import LatestPost from '../components/LatestPost.vue'
</script>

<template>
  <main>
    <h1 class="text text-center">
       <span class="underline"> Reward </span>  
       <span> Post </span>
      </h1>
    <LatestPost/>
  </main>
</template>

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