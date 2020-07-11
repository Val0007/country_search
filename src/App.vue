<template>
  <div class="app">
    <app-header></app-header>
    <router-view ></router-view>
    
  </div>

</template>



<script>
import header from './components/Header.vue'
export default {
  components:{
    'app-header':header
  },
  created(){
    this.$store.dispatch('getCountries','asia');
    setTimeout(()=>{
      console.log(this.$store.state.countries);
    },2000)
  }
  
}
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html{
    font-size: 10px;
  }
  body{
    font-family: "Nunito Sans",sans-serif;
  }
  .app{
    height: 90vh;
    width: 80%;
    margin: 50px auto 0 auto;
    border-radius: 4px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.4);
  }

  @media screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px){ 
    .app{
      height: 100vh !important;
      width: 100% !important;
      margin: 0 !important;

    }
}
</style>