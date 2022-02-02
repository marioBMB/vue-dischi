<template>
  
  <div class="spotify-logo">
      <img :src="img" alt="spotify-logo">
  </div>
</template>

<script>
    export default {
        name: "SpotifyLogo",
        props: {
            img: String
        }
    }
</script>

<style lang='scss'>

    .spotify-logo {
        width: 50px;
        height: 50px;
        margin: 0 20px;
    }

    .spotify-logo img {
        height: 100%;
    }
</style>