<template>
    <div class="bigbox">
        <div class="top">
            <span class="img-noe" @click="goto('home')">
                <img src="@/img/jtou.png">
            </span>
            <span class="img-two">
                <img src="@/img/gd.png">
            </span>
        </div>
        <div class="bigcenter">
            <mt-swipe class="detail">
                <mt-swipe-item v-for="(item,idx) in imgs" :key="idx"><img :src="'http://img.zdfei.com/'+item.images" alt=""></mt-swipe-item>
            </mt-swipe>
            <div style="border-bottom:1px solid #ECECEC;margin:0 10px 0 10px;">
                    <p class="p-noe">{{goods.goods_name}}<img src="@/img/oct.jpg" class="img-therr"></p>
                    <span class="s-noe">{{goods.spec}}</span>
                    <span class="s-two">￥{{price}}</span>
            </div>
            <div class="center">
                <p @click="goto"><span>功效</span>{{goods.main_title}}<img src="@/img/gd1.png"><br/><span>厂家</span>{{goods.manu_name}}</p>
                <p><span>规格</span>{{goods.spec}}<img src="@/img/gd1.png"></p>
            </div>
            <div class="back"></div>
            <div class="img-four"><img src="@/img/cn.jpg" alt=""></div>
            <div>
                <cube-scroll  ref="scroll"  direction="horizontal" class="horizontal-scroll-list-wrap" id="woqu">
                    <ul class="list-wrapper">
                        <li class="list-item" v-for="item in cnzzs" :key="item.id"><img :src="'http://img.zdfei.com/'+item.abbreviation_picture"><span>{{item.short_name}}</span><br/><span style="color:red;">￥{{item.price}}</span></li>
                    </ul>
                </cube-scroll>
            </div>
            <div class="bottom">
                <h3>上拉查看商品详情</h3>
            </div>
            <div>
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">图片详情</mt-tab-item>
                    <mt-tab-item id="2">说明</mt-tab-item>
                    <mt-tab-item id="3">评论</mt-tab-item>
                </mt-navbar>

                <!-- tab-container -->
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        <ul clss="details">
                            <li  v-for="(item,i) in goodsImages" :key="i"><img :src="item.images"/></li>
                        </ul>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
        <footer>
            <div class="footer_one">
                <span><span class="iconfont icon-kefuxiaoguniang"></span><span>资讯</span></span>
                <span><span class="iconfont icon-chakantieziguanzhu"></span><span>关注</span></span>
                <span><span class="iconfont icon-shangpinqingdan"></span><span>清单</span></span>
            </div>
            <div class="footer_two" @click="change">
                <span class="t_one">加入清单</span>
                <span class="t_two">立即购买</span>
            </div>
        </footer>
        <div class="popup">
            <mt-popup
            v-model="popupVisible"
            position="bottom">
                <div class="_spc_cont">
                    <dl class="_pro_cont">
                        <dt class="_pro_dt">
                            <img id="guigeImage" :src="'http://img.zdfei.com/'+imgs[0].images">
                        </dt>
                        <dd class="_pro_price">
                            <span class="_price_sign">¥</span>
                            <a class="select_specs_goods_price">{{price}}</a>
                            <del id="delOldPrice"></del>
                        </dd>
                        <dd class="_pro_explain">
                            <span class="_selected">已选</span>
                            <span class="select_specs_spec">{{goods.spec}}</span>
                        </dd>
                        <div class="_cart_product_count">
                            <span class="_minus_one"></span>
                            <input type="text" class="_cart_input" value="1" maxlength="4" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
                            <span class="_add_one"></span>
                        </div>
                    </dl>
                    <div class="_sel_spc clearfix">
                        <strong class="_left_line"></strong>
                        <span class="_sel_text">选择规格</span>
                        <strong class="_right_line"></strong>
                    </div>
                    <ol class="_sel_box clearfix has_selected_specs">
                        <li class="_sel_line clearfix _sed_btn">
                            <span class="_nosel_sign"></span>
                            <div class="guige_span">
                                <b>{{goods.spec}}</b>
                            </div>
                        </li>
                    </ol>
                </div>
                <div class="_buy_box clearfix">
                    <div class="jrqd">取消</div>
                    <div class="ljgm">确定</div>
                </div>
            </mt-popup>
        </div>
    </div>
</template>

<script>
// import mycnzzs from '@/assets/lid/more';
import mygoodsImages from '@/assets/lid/more';
export default {
    data(){
        return{
            cnzzs:[],
            selected:"1",
            goodsImages:[],
            imgs:[],
            goods:[],
            price:'',
            popupVisible:false
        }
    },
    methods:{
        goto(path){
            // console.log(123);
            this.$router.push(path);
        },
        change(){
            this.popupVisible = !this.popupVisible;
        }
    },
    created(){
        // this.cnzzs=mycnzzs.cnzzs;
        this.goodsImages=mygoodsImages.goodsImages
        // console.log(this.cnzzs);
        let id = this.$route.params.id;
        // console.log(this.$route.params.id);//
        this.$axios.get('ygapi?method=goodsDetailWapMINAUse&platFormType=wap&goodsId='+id+'&storeId=').then(res=>{
            console.log(res.data);
            this.imgs = res.data.goodsImages;
            this.goods = res.data.goods;
            this.price = res.data.goodsPrice.price;
            this.cnzzs = res.data.cnzzs;
        })
    }
}
</script>

<style lang="scss" scoped>
    // 下弹窗
    .popup{
        ._spc_cont {
            height: 100%;
            padding: 20px 13px 0 13px;
            ._pro_cont {
                position: relative;
                height: 5.625rem;
                padding-left: 8.125rem;
                ._pro_dt {
                    position: absolute;
                    left: 0.4375rem;
                    top: 0;
                    width: 5.625rem;
                    height: 5.625rem;
                    border: 0.0625rem solid #efefef;
                    border-radius: 0.375rem;
                    -webkit-border-radius: 0.375rem;
                    -moz-border-radius: 0.375rem;
                    -o-border-radius: 0.375rem;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                ._pro_price {
                    color: #fe4310;
                    font-size: 1.125rem;
                    font-weight: bold;
                    line-height: 1.8125rem;
                    ._price_sign {
                        font-size: 0.625rem;
                        margin-right: 0.1875rem;
                    }
                    .select_specs_goods_price {
                        color: #fe4310;
                    }
                }
                ._pro_explain {
                    font-size: 0.875rem;
                    color: #000;
                    ._selected {
                        font-size: 0.875rem;
                        color: #999;
                        margin-right: 0.625rem;
                    }
                }
                ._cart_product_count {
                    height: 1.3125rem;
                    width: 2.9375rem;
                    position: absolute;
                    right: 1.3125rem;
                    bottom: 0;
                    border: none;
                    ._minus_one {
                        display: block;
                        width: 1.3125rem;
                        height: 1.3125rem;
                        background: url(http://img.zdfei.com/static/image/temp/20170810/da269bb63910a4c57c71f2550f306977.png) no-repeat center center;
                        background-size: 1.3125rem;
                        position: absolute;
                        left: -1.3125rem;
                        top: 0;
                    }
                    ._cart_input {
                        width: 2.3125rem;
                        border: none;
                        padding: 0 0.3125rem;
                        height: 1.3125rem;
                        line-height: 1.3125rem;
                        text-align: center;
                    }
                    ._add_one {
                        display: block;
                        width: 1.3125rem;
                        height: 1.3125rem;
                        background: url(http://img.zdfei.com/static/image/temp/20170810/719e81de333ed254745fc062e2e5ebdf.png) no-repeat center center;
                        background-size: 1.3125rem;
                        position: absolute;
                        right: -1.3125rem;
                        top: 0;
                    }
                }
            }
            ._sel_spc {
                height: 1.25rem;
                font-size: 0.875rem;
                color: #222;
                padding: 0.75rem 0;
                position: relative;
                ._left_line {
                    width: 6.5rem;
                    height: 0.3125rem;
                    background: url(http://img.zdfei.com/static/image/temp/20170927/c6e738f2cb2179f6a905d6b038e83a59.png) no-repeat center center;
                    background-size: 6.5rem 0.3125rem;
                    position: absolute;
                    left: 0.3125rem;
                    top: 1.1875rem;
                    border-left: 0.125rem solid #00aaa0;
                    display: block;
                }
                ._sel_text {
                    color: #222;
                    font-size: 0.875rem;
                    width: 3.5rem;
                    height: 1.25rem;
                    line-height: 1.25rem;
                    text-align: center;
                    position: absolute;
                    left: 50%;
                    margin-left: -1.75rem;
                    top: 0.75rem;
                }
                ._right_line {
                    width: 6.5rem;
                    height: 0.3125rem;
                    -webkit-transform: rotate(180deg);
                    background: url(http://img.zdfei.com/static/image/temp/20170927/c6e738f2cb2179f6a905d6b038e83a59.png) no-repeat center center;
                    background-size: 6.5rem 0.3125rem;
                    position: absolute;
                    right: 0.3125rem;
                    top: 1.1875rem;
                }
            }
            ._sel_box {
                width: 99%;
                height: 9.375rem;
                overflow: auto;
                padding-bottom: 1.875rem;
                padding-top: 0.625rem;
                li {
                    line-height: 1.25rem;
                    margin-bottom: 0.625rem;
                    margin-left: -0.1875rem;
                    span {
                        display: block;
                        float: left;
                        width: 0.9375rem;
                        height: 0.9375rem;
                        background: url(http://img.zdfei.com/static/image/temp/20171017/bae900354646447054ee59e7fd3b27e4.png) no-repeat center center;
                        background-size: 0.9375rem;
                        margin: 0.5625rem 0.625rem 0 0.625rem;
                    }
                    .guige_span {
                        border-radius: 0.125rem;
                        height: auto;
                        float: left;
                        line-height: 1.25rem;
                        width: 85%;
                        b {
                            border: 0.0625rem solid #fe4310;
                            border-radius: 0.125rem;
                            -webkit-border-radius: 0.125rem;
                            -moz-border-radius: 0.125rem;
                            -o-border-radius: 0.125rem;
                            line-height: 1.25rem;
                            padding: 0 0.625rem;
                            color: #fe4310;
                            float: left;
                            padding-top: 0.3125rem;
                            padding-bottom: 0.3125rem;
                        }
                    }
                }
            }
        }
        ._buy_box{
            position: fixed;
            bottom:0;
            left:0;
            width: 100%;
            height: 3.125rem;
            div{
                width: 50%;
                float: left;
                height: 3.125rem;
                text-align: center;
                line-height: 3.125rem;
            }
            .jrqd{
                border-top: #f8f8f8 0.0625rem solid;
                background: #fff;
                color: #FE4310;
            }
            .ljgm{
                background: #FE4310;
                color:#fff;
            }
        }
    }
    .top{
        margin: 0.625rem 0.625rem 0 0.625rem;
        height: 40px;
        .img-noe{
            float: left;
            img{
                display: block;
                width: 1.5625rem;
            }
        }
        .img-two{
            float:right;
            display: block;
            height: 25px;
            img{
                width: 1.5625rem;
                z-index: 999;
            }
        }
    }
    .mint-swipe{
        height: 15.625rem;
        img{
            display: block;
            height: 15.625rem;
            margin-left:2.1875rem; 
        }
    }
    .p-noe{
        margin: 0 2.375rem 0 1.5rem;
        color: #2D2D2D;
        font-size:1.0625rem;
        .img-therr{
            float: right;
            //  display: inline-block;
            width: 1.25rem;
        }
    }
    .s-noe{
        margin: 0.625rem 0 0 1.5rem;
        color: #2D2D2D;
        font-size:1.25rem;
        display: block;
    }
    .s-two{
        font-size:1.25rem;
        display: block;
        color: red;
        margin: 0.625rem 0 0.9375rem 1.5rem;
    }
    .center{
        margin:0 0.625rem 0 0.625rem;
        p{
            border-bottom:0.0625rem solid #ECECEC; 
            font-size: 0.75rem;
            line-height: 1.5rem;
            // height: 3rem;
            padding:0.625rem 0 0.625rem 0; 
            width: 100%;
            overflow: hidden;
            word-break: keep-all;
            white-space: nowrap;
            text-overflow: ellipsis;
            span{
                display: inline-block;
                color:#909090;
                padding-right:0.3125rem; 
            }
            img{
                width: 1.25rem;
                float: right;
            }
        }
    }
    .back{
        background:#F7F7F7;
        height: 0.9375rem;
    }
    .img-four{
        margin:2.5rem 0.625rem 1.25rem 0.625rem;
       
        img{
            display: block;
            // width: 21.875rem;
            width: 100%;
        }
    }
    
  
    .bottom{
        margin-top:2.5rem;
        h3{
            font-size:1rem;
            height: 2.5rem;
            text-align: center;
            line-height: 2.5rem;
            
        }
    }
    // 底部
    footer{
        height: 2.5rem;
        div{
            float: left;
            display: flex;
            height: 2.5rem;
            width:50%;
        }
        
        .footer_one{
            >span{
                flex: 1;
                text-align: center;
                // line-height: 2.5rem;
                // font-size: 1rem;
                >span{
                    display: block;
                    font-size: 0.75rem
                }
            }
        }
        .footer_two{
            >span{
                flex: 1;
                text-align: center;
                line-height: 2.5rem
            }
            .t_one{
                background: #FFE4DD;
                color: #FE4310;
                font-size: 0.875rem;
            }
            .t_two{
                background: #FE4310;
                font-size: 0.875rem;
                color:#fff;
            }
        }
        .iconfont{
            font-size: 1rem !important;
            margin: 0.3125rem 0rem 0.1875rem 0rem;
        }
        .icon-kefuxiaoguniang{
            color:orangered;
        }
    }
</style>

