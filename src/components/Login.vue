<template>
    <div>
        <h1 class="return">
            <img src="@/img/jiant.jpg" class="bj" @click="back">
        </h1>
        <div class="box">
            <mt-navbar v-model="selected">
                <mt-tab-item v-for="item in data" :key="item.name" :id="item.name" @click.native="goto(item.name)">
                    <p>
                        <img :src="item.img" alt class="bjx">{{item.title}}
                    </p>
                </mt-tab-item>
            </mt-navbar>
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data:[
                    {
                        title:'验证码登录',
                        img:require('@/img/em.png'),
                        name:'Em'
                    },
                    {
                        title:'密码登录',
                        img:require('@/img/mima.png'),
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
            },
            back(){
                this.$router.back();
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
