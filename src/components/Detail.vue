<template>
    <div style="margin-bottom:50px;">
        <div class="top">
            <span class="img-noe" @click="goto">
                <img src="../img/jtou.png">
            </span>
            <span class="img-two">
                <img src="../img/gd.png">
            </span>
        </div>
        <mt-swipe>
            <mt-swipe-item v-for="(item,idx) in imgs" :key="idx"><img :src="'http://img.zdfei.com/'+item.images" alt=""></mt-swipe-item>
        </mt-swipe>
        <div style="border-bottom:1px solid #ECECEC;margin:0 10px 0 10px;">
                <p class="p-noe">{{goods.goods_name}}<img src="../img/oct.jpg" class="img-therr"></p>
                <span class="s-noe">{{goods.spec}}</span>
                <span class="s-two">￥{{price}}</span>
        </div>
        <div class="center">
            <p @click="goto"><span>功效</span>{{goods.main_title}}<img src="../img/gd1.png"><br/><span>厂家</span>{{goods.manu_name}}</p>
            <p><span>规格</span>{{goods.spec}}<img src="../img/gd1.png"></p>
        </div>
        <div class="back"></div>
        <div class="img-four"><img src="../img/cn.jpg" alt=""></div>
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
                <mt-tab-container-item id="2">
                    
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
// import mycnzzs from '../assets/lid/more';
import mygoodsImages from '../assets/lid/more';
export default {
    data(){
        return{
            cnzzs:[],
            selected:"1",
            goodsImages:[],
            imgs:[],
            goods:[],
            price:'',
        }
    },
    methods:{
        goto(){
            console.log(123);
            this.$router.go(-2);
        }
    },
    created(){
        // this.cnzzs=mycnzzs.cnzzs;
        this.goodsImages=mygoodsImages.goodsImages
        // console.log(this.cnzzs);
        let id = this.$route.params.id;
        // console.log(this.$route.params.id);
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
    .top{
        margin: 0.625rem 0.625rem 0.625rem 0.625rem;
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
            // margin-left:2.1875rem; 
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

</style>

