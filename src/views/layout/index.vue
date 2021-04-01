<template>
    <el-container class="layout-container">
  <el-aside class="aside" width="200px"><app-aside></app-aside></el-aside>
  <el-container>
    <el-header class="header">Header</el-header>
    <el-main class="main"><router-view></router-view></el-main>
  </el-container>
</el-container> 
</template>

<script>
import AppAside from './components/aside.vue'
export default {
    name: 'layoutIndex',
    components: {
        AppAside
    },
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {},

}
</script>

<style>
.layout-container{
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
}
.aside {
    background-color:darkgray;
}
.header {
    background-color: skyblue;
}
.main {
    background-color: whitesmoke;
}
</style>