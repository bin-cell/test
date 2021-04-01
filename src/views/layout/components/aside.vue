<template>
   <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" router>
      <el-menu-item index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name:'AppAside',
    methods: {
    //   handleOpen(key, keyPath) {
    //     console.log(key, keyPath)
    //   },
    //   handleClose(key, keyPath) {
    //     console.log(key, keyPath)
    //   }
     }
    
}
</script>

<style>

</style>