<template>
    <div class="App">
        <router-view/>
        <!-- <mt-tabbar v-model="selected" fixed id="nav"> 
            <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)"> -->
                <!-- <myicons :type="tab.icon" /> -->
                <!-- <span :class="tab.icon"></span><br/>
                <a class="cao"> {{tab.text}}</a>
            </mt-tab-item>
        </mt-tabbar> -->
    </div>
</template>

<script>
import Vue from 'vue';
// // 引入并使用插件
// import myicons from '@/plugins/icons';
// Vue.use(myicons);
// 引入并使用Mintui
import MinUi from 'mint-ui';
Vue.use(MinUi);
// 引入并使用Cube
import Cube from 'cube-ui';
Vue.use(Cube);
import 'mint-ui/lib/style.css';
// import 'cube-ui/lib/style.css';
import './sass/common.scss';
import './plugins/icon/iconfont.css';

import axios from 'axios';
// 把axios写入Vue的原型对象,方便后面调用
Vue.prototype.$axios = axios;

// loading效果
// 利用axios拦截器全局设置
// http响应拦截器
import {Indicator} from 'mint-ui';
axios.interceptors.request.use(config =>{
    Indicator.open({
        text: '请稍等...',
        spinnerType: 'snake'
    });
    return config;
},error=>{
    Indicator.close();
    return Promise.reject(error)
})
axios.interceptors.response.use(data=>{
    // 响应成功关闭loading
    Indicator.close();
    return data;
},error=>{
    Indicator.close();
    return Promise.reject(error)
})

export default {
    // data(){
    //     return {
    //         tabs:[
    //             {
    //                 text:'首页',
    //                 icon:'iconfont icon-shouye',
    //                 path:'/home',
    //                 name:'Home'
    //             },{
    //                 text:'分类',
    //                 icon:'iconfont icon-fenlei1',
    //                 path:'/classfiy',
    //                 name:'Classfiy'
    //             },{
    //                 text:'问药',
    //                 icon:'iconfont icon-kefu',
    //                 path:'/robot',
    //                 name:'Robot'
    //             },{
    //                 text:'清单',
    //                 icon:'iconfont icon-gouwuche',
    //                 path:'/cart',
    //                 name:'Cart'
    //             },{
    //                 text:'我的',
    //                 icon:'iconfont icon-wode',
    //                 path:'/mine',
    //                 name:'Mine'
    //             }
    //         ],
    //         selected:'Home'
    //     }
    // },
    // methods:{
    //     goto(path){
    //         this.$router.push({path});
    //     }
    // },
    // mounted(){
    //     let path = window.location.hash.split('/')[1];
    //     path = path.substring(0,1).toUpperCase()+path.substring(1);
    //     this.selected = path;
    // }
}
</script>

<style lang="scss" scoped>
    // .mint-tabbar{
    //     height: 3rem;
    //     .mint-tab-item.is-selected{
    //         .iconfont{
    //             color:#4EAAEA;
    //         }
            
    //         background: none !important;
    //     }
    // }
    // .mint-tab-item{
    //     .iconfont{
    //         font-size: 1.375rem;
    //         // display: block;
    //         // margin-bottom:1px;
    //     }
    // }
    // .cao{
    //     margin-top:0.3125rem;
    //     display: block;
    //     font-size: 0.625rem
    // }
</style>
