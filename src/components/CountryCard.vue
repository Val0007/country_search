<template>
    <div class="card" @click="gotoCountry">
        <div class="card__img">
            <img :src="country.flag" alt="flag">
        </div>
        <div class="card__data">
            <div class="card__data__heading">
                <h2>{{country.name}}</h2>
            </div>
            <div class="card__data__content">
                <h4>Capital : {{country.capital}}</h4>
                <h4>Region : {{country.region}}</h4>
                <h4>Population : {{pop(country.population)}}</h4>
            </div>

        </div>
        
    </div>
</template>


<script>
export default {
    props:['country'],
    data(){
        return{
            
        }
    },
    methods:{
        pop:function(population){
            return  String(population).replace(/(.)(?=(\d{3})+$)/g,'$1,')
        },
        gotoCountry:function(){
            this.$store.dispatch('getSpecificCountry',this.country.alpha3Code);
            this.$emit('clicked','tt');
            // this.$router.push(`/${this.country.name}`)
            setTimeout(()=>{
                console.log(this.$store.state.country);
                this.$router.push(`/${this.country.name}`)
            },1500)
        }
    }
}
</script>


<style lang="scss">
    .card{
        height:310px;
        width: 220px;
        background-color: black;
        border-radius: 8px;
        background-color: white;
        box-shadow: 0 1px 1px rgba(0,0,0,0.3);
        cursor: pointer;
        &__img{
            height: 55%;
            width: 100%;
        }
        &__img img{
            display: inline-block;
            height: 100%;
            width: 100%;
        }
        &__data{
            padding: 13px;
            display: flex;
            flex-direction: column;
            justify-content: start;
            
            &__heading{
                margin-bottom: 15px;
                font-weight: 900;
            }
            &__content{
                color:rgba(0,0,0,0.6)
            }
        }
    }
</style>