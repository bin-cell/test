<template>
   <div class="login-container">
       
       <el-form class="login-form" ref="form" :model="user">
        <h2 class="login-header">发布系统</h2>
        <el-form-item>
            <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model='user.code' placeholder="验证码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-checkbox v-model="checked"> 我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button class="login-btn" type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
       </el-form>
   </div>

</template>

<script>
import '../../untils/request.js'
export default {
    name: 'LoginIndex',
    components: {},
    prop: {},
    data () {
        return {
            user:{
                mobile:'',
                code:''
            },
            checked: false
        }
    },
    methods:{
        onLogin(){
            const user = this.user
            request({
                methods: 'POST',
                url: '/login',
                data: user
            }).then(res => {
                console.log(res)
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                     type: 'success'
                })
                this.$router.push({
                    name: 'home'
                })
            }).catch(err => {
                console.log('登录失败',err)
                this.$message.err('登录失败，手机号或验证码错误')
            })
        }
    }
}
</script>

<style>
.login-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0; 
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("./login.jpg") no-repeat;
    background-size: cover;
}
.login-container .login-header{
    text-align: center;
    color:skyblue;
    margin: 5px;
}
.login-container .login-form{
    background: #fff;
    padding: 30px;
    min-width: 300px;
}
.login-container .login-btn {
    width: 100%;
}
</style>