import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries:[],
    country:[]
  },
  mutations: {
    
  },
  actions: {
    getCountries:({context,state},payload)=>{
      fetch(`https://restcountries.eu/rest/v2/region/${payload}`).then(res=>res.json()).then(res=>{
        state.countries = res;
      })
    },
    getCountry:({context,state},payload)=>{
      fetch(`https://restcountries.eu/rest/v2/name/${payload}`).then(res=>res.json()).then(res=>{
        state.countries = res;
      })
    },
    getSpecificCountry:({context,state},payload)=>{
      fetch(`https://restcountries.eu/rest/v2/alpha/${payload}`).then(res=>res.json()).then(res=>{
        state.country = res;
        
      })
    }


  },
  modules: {
  }
})
