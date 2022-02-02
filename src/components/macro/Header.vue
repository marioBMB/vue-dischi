<template>
  
  <header>
    <SpotifyLogo :img="require('../../assets/img/logo-small.svg')"/>
  </header>
</template>

<script>
  
  import SpotifyLogo from "../commons/SpotifyLogo.vue";

  export default {
    name: 'Header',
    components: {
      SpotifyLogo
    },
    data(){
      return {
      }
    }
   
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/style/vars.scss";

  header {
      background-color: $lightIndigoGrey;
      height: 80px;
      display: flex;
      align-items: center;
  }
  
</style>
