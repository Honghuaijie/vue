// 该文件用于创建Vuex中最为核心的store

//引入Vuex，为了创建Vuex.Store
import Vue from 'vue'
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
// 使用了Vuex，才能在vm和vc上找到store属性,并且才能创建store
Vue.use(Vuex)




// 创建并暴露store,并传入配置对象
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }

})