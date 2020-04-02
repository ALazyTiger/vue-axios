import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = { //要设置的全局访问的state对象
    isLogin: false,
    token: '112233' //要设置的初始属性值
};
const getters = { //实时监听state值的变化(最新状态)
    islogin(state) {
        return state.isLogin
    },
    getToken() {
        return state.token
    }
};
const mutations = {
    changeislogin(state, payload) {
        state.isLogin = payload.isLogin;
    },
    changeToken(state, payload) {
        state.token = payload.token;
    }
};
export default new Vuex.Store({
    state,
    getters,
    mutations
})