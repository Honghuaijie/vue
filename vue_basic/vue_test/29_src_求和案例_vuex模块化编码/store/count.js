// 求和相关的配置
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            console.log("mutations中的JIA被调用了", this);
            state.sum += value
        },
        JIAN(state, value) {
            console.log("mutations中的JIAN被调用了", this);
            state.sum -= value
        },
    },
    state: {
        sum: 1,   //当前的和
        school: '南科院',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}