<template>
    <div class="main">
        <div class="main__button">
            <router-link to="/" tag='div'>Back</router-link>
        </div>
        <div class="main__content">
            <div class="main__content__flag">
                <img :src="country.flag" alt="">
            </div>
            <div class="main__content__info">
                <h1>{{country.name}}</h1>
                <div class="main__content__info__info">
                    <div>
                        <h4>Native Name: {{country.nativeName}}</h4>
                        <h4>Population: {{country.population}}</h4>
                        <h4>Region: {{country.region}}</h4>
                        <h4>SubRegion: {{country.subregion}}</h4>
                        <h4>Capital: {{country.capital}}</h4>
                    </div>
                    <div>
                        <h4>Top Level Domain: {{country.topLevelDomain[0]}}</h4>
                        <h4>Currencies: {{country.currencies[0].name}}</h4>
                        <h4>Languages: {{country.languages[0].name}}</h4>

                    </div>
                </div>
                <div class="main__content__info__border">
                    <h3>Border Countries:</h3>
                    <div v-for="a in country.borders">{{a}}</div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data(){
        return{
            country:{}
        }
    },
    created(){
        this.country = this.$store.state.country;
    }
}
</script>




<style lang="scss">
    .main{
        height: 89%;
        width: 100%;
        background-color: hsl(0, 0%, 98%);
        padding: 30px;

        &__button{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            color: black;
            background-color: white;
            border-radius: 2px;
            height: 30px;
            width: 120px;
            padding: 8px 15px;
            text-align: center;
            box-shadow: 0 1px 5px rgba(0,0,0,0.4);
            margin-top: 30px;
        }

        &__content{
            margin-top: 40px;
            
            height: 500px;
            width:100% ;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap: 30px;


            &__info{
                padding: 20px;


                &__info{
                    display: flex;
                    justify-content: space-between;
                    padding-right: 50px;
                    align-items: center;
                }
                &__info h4{
                    font-size:14px;
                    color:rgba(0,0,0,0.4);
                    margin-bottom: 15px;
                }
                &__info div:nth-child(2){
                    margin-top: -50px;
                    
                }

                &__border h3{
                    font-size: 14px;
                    color:rgba(0,0,0,0.8);
                    
                }
                &__border{
                    display: flex;
                    justify-content: start;
                    align-items: center;

                }
                &__border div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    border:0.3px solid rgba(0,0,0,0.2);
                    box-shadow: 0 1px 1px rgba(0,0,0,0.2);
                    border-radius: 4px;
                    margin-left: 8px;
                    background-color: white;
                    height: 20px;
                    padding: 5px 10px;
                }
            }
            &__info h1{
                font-size: 40px;
                margin-bottom: 15px;
            }

            &__flag{
                height: 300px;
            

            }
            &__flag img{
                display: inline-block;
                height: 100%;
                width: 100%;
            }



        }

    }
</style>