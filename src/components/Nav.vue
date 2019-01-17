<template>
    <div>
        <mt-tabbar v-model="selected" fixed id="nav"> 
            <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
                <!-- <myicons :type="tab.icon" /> -->
                <span :class="tab.icon"></span><br/>
                <a class="cao"> {{tab.text}}</a>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tabs:[
                {
                    text:'首页',
                    icon:'iconfont icon-shouye',
                    path:'/home',
                    name:'Home'
                },{
                    text:'分类',
                    icon:'iconfont icon-fenlei1',
                    path:'/classfiy',
                    name:'Classfiy'
                },{
                    text:'问药',
                    icon:'iconfont icon-kefu',
                    path:'/robot',
                    name:'Robot'
                },{
                    text:'清单',
                    icon:'iconfont icon-gouwuche',
                    path:'/cart',
                    name:'Cart'
                },{
                    text:'我的',
                    icon:'iconfont icon-wode',
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
    },
    mounted(){
        let path = window.location.hash.split('/')[1];
        path = path.substring(0,1).toUpperCase()+path.substring(1);
        this.selected = path;
    }
}
</script>

<style lang="scss" scoped>
    .mint-tabbar{
        height: 3rem;
        .mint-tab-item.is-selected{
            .iconfont{
                color:#4EAAEA;
            }
            
            background: none !important;
        }
    }
    .mint-tab-item{
        .iconfont{
            font-size: 1.375rem;
            // display: block;
            // margin-bottom:1px;
        }
    }
    .cao{
        margin-top:0.3125rem;
        display: block;
        font-size: 0.625rem
    }
</style>
