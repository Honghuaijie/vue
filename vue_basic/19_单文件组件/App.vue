<template>
    <!-- 组件的结构 -->
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import School from 'School.vue'
    import Student from 'Student'
    export default {
        name:'App',
        components:{School,Student}
    }
</script>
