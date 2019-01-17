<template>
    <div class="bigbox">
        <div id="top">
            药品清单
            <span>编辑</span>
        </div>
        <div id="cen" class="bigcenter">
            <div class="top">
                <i class="iconfont icon-jifenshangcheng"></i>
                <span>111医药商城·1日后到家</span>
                <span>满99元免运费</span>
            </div>
            <ul class="cen">
                <li v-for="(item,idx) in data" :key="idx">
                    <span :class="{'active':item.none}" @click="select(idx)"><img src="@/assets/g.png"/></span>
                    <img :src="item.img"/>
                    <div>
                        <p>{{item.title}}</p>
                        <span>{{item.spec}}</span>
                        <span>￥{{item.price}}</span>
                        <span class="tt" @click="changeNum('sub',idx)">-</span>
                        <span class="tt">{{item.num}}</span>
                        <span class="tt" @click="changeNum('add',idx)">+</span>
                    </div>
                </li>
            </ul>
        </div>
        <footer>
            <span><img src="@/assets/g.png"></span>
            <span>全选</span>
            <span>总计:<a>￥167.80</a></span>
            <span>不含运费,已优惠-￥0</span>
            <span>结算</span>
        </footer>
        <Nav></Nav>
    </div>
</template>

<script>
import Nav from './Nav'
export default {
    data(){
        return {
            data:[
                {
                    title:'天力士 藿香正气滴丸2.26g*9袋',
                    spec:'2.6g*9袋',
                    price:'24.90',
                    num:1,
                    img:require('@/assets/cart.jpg'),
                    none:false
                },{
                    title:'王老吉 小儿七星茶颗粒7g*10袋',
                    spec:'7g*10袋/盒',
                    price:'24.00',
                    num:2,
                    img:require('@/assets/cart.jpg'),
                    none:false
                }
            ]
        }
    },
    methods:{
        changeNum(state,key){
            let Num = this.data[key].num;
            // console.log(key,this.data[key].num);
            if(state == 'sub'){
                if(Num<=1){
                    Num = 1;
                    return 
                }else{
                    Num--;
                }
            }else{
                if(Num>=10){
                    Num = 10;
                    return 
                }else{
                    Num++;
                }
            }
            this.data[key].num = Num;
            // console.log(this.data[key].num)
        },
        select(idx){
            this.data[idx].none = !this.data[idx].none;
        }
    },
    mounted(){

    },
    components:{
        Nav
    }
}
</script>

<style lang="scss" scoped>
    //内容 
    
    #cen{
        margin-top:3.125rem;
        .top{
            height: 3.125rem;
            background: #F8F8F8;
            border-bottom: 0.25rem solid #EFEFEF;
            line-height: 3.125rem;
            i{
                float:left;
                width: 2.875rem;
                height: 2.875rem;
                font-size: 1.125rem;
                text-align: center;
                line-height: 2.875rem;
            }
            span{
                font-size: .875rem;
            }
            span:nth-child(2){
                float: left;
                color:#222222;
            }
            span:nth-child(3){
                float:right;
                color:#FE4310;
                margin-right:1.25rem;
            }
        }
        .cen{
            li{
                margin:1.875rem 0;
                position: relative;
                height: 3.75rem;
                span:nth-child(1){
                    position: absolute;
                    display: block;
                    width: 1.5rem;
                    height: 1.5rem;
                    text-align: center;
                    line-height: 1.5rem;
                    color:#fff;
                    background: #00AAA0;
                    border-radius:50%;
                    top:1rem;
                    left:15px;
                    img{
                        margin-top:0.25rem;
                        width: 0.875rem;
                        height: 0.875rem;
                    }
                }
                .active{
                    background: #d7d7d7 !important;
                }
                >img{
                    position: absolute;
                    top:0;
                    left:3.125rem;
                    width: 3.75rem;
                    height: 3.75rem;
                    border:0.0625rem solid #EFEFEF;
                }
                >div{
                    font-size: 0.8125rem;
                    position: absolute;
                    height: 3.75rem;
                    top:0;
                    right:0.9375rem;
                    width: 57%;   
                    span:nth-child(2){
                        display: block;
                        margin-top:0.9375rem;
                        font-size: 0.75rem;
                    }
                    span:nth-child(3){
                        display: inline-block;
                        margin-top:0.4375rem;
                        font-size: 0.875rem;
                        color:#FF4100;
                    }
                    .tt{
                        display: inline-block;
                        position: absolute;
                        width: 1.375rem;
                        height: 1.375rem;
                        border-radius: 50%;
                        text-align: center;
                        line-height: 1.375rem;
                        font-size: 1rem

                    }
                    span:nth-child(4){
                        bottom:0rem;
                        right:50px;
                        background:#F8F8F8;
                        color:#666666;
                        border:0.0625rem solid #D8D8D8;
                        line-height: 1.25rem
                    }
                    span:nth-child(5){
                        background: none;
                        bottom: 0;
                        right:25px;
                        color:#222222;
                        font-size: 0.75rem
                    }
                    span:nth-child(6){
                        bottom:0rem;
                        right: 0rem;
                        color: #fff;
                        background:#00AAA0;
                    }
                }
            }
        }
    }
    // 底部
    footer{
        height: 3.125rem;
        border-top:0.0625rem solid #EFEFEF;
        position: fixed;
        left:0;
        bottom:3rem;
        width: 100%;
        background: #fff;
        font-size: 0.875rem;
        // line-height: 3.125rem;
        >span{
            display: block;
            position: absolute;
        }
        span:nth-child(1){
            width: 1.5rem;
            height: 1.5rem;
            text-align: center;
            line-height: 1.5rem;
            color:#fff;
            background: #D7D7D7;
            border-radius:50%;
            top:0.875rem;
            left:0.9375rem;
            img{
                margin-top:0.25rem;
                width: 0.875rem;
                height: 0.875rem;
            }
        }
        span:nth-child(2){
            top:1.1875rem;
            left:3.125rem;
            font-size: 0.875rem
        }
        span:nth-child(3){
            top:0.9375rem;
            font-size: 0.75rem;
            right:6.875rem;
            a{
                color:#FE4310;
            }
        }
        span:nth-child(4){
            bottom:0.3125rem;
            right:6.875rem;
            font-size: 0.625rem;
            color:#999999;
        }
        span:nth-child(5){
            top:-0.0625rem;
            right:0;
            height: 3.125rem;
            width: 6.25rem;
            background: #FE4310;
            color:#fff;
            text-align: center;
            line-height: 3.125rem;
        }
    }
    // 顶部
    #top{
        position: fixed;
        background: #fff;
        top:0;
        left:0;
        width: 100%;
        height: 3.125rem;
        font-size: 1.125rem;
        line-height: 3.125rem;
        text-align: center;
        border-bottom:0.0625rem solid #d7d7d7;
        // position: relative;
        span{
            float: right;
            font-size: 0.875rem;
            position: absolute;
            right:1.25rem;
        }
    }
</style>

