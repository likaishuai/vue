import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
         searchHot:[]
    },

    getters: {
        getHotWords(state) {
            return state.searchHot
        }
    },

    mutations:{
        setSearchHot(state,hotData){
            state.searchHot = hotData
        }
    },

    actions: {
        getSearchHot(context,hotData){
            context.commit('setSearchHot',hotData)
        }
    }

})
