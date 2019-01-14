<template>
    <div class="bigbox">
        <div class="header">
            <div class="header-box">
                <h2>送至 <span>广州市天河区慧通产业园</span></h2>
            </div>
            <div class="header-search">
                <input type="search" name="searchinput" placeholder="药品/症状/品牌" autocomplete="off" readonly="readonly" class="search-input" @click="goto('Search')"/>
            </div>
        </div>
        <div id="carousel">
            <mt-swipe :auto="2000">
                <mt-swipe-item v-for="item in cflist" :key="item.name">
                    <img :src="item.imgUrl" class="img">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div id="nav">
            <dl class="nav">
                <dt v-for="item in typelist" :key="item.name" @click="goto('Datalist',item.imgUrl)">
                    <a href="javascript:;">
                        <img :src="item.img">
                        <span>{{item.title}}</span>
                    </a>
                </dt>
            </dl>
        </div>
        <div class="yyg">
            <img src="../assets/yyg.png"/>
            <img src="../assets/rjj.png" class="rjj">
            <h2 class="store-title">111医药馆网上商城</h2>
            <p class="store-name">1日后到家</p>
        </div>
        <div id="headline">
            <dl>
                <dt>
                    <img src="../assets/jktt.png"/>
                </dt>
                <dd class="headline">
                    <ul ref="newsUl">
                        <li v-for="item in headlineNews" :key="item.title">
                            {{item.title}}
                        </li>
                    </ul>
                </dd>
            </dl>
        </div>
        <div id="hotgoods">
            <h2>热销商品</h2>
            <cube-scroll
            ref="scroll"
            direction="horizontal"
            class="horizontal-scroll-list-wrap">
                <ul class="list-wrapper">
                    <li v-for="(item,idx) in hotgoods" class="list-item" :key="idx">
                        <img :src="item.img"/>
                        <p class="hot_title">{{item.short_name}}</p>
                        <p class="hot_price">￥{{item.price}}</p>
                    </li>
                </ul>
            </cube-scroll>
            
        </div>
        <div id="project">
            <h2>健康照顾方案</h2>
            <ul>
                <li v-for="item in list" :key="item.id">
                    <img :src="item.imgUrl"/>
                </li>
            </ul>
        </div>
        <div class="footer">我是有底线的</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cflist:[],
            typelist:[],
            headlineNews:[
                {
                    title: "你胖，不是因为懒，要怪身体里的一种基因！"
                },{
                    title: "小心了！做这些事情，你会招惹到“大姨妈”！"
                },{
                    title: "数九寒天，宝宝感冒了，可以给他们喝这几种汤！"
                },{
                    title: "每个被口臭困扰的人，都该知道这些！"
                },{
                    title: "明明只是眼睛疲劳，怎么就成了病？"
                }
            ],
            hotgoods:[
                {
                    "price": 26.9,
                    "goodsno": "0301035",
                    "goods_id": 3151,
                    "short_name": "同仁堂 五子衍宗丸",
                    "img":"../assets/hotgoods/trt.jpg"
                },
                {
                    "price": 29,
                    "goodsno": "0113132",
                    "goods_id": 7531,
                    "short_name": "格华止 盐酸二甲双胍片",
                    "img":"../assets/hotgoods/zkt.jpg"
                },
                {
                    "price": 33.9,
                    "goodsno": "0314196",
                    "goods_id": 5850,
                    "short_name": "同仁堂 右归丸",
                    "img":"../assets/hotgoods/ygw.jpg"
                },
                {
                    "price": 15,
                    "goodsno": "0405007",
                    "goods_id": 1305,
                    "short_name": "999  三九胃泰颗粒",
                    "img":"../assets/hotgoods/999.jpg"
                },
                {
                    "price": 14.3,
                    "goodsno": "0405036",
                    "goods_id": 5583,
                    "short_name": "北华 枸橼酸钾颗粒",
                    "img":"../assets/hotgoods/bh.jpg"
                },
                {
                    "price": 29,
                    "goodsno": "0113132",
                    "goods_id": 7531,
                    "short_name": "格华止 盐酸二甲双胍片",
                    "img":"../assets/hotgoods/zkt.jpg"
                },
                {
                    "price": 33.9,
                    "goodsno": "0314196",
                    "goods_id": 5850,
                    "short_name": "同仁堂 右归丸",
                    "img":"../assets/hotgoods/ygw.jpg"
                },
                {
                    "price": 15,
                    "goodsno": "0405007",
                    "goods_id": 1305,
                    "short_name": "999  三九胃泰颗粒",
                    "img":"../assets/hotgoods/999.jpg"
                },
                {
                    "price": 14.3,
                    "goodsno": "0405036",
                    "goods_id": 5583,
                    "short_name": "北华 枸橼酸钾颗粒",
                    "img":"../assets/hotgoods/bh.jpg"
                }  
            ],
            list:[]
        }
    },
    methods:{
        goto(name,id){
            // 编程式导航:获取router实例
            let obj = {name};
            if(id){
                id = id.split('=')[1];  
                obj.params = {id};
            }
            this.$router.push(obj);
        },
        changeNews(){
            var ulTimer;
            clearInterval(ulTimer);
            ulTimer = setInterval(()=>{
                var prevItem = this.headlineNews[0];
                this.headlineNews.shift();
                this.headlineNews.push(prevItem);
                if(this.$refs.newsUl){
                    this.$refs.newsUl.style.top = 0;
                    var newsTimer;
                    clearInterval(newsTimer);
                    newsTimer = setInterval(()=>{
                        if(this.$refs.newsUl){
                            var cur = parseInt(getComputedStyle(this.$refs.newsUl,false).top);
                            if(cur > -16){
                                this.$refs.newsUl.style.top = cur - 1 + "px";
                            }else{
                                clearInterval(newsTimer);
                            }
                        }else{
                            clearInterval(newsTimer);
                        }
                    },30);
                }else{
                    clearInterval(ulTimer);
                }
            },4000); 
        }
    },
    created(){
        this.$axios.get('ygapi?method=GetHomeNewInfoService-V10&client_type=wap').then(res=>{
            let data = res.data.hp;
            console.log(data);
            this.cflist = data.cfList;
            this.typelist = data.typeList;
            // this.mlist = data.mList;
        })
        this.$axios.get('ygapi?method=GetHomePageActivityServiceV4&client_type=wap&pageNo=2&pageSize=8').then(res=>{
            let data = res.data.list;
            console.log(data);
            this.list = data;
        })
    },
    mounted(){
        // console.log(123);
        this.changeNews();
    }
}
</script>

<style lang="scss" scoped>
    // 健康照顾方案
    #project{
        li{
            margin-top:.3125rem;
        }
        h2{
            font-family: SimHei,Helvetica,Arial,sans-serif;
            font-size: 1.125rem;
            color: #4d4e58;
            font-weight: 900;
            margin:1.25rem 0;
        }
        img{
            width: 100%;
            height: 6.75rem;
        }
    }
    // 健康头条
    #headline{
        height: 3.625rem;
        margin-top: 5%;
        line-height: 3.625rem;
        border-top: 0.0625rem solid #dee2f6;
        border-bottom: 0.0625rem solid #dee2f6;
        overflow: hidden;
        position: relative;
        dl {
            dt {
                float: left;
                line-height: 3.5rem;
                height: 3.5rem;
                width: 4.75rem;
                img{
                    margin-top:0.9375rem;
                    width: 4.75rem;
                    height: 1.5rem;
                }
            }
            dd{
                ul{
                    margin-top:1rem;
                    position: absolute;
                    width: 75%;
                    height: 3.5rem;
                    overflow: hidden;
                    word-break: keep-all;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #4d4e58;
                    font-size: 0.8125rem;
                    padding-left: 2.5%;
                    top:-1rem;
                    left:4.75rem;
                    li{
                        overflow: hidden;
                        word-break: keep-all;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        color: #4d4e58;
                        font-size: 0.8125rem;
                    }
                }
            }   
        } 
    }
    // 相当于设置版心
    .bigbox{
        width: 95%;
        margin: 0 auto;
    }
    .header{
        height: 5rem;
        width: 100%;
        background: -webkit-linear-gradient(left,#5fe8ce 2%,#4da5ed);
        position: fixed;
        top: 0;
        z-index: 99;
        left: 0;
    }
    .header-box {
        display: block;
        width: 95%;
        margin: 0.625rem auto 0.5rem;
        float: left;
        margin-left: 2.5%;
        h2{
            font-weight: 700;
            color: #fff;
            font-family: SimHei,Helvetica,Arial,sans-serif;
            font-size: 0.8125rem;
            float: left;
            width: 25%;
            height: 1.25rem;
            overflow: hidden;
            -webkit-line-clamp: 1;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    .header-search {
        display: table;
        width: 95%;
        margin: 0 auto;
    }
    .header-search .search-input {
        background-color: #f5f9fa;
        border-radius: 0.1875rem;
        font-family: SimHei,Helvetica,Arial,sans-serif;
        font-weight: 200;
        height: 2.0625rem;
        width: 100%;
        border: 0;
        text-align: center;
        background-size: 0.9375rem 0.9375rem;
        background-position: 25%;
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #4d4e58;
        font-size: 0.875rem;
        letter-spacing: 0.0625rem;
        background-image: url(http://img.zdfei.com/static/image/htmls/single/2018-11-22/5bf677a1cfe12xx2.png);
        background-repeat: no-repeat;
    }
    .nav{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 95%;
        margin:1.875rem auto 0;
        // justify-content:flex-end;
        dt{
            float: left;
            flex: 1;
            text-align: center; 
            margin:0.75rem 0.5rem 0;
            img{
                width: 2.5rem;
                height: 2.5rem;
            }
            a{
                color: #4d4e58;
                font-size: 0.75rem;
            }
            span{
                display: block;
                margin-top: 0.625rem;
            }
        }
    }
    .yyg{
        // padding: 0 0.5rem;
        height: 5.125rem;
        margin-top:1.25rem;
        position: relative;
        img:nth-child(1){
            width: 100%;
            height: 4.8125rem;
        }
        .rjj,.store-title,.store-name{
            position: absolute;
        }
        img:nth-child(2){
            width: 0.4375rem;
            height: 0.75rem;
            top:1rem;
            left:9.9375rem;
        }
        h2:nth-child(3){
            font-size: 0.875rem;
            color: #4d4e58;
            font-family: aril;
            letter-spacing: 0.0625rem;
            left:0.625rem;
            top:0.875rem;
            font-weight: 600;
        }
        p:nth-child(4){
            font-size: 0.75rem;
            color: #4d4e58; 
            margin-top: 0.125rem;
            font-family: SimHei,Helvetica,Arial,sans-serif;
            left:0.625rem;
            top:2.1875rem;
        }
    }
    .footer{
        height: 5rem;
    }
</style>
