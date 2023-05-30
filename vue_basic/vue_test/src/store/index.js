import Vue from 'vue'
import Vuex from 'vuex'
import { nanoid } from 'nanoid'
Vue.use(Vuex)

const actions = {
    // context ===minstore
    addStudent(context, value) {
        if (value) {
            const studentObj = { id: nanoid(), name: value }
            console.log(studentObj);
            context.commit('ADDSTUDENT', studentObj)
        } else {
            alert('输入不能为空')
        }
    }
}
const mutations = {
    SETSTUDENTLIST(_, students) {
        localStorage.setItem('student', JSON.stringify(students))
    },
    ADDSTUDENT(state, studentObj) {
        state.studentList.unshift(studentObj)
    },
    REMOVESTUDENT(state, id) {
        state.studentList = state.studentList.filter((item) => {
            return item.id != id
        })
    }
}
const state = {
    studentList: JSON.parse(localStorage.getItem('student')) || []
}
const getters = {}


export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})