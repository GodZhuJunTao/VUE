<template>
    <div class="bigbox">
        <div class="header">
            <div class="header-box">
                <h2>送至 <span>广州市天河区慧通产业园</span></h2>
            </div>
            <div class="header-search">
                <input type="search" name="searchinput" placeholder="药品/症状/品牌" autocomplete="off" readonly="readonly" class="search-input">
            </div>
        </div>
        <div class="carousel">
            <mt-swipe :auto="2000">
                <mt-swipe-item v-for="item in cflist" :key="item.name">
                    <img :src="item.imgUrl" class="img">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div id="nav">
            <dl class="nav">
                <dt v-for="item in typelist" :key="item.name">
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
        <div class="headline">
            <dl>
                <dt>
                    <img src="../assets/jktt.png"/>
                </dt>
                <dd v-for="item in mlist" :key="item.title">{{item.title}}</dd>
            </dl>
        </div>
        <div class="hotgoods">
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
        <div class="footer">我是有底线的</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cflist:[],
            typelist:[],
            mlist:[],
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
            ]
        }
    },
    created(){
        this.$axios.get('ygapi?method=GetHomeNewInfoService-V10&client_type=wap').then(res=>{
            let data = res.data.hp;
            console.log(data);
            this.cflist = data.cfList;
            this.typelist = data.typeList;
            this.mlist = data.mList;
        })
    }
}
</script>

<style lang="scss" scoped>
    .hotgoods{
        h2{
            font-family: SimHei,Helvetica,Arial,sans-serif;
            font-size: 18px;
            color: #4d4e58;
            font-weight: 600;
            margin:20px 0;
        }
        // .hotgoods-scroll{
        //     border-radius: 5px
        // }
        .cube-scroll-content{
            display: inline-block;
        }
        .list-wrapper{
            // padding: 0 10px;
            // line-height: 60px;
            white-space: nowrap;
        }
        .list-item{
            // float: left;
            display: inline-block;
            width: 85px;
            img{
                width: 64px;
                height: 64px;
            }
            .hot_title{
                font-size: 12px;
                height: 15px;
                overflow: hidden;
                -webkit-line-clamp: 1;
                color: #4d4e58;
                word-break: keep-all;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .hot_price{
                font-size: 12px;
                height: 15px;
                color: #ff6b5f;
                margin-top: 5px;
                font-family: SimHei,Helvetica,Arial,sans-serif;
                font-weight: 600;
            }
        }
    }
    // 健康头条
    .headline{
        height: 58px;
        margin-top: 5%;
        line-height: 58px;
        border-top: 1px solid #dee2f6;
        border-bottom: 1px solid #dee2f6;
        overflow: hidden;
        dl {
            dt {
                float: left;
                line-height: 56px;
                height: 56px;
                width: 76px;
                img{
                    margin-top:17px;
                    width: 76px;
                    height: 24px;
                }
            }
            dd{
                float: left;
                width: 75%;
                // display: table;
                height: 56px;
                overflow: hidden;
                -webkit-line-clamp: 1;
                word-break: keep-all;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #4d4e58;
                font-size: 13px;
                padding-left: 2.5%;
            }   
        } 
    }
    // 相当于设置版心
    .bigbox{
        width: 95%;
        margin: 0 auto;
    }
    .carousel{
        margin-top: 85px;
        // padding: 0 10px;
        height: 98px;
        .mint-swipe{
            overflow: visible;
        }
        .mint-swipe-items-wrap{
            border-radius: 5px;
        }
        .mint-swipe-item{
            img{
                height: 98px;
                width: 100%;    
                border-radius: 5px;
            }
        }
        .mint-swipe-indicators{
            bottom: -20px;
        }
        .mint-swipe-indicator {
            width: 15px;
            height: 3px;
            display: inline-block;
            border-radius: 0;
            background: #000;
            opacity: 0.2;
            margin: 0 3px;
            
        }
        .mint-swipe-indicator.is-active{
            background: #007aff;
            opacity: 1;
        }
    }
    .header{
        height: 80px;
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
        margin: 10px auto 8px;
        float: left;
        margin-left: 2.5%;
        h2{
            font-weight: 700;
            color: #fff;
            font-family: SimHei,Helvetica,Arial,sans-serif;
            font-size: 13px;
            float: left;
            width: 25%;
            height: 20px;
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
        border-radius: 3px;
        font-family: SimHei,Helvetica,Arial,sans-serif;
        font-weight: 200;
        height: 33px;
        width: 100%;
        border: 0;
        text-align: center;
        background-size: 15px 15px;
        background-position: 25%;
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #4d4e58;
        font-size: 14px;
        letter-spacing: 1px;
        background-image: url(http://img.zdfei.com/static/image/htmls/single/2018-11-22/5bf677a1cfe12xx2.png);
        background-repeat: no-repeat;
    }
    .nav{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 95%;
        margin:30px auto 0;
        // justify-content:flex-end;
        dt{
            float: left;
            flex: 1;
            text-align: center; 
            margin:12px 8px 0;
            img{
                width: 40px;
                height: 40px;
            }
            a{
                color: #4d4e58;
                font-size: 12px;
            }
            span{
                display: block;
                margin-top: 10px;
            }
        }
    }
    .yyg{
        // padding: 0 8px;
        height: 82px;
        margin-top:20px;
        position: relative;
        img:nth-child(1){
            width: 304px;
            height: 77px;
        }
        .rjj,.store-title,.store-name{
            position: absolute;
        }
        img:nth-child(2){
            width: 7px;
            height: 12px;
            top:16px;
            left:159px;
        }
        h2:nth-child(3){
            font-size: 14px;
            color: #4d4e58;
            font-family: aril;
            letter-spacing: 1px;
            left:10px;
            top:14px;
            font-weight: 600;
        }
        p:nth-child(4){
            font-size: 12px;
            color: #4d4e58; 
            margin-top: 2px;
            font-family: SimHei,Helvetica,Arial,sans-serif;
            left:10px;
            top:35px;
        }
    }
    .footer{
        height: 80px;
    }
</style>
