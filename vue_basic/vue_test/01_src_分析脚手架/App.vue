<template>
  <!-- 组件的结构 -->
  <div>
      <SchoolInfo></SchoolInfo>
      <StudentInfo></StudentInfo>
  </div>
</template>

<script>
  import SchoolInfo from './components/SchoolInfo.vue'
  import StudentInfo from './components/StudentInfo.vue'
  export default {
      name:'App',
      components:{SchoolInfo,StudentInfo}
  }
</script>
