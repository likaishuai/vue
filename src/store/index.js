import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        //搜索的热词
        searchHot:[],
        //详情页的问题
        questions:[]

    },

    getters: {
        getHotWords(state) {
            return state.searchHot
        },
        getQuestions(state) {
            return state.questions
        },
    },

    mutations:{
        setSearchHot(state,hotData){
            state.searchHot = hotData
        },
        setQuestions(state,question){
            state.questions = question
        }
    },

    actions: {
        getSearchHot(context,hotData){
            context.commit('setSearchHot',hotData)
        },
        getQuestions(context,question){
            context.commit('setQuestions',question)
        }
    }

})
