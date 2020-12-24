import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // namespaced: true,
    state:{
        name: "李玉居",
    },
    mutations:{
        // 赋值
        getname(state,name){
            state.name = name;
        },
    },
    actions:{
        getname({commit},name){
            commit('getname',name)
        }
    }
})