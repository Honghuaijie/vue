// 该文件用于创建Vuex中最为核心的store

//引入Vuex，为了创建Vuex.Store
import Vue from 'vue'
import Vuex from 'vuex'
// 使用了Vuex，才能在vm和vc上找到store属性,并且才能创建store
Vue.use(Vuex)
// 准备Actions——用于响应组件中的动作
const actions = {
    // context=minstore
    // jia(context, value) {
    //     // console.log("action中的jia被调用了", context, value);
    //     context.commit("JIA", value)
    // },
    // jian(context, value) {
    //     console.log("action中的jian被调用了", context, value);
    //     context.commit("JIAN", value)
    // },
    jiaOdd(context, value) {
        console.log("action中的jiaOdd被调用了", this);
        if (context.state.sum % 2) {
            context.commit("JIA", value)
        }
    },
    jiaWait(context, value) {
        console.log("action中的jiaWait被调用了", context, value);
        setTimeout(() => {
            context.commit("JIA", value)
        }, 500);
    }
}
// 准备mutations——用于操作数据（state）
const mutations = {
    JIA(state, value) {
        console.log("mutations中的JIA被调用了", this);
        state.sum += value
    },
    JIAN(state, value) {
        console.log("mutations中的JIAN被调用了", this);
        state.sum -= value
    },
}

// 准备state——用于存储数据（state）
const state = {
    sum: 1,   //当前的和
    school: '南科院',
    subject: '前端'
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露store,并传入配置对象
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state,  //对象的简写形式
    getters
})