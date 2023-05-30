import axios from "axios";
import { nanoid } from "nanoid";

// 人员管理相关的配置
export default {
    namespaced: true,
    actions: {
        addWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('请输入一个性王的学生')
            }
        },
        addPersonServe(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log("mutations中的ADD_PERSON被调用了", this);
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        getFirstName(state) {
            return state.personList[0].name
        }
    },
}