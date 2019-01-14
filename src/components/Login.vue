<template>
    <div>
        <h1 class="return">
            <img src="../img/jiant.jpg" alt class="bj">
        </h1>
        <div class="box">
            <mt-navbar v-model="selected">
                <mt-tab-item v-for="item in data" :key="item.name" :id="item.name" @click.native="goto(item.name)">
                    <p>
                        <img :src="item.img" alt class="bjx">{{item.title}}
                    </p>
                </mt-tab-item>
                
                <!-- <mt-tab-item id="2">
                    <p>
                        <img src="../img/mima.png" alt class="bjx1">密码登录
                    </p>
                </mt-tab-item> -->
            </mt-navbar>
            <router-view />
        </div>
        <!-- tab-container -->
        <!-- <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
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
                <img src="../img/huo.jpg" alt>
                <div class="wx-d">
                    <img src="../img/wx.png" alt class="wx">
                    <span>微信登录</span>
                </div>
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
                <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
                <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
                <mt-button type="primary" @click="goto">登录</mt-button>
                <div class="box2">
                    <a href class="a1">忘记密码?</a>
                </div>
                <p>
                    还没账号?
                    <a href class="a2">手机注册</a>
                </p>
                <img src="../img/huo.jpg" alt>
                <div class="wx-d">
                    <img src="../img/wx.png" alt class="wx">
                    <span>微信登录</span>
                </div>
            </mt-tab-container-item>
        </mt-tab-container> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data:[
                    {
                        title:'验证码登录',
                        img:'../img/em.png',
                        name:'Em'
                    },
                    {
                        title:'密码登录',
                        img:'../img/mima.png',
                        name:'Mima'
                    }
                ],
                selected: "Em",
                // username: "",
                // password: "",
                // phone: "",
                // number: ""
            };
        },
        methods:{
            login(){
                sessionStorage.setItem('token','登录');
                this.$router.push('home');
            },
            goto(name){ 
                this.$router.push({path:'/login/'+name})
            }
        }
    };
</script>

<style lang="scss" scoped>
    // .mint-button {
    //     width: 100%;
    // }
    // .code {
    //     display: inline-block;
    //     background: #aaaaaa;
    //     color: #fff;
    //     font-size: 16px;
    //     line-height: 45px;
    //     width: 100px;
    //     height: 45px;
    //     text-align: center;
    // }
    .return {
        width: 100%;
    }
    .bj {
        height: 1rem;
        padding-left: 0.625rem;
    }
    .mint-tab-item-label{
        p{
            position: relative;
            .bjx {
                height: 1rem;
                position:absolute;
                top:-4px;
                left: 40px;
            }
        }
    }
   
    // .bjx1 {
    //     height: 16px;
    // }
    // .s1 {
    //     padding-right: 15px;
    //     color: #afafaf;
    //     font-size: 16px;
    // }
    .box {
        height: 6.25rem;
        text-align: center;
    }
    // .mint-navbar {
    //     margin: auto;
    // }
    // .p-code {
    //     height: 40px;
    //     padding-top: 10px;
    //     padding-left: 10px;
    // }
    // .p-a {
    //     color: #61b8b2;
    //     font-size: 16px;
    // }
    // .hint {
    //     height: 250px;
    //     padding-top: 30px;
    //     padding-left: 10px;
    // }
    // .hint-a {
    //     color: #6793c2;
    // }
    // .wx-d {
    //     text-align: center;
    // }
    // .wx {
    //     width: 30px;
    // }
    // .is-selected .mint-tab-item-label {
    //     position: relative;
    //     color: #58bc58;
    // }
    // .a1 {
    //     float: right;
    // }
    // .box2 {
    //     height: 16px;
    // }
    // .a2 {
    //     color: coral;
    // }
</style>
