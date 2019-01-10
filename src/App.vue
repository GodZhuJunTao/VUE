<template>
    <div>
        <router-view/>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
                <myicons :type="tab.icon" />
                {{tab.text}}
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import Vue from 'vue';
// 引入并使用插件
import myicons from '@/plugins/icons';
Vue.use(myicons);
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
export default {
    data(){
        return {
            tabs:[
                {
                    text:'首页',
                    icon:'home',
                    path:'/home',
                    name:'Home'
                },{
                    text:'分类',
                    icon:'three-bars',
                    path:'/classfiy',
                    name:'Classfiy'
                },{
                    text:'问药',
                    icon:'hubot',
                    path:'/robot',
                    name:'Robot'
                },{
                    text:'清单',
                    icon:'package',
                    path:'/cart',
                    name:'Cart'
                },{
                    text:'我的',
                    icon:'person',
                    path:'/mine',
                    name:'Mine'
                }
            ],
            selected:'Home'
        }
    },
    methods:{
        goto(path){
            this.$router.push({path});
        }
    }
}
</script>

<style lang="scss">
    .mint-tabbar{
        .is-selected{
            background: none !important;
            svg{
                fill:skyblue;
                // background: linear-gradient(to right,white,gray);
                /* -webkit-background-clip: text; */
                // color: transparent;
            }
        }
    }
    .mint-tab-item-label{
        color:black;
        font-size: .75rem;
    }
    svg{
        path{
            width: 1rem;
            height: 1rem;
        }
        margin-bottom: 0.25rem;
    }
</style>
