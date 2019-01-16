<template>
    <div style="padding-bottom:70px;">
        <mt-tab-container>
            <mt-tab-container-item>
                <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone">
                    <span class="code">获取验证码</span>
                </mt-field>
                <mt-field label="验证码" placeholder="验证码" type="url"></mt-field>
                <mt-field label="推广码" placeholder="选填" type="number" v-model="number"></mt-field>
                <p class="p-code">
                    <a href class="p-a">收不到验证码？获取语音验证</a>
                </p>
                <mt-button type="primary" @click="goto">登录</mt-button>
                <p class="hint">
                    温馨提示：未注册111医药馆的手机号登录时将自动注册，且代表你已经同意
                    <a href class="hint-a">《111医药馆用户注册协议》</a>
                </p>
                <img src="@/img/huo.jpg" alt>
                <div class="wx-d">
                    <img src="@/img/wx.png" alt class="wx">
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
};
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
        height: 10.625rem;
        padding-top: 1.875rem;
        padding-left: 0.625rem;
        font-size:1rem; 
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
    }
    .a2 {
        color: coral;
    }
</style>
