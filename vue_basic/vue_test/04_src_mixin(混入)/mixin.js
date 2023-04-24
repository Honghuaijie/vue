export const mixin = {
    data() {
        return {
            age: 66
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('minxin');
    },
}

export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    }

}