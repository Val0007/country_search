<template>
    <div class="home">
        <div class="home__tabs">
            <div class="home__tabs__search">
                <input type="text" placeholder="Enter a Country..." v-model="searchText" v-on:keyup.enter="search">
            </div>
            <div class="home__tabs__filter">
                <select class="filter"  @change="filterfunc($event)">
                <option value="asia">Asia</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="europe">Europe</option>
                </select>
            </div>

        </div>
        
        <div class="display">
                <component :is="comp"></component>
        </div>
    </div>
</template>



<script>
import Loader from './Loader.vue'
import display from './Display.vue'
export default {
    data(){
        return{
            filter:"asia",
            searchText:"",
            comp:'app-display'
        }
    },
    methods:{
        filterfunc:function(event){
            console.log(event.target.value);
            var country = event.target.value;
            this.$store.dispatch('getCountries',country);
            this.comp = 'app-loader';
            setTimeout(()=>{
                this.comp = 'app-display';
                console.log(this.$store.state.countries);
            },1500);
        },
        search:function(){
            if(this.searchText.length>1){
                this.$store.dispatch('getCountry',this.searchText);
                this.searchText="";
                this.comp = 'app-loader';
                setTimeout(()=>{
                this.comp = 'app-display';
                console.log(this.$store.state.countries);
            },1500);
            }
            
        }
    },
    components:{
        'app-loader':Loader,
        'app-display':display
    }
    
}
</script>


<style lang="scss">
    .home{
        height: 89%;
        width: 100%;
        background-color: hsl(0, 0%, 98%);
        
        &__tabs{
            display: flex;
            width: 100%;
            height:100px;
            padding: 20px;
            justify-content: space-between;
            align-items: center;

            &__search input{
                height:50px;
                width:300px;
                border:none;
                outline:none;
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                border-radius: 2px;
                padding: 10px;
                font-family: "Nunito Sans";
                &::-webkit-input-placeholder{
                    color:rgba(0,0,0,0.4);
                }
                &::placeholder{
                    color:rgba(0,0,0,0.4);
                }
            }

            &__filter select{
                height: 45px;
                width: 150px;
                border:none;
                outline:none;
                font-family: "Nunito Sans";
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                padding: 10px;
                
                & option{
                    font-size: 16px;
                }

            }
        }

    

    }
    .display{
        height: 535px;
        width: 97.5%;
        
    }
</style>