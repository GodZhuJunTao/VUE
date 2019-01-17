<template>
    <div class="bigbox">
        <header class="header">
            <div class="header_input">
                <input class="search-input" id="subcategory_search_input" name="keyword" readonly="readonly" type="search" maxlength="30" placeholder="药品、品牌或症状" @click="goto('Search')"/>
                <span id="search-btn" class="_new_magnifier"></span>
            </div>
        </header>
        <div id="con" class="bigcenter">
            <div class="c_top">
                <cube-scroll
                ref="scroll"
                direction="horizontal"
                class="horizontal-scroll-list-wrap">
                    <ul class="list-wrapper">
                        <li v-for="item in list" class="list-item" :class="{'active':item.status}" :key="item.gid">{{ item.name }}</li>
                    </ul>
                </cube-scroll>
            </div>
            <div class="c_cen">
                <div v-for="items in lists" :key="items.pid">
                    <img :src="items.imgs">
                    <ul>
                        <li v-for="item in items.plist" :key="item.pid">
                            {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Nav></Nav>
    </div>
</template>

<script>
import Lists from '../assets/json/lists.json';
import Nav from './Nav';
export default {
    data(){
        return {
            list:[
                {
                    name:'人群找药',
                    status:true
                },{
                    name:'家庭常备',
                    status:false
                },{
                    name:'器械计生',
                    status:false
                },{
                    name:'保健营养',
                    status:false
                },{
                    name:'草药饮片',
                    status:false
                }
            ],
            lists:[]
        }
    },
    methods:{
        goto(name){
            this.$router.push(name);
        }
    },
    created(){
        // this.$axios.get('../assets/json/list.json').then(res=>{
        //     this.list = res.data.list;
        //     console.log(this.list);
        // })
        // this.$axios.get('../assets/json/lists.json').then(res=>{
        //     this.lists = res.data;
        //     console.log(this.lists);
        // })
        // this.list = List.list;
        this.lists = Lists;
    },
    components:{
        Nav
    }
}
</script>

<style lang="scss" scoped>
    // 内容区域
    #con{
        // margin: 3.75rem auto 3.125rem;
        .c_top{
            ul {
                width: 32.5rem;
                height: 3.1875rem;
                border-bottom:0.0625rem solid #efefef;
                .active{
                    border-bottom:0.125rem solid #222;
                    font-weight: 900;
                }
                li{
                    width: 4.625rem;
                    height: 3.125rem;
                    line-height: 3.125rem;
                    float: left;
                    text-align: center;
                    margin-right: 1.25rem;
                    margin-left:0.625rem;
                }
            }
        }
        .c_cen{
            width:17.75rem;
            margin:0.625rem auto 0;
            img{
                width: 17.75rem;
                height: 3.5rem;
                margin-bottom:0.625rem;
            }
            ul{
                li{
                    width: 33.3%;
                    float: left;
                    overflow: hidden;
                    white-space: nowrap;
                    word-break: keep-all;
                    text-overflow: ellipsis;
                    font-size: 0.875rem;
                    color: #222;
                    text-align: center;
                    line-height: 1.25rem;
                    padding: 0.9375rem 0;
                }
            }
        }
    }
    // 头部
    .header{
        width: 100%;
        height: 2.75rem;
        z-index: 99;
        background: #fff;
        .header_input{
            height: 1.875rem;
            position: absolute;
            left: 2.75rem;
            right: 2.75rem;
            top: 0.4375rem;
            background: #efefef;
            border-radius: 1.25rem;
            -webkit-border-radius: 1.25rem;
            padding: 0 0.875rem 0 2.125rem;
            input{
                height: 1.125rem;
                line-height: 1.125rem;
                font-size: 0.9375rem;
                width: 100%;
                float: left;
                margin: 0.375rem 0;
                color: #222;
                overflow: hidden;
                word-break: keep-all;
                white-space: nowrap;
                text-overflow: ellipsis;
                background: #efefef;
            }
            span{
                width: 2.125rem;
                height: 1.875rem;
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                background: url(../assets/ss.png) no-repeat 0.875rem center;
                background-size: 0.875rem;
            }
        }
    }
    footer{
        height: 4.375rem;
    }
</style>
