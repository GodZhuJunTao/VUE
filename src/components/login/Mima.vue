<template>
    <div>
        <mt-tab-container>
            <mt-tab-container-item>
                <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
                <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
                <mt-button type="primary" @click="goto">登录</mt-button>
                <div class="box2">
                    <a href class="a1">忘记密码?</a>
                </div>
                <p class="p-i">
                    还没账号?
                    <a href class="a2">手机注册</a>
                </p>
                <img src="../../img/huo.jpg" alt>
                <div class="wx-d">
                    <img src="../../img/wx.png" alt class="wx">
                    <span>微信登录</span>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selected: "",
            username: "",
            password: "",
            phone: "",
            number: ""
        }
    },
    methods:{
        goto(){
            sessionStorage.setItem('token','登录');
            location.href="/#/home";
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-button {
        width: 100%;
    }
    .code {
        display: inline-block;
        background: #aaaaaa;
        color: #fff;
        font-size: 1rem;
        line-height: 2.8125rem;
        width: 6.25rem;
        height: 2.8125rem;
        text-align: center;
    }
    .return {
        width: 100%;
    }
    .bj {
        height: 1rem;
        padding-left: 0.625rem;
    }
    .bjx {
        height: 1rem;
    }
    .bjx1 {
        height: 1rem;
    }
    .s1 {
        padding-right: 0.9375rem;
        color: #afafaf;
        font-size: 1rem;
    }
    .box {
        height: 6.25rem;
        text-align: center;
    }
    .mint-navbar {
        margin: auto;
    }
    .p-code {
        height: 2.5rem;
        padding-top: 0.625rem;
        padding-left: 0.625rem;
    }
    .p-a {
        color: #61b8b2;
        font-size: 1rem;
    }
    .hint {
        height: 15.625rem;
        padding-top: 1.875rem;
        padding-left: 0.625rem;
    }
    .hint-a {
        color: #6793c2;
    }
    .wx-d {
        text-align: center;
       
    }
    .wx {
        width: 1.875rem;
    }
    .is-selected .mint-tab-item-label {
        position: relative;
        color: #58bc58;
    }
    .a1 {
        float: right;
    }
    .box2 {
        height: 1rem;
        font-size:1rem;
    }
    .a2 {
        color: coral;
    }
    .p-i{
        float: left;
        padding-left: 0.625rem;
        font-size:1rem; 
        margin-bottom:16.875rem;
    }
</style>
