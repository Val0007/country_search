<template>
    <div class="displayview">
        <app-card v-for="count in countries" :country="count" @clicked='showLoader' v-if="show==false"></app-card>
        <div v-if="show" class="a">
            <app-loader ></app-loader>
        </div>
        
    </div>
</template>

<script>
import Card from './CountryCard.vue';
import Loader from './Loader.vue';
export default {
    components:{
        'app-card':Card,
        'app-loader':Loader
    },
    data(){
        return{
            countries:[],
            show:false
        }
    },
    methods:{
        showLoader:function(){
            this.show=true;
            console.log('got it');
        }

    },
    created(){
        
        setTimeout(()=>{
            this.countries = this.$store.state.countries;
        },1000);
        

    }
    
}
</script>

<style lang="scss">
    .displayview{
        position: relative;
        height:100%;
        width: 102.5%;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 30px;
        padding-left: 35px;
        overflow-y: scroll;

        &::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        }

        &::-webkit-scrollbar{
        width: 10px;
        background-color: #F5F5F5;
        }

      &::-webkit-scrollbar-thumb{
    background-color: #000000;
    border: 2px solid #555555;
    }

    }

    .a{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 5;
        opacity: 0.7;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>