<template>
    <div style="padding-bottom:50px;">
        <div>
            <div class="top"><span class="img-noe"><img src="../img/jtou.png" alt=""></span><span class="img-two"><img src="../img/gd.png" alt=""></span></div>
            <mt-swipe :auto="0">
                    <mt-swipe-item><img src="../img/g1.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../img/g2.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../img/g3.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../img/g4.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../img/g5.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
            <div style="border-bottom:1px solid #ECECEC;margin:0 10px 0 10px;">
                    <p class="p-noe">康美尚四季感冒片(薄膜衣片)<img src="../img/oct.jpg" class="img-therr"></p>
                    <span class="s-noe">0.5g*48片</span>
                    <span class="s-two">￥23.90</span>
            </div>
            <div class="center">
                <p><span>功效</span>&nbsp;清热解表。用于四季寒风感冒引起的发热...<img src="../img/gd1.png"><br/><span>厂家</span>江西华太药业有限公司</p>
                <p><span>规格</span>&nbsp;0.5*48片<img src="../img/gd1.png"></p>
            </div>
            <div class="back"></div>
            <div class="img-four"><img src="../img/cn.jpg" alt=""></div>
            <div>
               <cube-scroll  ref="scroll"  direction="horizontal" class="horizontal-scroll-list-wrap">
                    <ul class="list-wrapper">
                            <li  class="list-item" v-for="(item,i) in cnzzs" :key="i"><img :src="item.abbreviation_picture" alt=""><span>{{item.short_name}}</span><span style="color:red;">{{item.price}}</span></li>
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
                                <li  v-for="(item,i) in goodsImages" :key="i"><img :src="item.images" alt=""></li>
                            </ul>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="2">
                            
                        </mt-tab-container-item>
                        <mt-tab-container-item id="3">
                            
                        </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>

<script>
import mycnzzs from '../assets/lid/more';
import mygoodsImages from '../assets/lid/more';
export default {
    data(){

        return{
           cnzzs:[],
           selected:"1",
           goodsImages:[]
        }
    },
    created(){
        this.cnzzs=mycnzzs.cnzzs;
        this.goodsImages=mygoodsImages.goodsImages
        console.log(this.cnzzs);
        
    }
}
</script>

<style  lang="scss" scoped>
    .top{
        margin: 10px 10px 10px 10px;
        .img-noe{
            float: left;
            img{
                display: block;
                width: 25px;
            }
        }
        .img-two{
            float:right;
            img{
                 display: block;
                width: 25px;
            }
        }
    }
    .mint-swipe{
        height: 250px;
        img{
            display: block;
            height: 250px;
            margin-left:35px; 
        }
    }
    .p-noe{
        margin: 0 38px 0 24px;
        color: #2D2D2D;
        font-size:20px;
         .img-therr{
             float: right;
             display: inline-block;
             width: 20px;
         }
    }
    .s-noe{
         margin: 10px 0 0 24px;
        color: #2D2D2D;
        font-size:20px;
        display: block;
    }
    .s-two{
        font-size:20px;
        display: block;
        color: red;
         margin: 10px 0 15px 24px;
    }
    .center{
        margin:0 10px 0 10px;
        p{
            border-bottom:1px solid #ECECEC; 
            font-size: 12px;
            line-height: 24px;
            // height: 48px;
            padding:10px 0 10px 0; 
            span{
                display: inline-block;
                color:#909090;
                padding-right:5px; 
            }
            img{
                width: 20px;
                float: right;
            }
        }
    }
    .back{
        background:#F7F7F7;
        height: 15px;
    }
    .img-four{
        margin:40px 10px 20px 10px;
       
        img{
            display: block;
        width: 350px;
        }
    }
    .cube-scroll-content{
          display: inline-block;
          .list-wrapper{
            display: flex;
        
                .list-item{
                    margin:3px 5px 3px 5px;
                    float: left;
                    width: 100px;
                    height: 140px;
                    display: inline-block;
                    
                    span{
                        font-size:12px;
                    }
                    img{
                        width: 100px;
                        height: 100px;
                    }
                }
          }

    }
  
    .bottom{
        margin-top:40px;
        h3{
            font-size:16px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            
        }
    }

</style>

