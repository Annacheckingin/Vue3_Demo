<template>
    <div class="home-page">
      <img :src="logoImage" alt="App Logo" class="logo" />
      <h1>Welcome</h1>
    </div>
  </template>
  
  <script >
  import logoImage from "@/assets/logo.png";

  export default {
    name: "HomePage",
    data() {
    return {
      logoImage
    }
  },
   }
  </script>
  
  <style scoped>
 /* Add styles here */

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

  </style>