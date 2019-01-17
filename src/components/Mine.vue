<template>
    <div class="bigbox">
        <div class="bigcenter">
            <div class="top">
                <img src="@/img/sz.png" alt style="float:right;padding-right:0.625rem;">
                <span class="head">
                    <i class="head-i">
                        <img src="@/img/tx.png" alt>
                    </i>
                </span>
                <span class="enter" @click="goto('login')">登录/注册</span>
                <p class="box">
                <span>
                    <img src="@/img/vip.png" alt class="i-1">会员卡
                </span>
                <i>
                    <img src="@/img/kq.png" alt class="i-2">卡券
                </i>
                <i>
                    <img src="@/img/tk.png" alt class="i-2">关注
                </i>
                <i>
                    <img src="@/img/gz.png" alt class="i-2">积分
                </i>
                <i>
                    <img src="@/img/tm.png" alt class="i-2">条码
                </i>
                </p>
            </div>
            <h2 class="h-noe">
                <span class="s-one">我的订单</span>
                <span class="s-two">全部</span>
            </h2>
            <ul class="ul-i">
                <li v-for="(item,i) in draw" :key="i" class="li-i">
                    <img :src="item.img">
                    <span>{{item.term}}</span>
                </li>
            </ul>
            <div style="height: 1.875rem;">
                <h2 class="h-two">
                    <span class="s-three">健康档案</span>
                    <span class="s-four">全部</span>
                </h2>
            </div>

            <div id="mine">
                <cube-scroll ref="scroll" direction="horizontal" class="horizontal-scroll-list-wrap">
                    <ul class="list-wrapper">
                        <li class="list-item" v-for="(item,i) in stamina" :key="i">
                            <i>
                                <img :src="item.img">
                            </i>
                            <span>{{item.corporeity}}</span>
                            <br>
                            <span>{{item.facility}}</span>
                            <br>
                            <span>{{item.tiem}}</span>
                            <br>
                        </li>
                    </ul>
                </cube-scroll>
            </div>
            <div>
                <ul>
                    <li class="point-i" v-for="(item,i) in point" :key="i">
                        {{item.gps}}
                        <span>
                        {{item.phone}}&nbsp;&nbsp;
                        <img :src="item.img" alt>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <Nav></Nav>
    </div>
</template>

<script>
import Nav from './Nav';
export default {
    data() {
        return {
            draw: [{
                "img":require("@/img/df.png"),
                "term":"待付款" 
            },
            {
                "img":require("@/img/db.png"),
                "term":"待发货"
            },{
                "img":require("@/img/sh.png"),
                "term":"待收货"
            },{
                "img":require("@/img/pinglun.png"),
                "term":"待评论"
            },{
                "img":require("@/img/shouhou.png"),
                "term":"售后/退款"
            },{
                "img":require("@/img/ss.png"),
                "term":"找药需求"
            },{
                "img":require("@/img/md.png"),
                "term":"门店订单"
            },{
                "img":require("@/img/pl.png"),
                "term":"兑换记录"
            }],
            stamina: [{
                        "img":require("@/img/sb.png"),
                        "corporeity":"步数",
                        "facility":"绑定手环",
                        "tiem":"0"
                    },
                    {
                        "img":require("@/img/xy.png"),
                        "corporeity":"血压",
                        "facility":"--",
                        "tiem":"--"
                    },
                    {
                        "img":require("@/img/xt.png"),
                        "corporeity":"血糖",
                        "facility":"--",
                        "tiem":"--"
                    },
                    {
                        "img":require("@/img/tz.png"),
                        "corporeity":"体重",
                        "facility":"--",
                        "tiem":"--"
                        
                    }],
            point: [
                { gps: "收货地址", img: require("@/img/jt.jpg") },
                { gps: "积分商城", img: require("@/img/jt.jpg") },
                { gps: "在线客服", img: require("@/img/jt.jpg") },
                { gps: "健康管家", phone: "400606311", img: require("@/img/jt.jpg") },
                { gps: "意见反馈", img: require("@/img/jt.jpg") }
            ]
        };
    },
    methods:{
        goto(path){
            this.$router.push(path);
        }
    },
    components:{
        Nav
    }
};
</script>

<style lang="scss" scoped>
.top {
    background: url(../img/bj.jpg) repeat-y;
    height: 9.375rem;
    .head {
        margin-top: 1.875rem;
        margin-left: 0.625rem;
        display: inline-block;
        width: 3.125rem;
        height: 3.125rem;
        background: #fff;
        border-radius: 50%;
        text-align: center;
        padding-top: 0.3125rem;
    }
    .head-i {
        display: inline-block;
        width: 2.5rem;
        height: 2.5rem;
        background: #eeeff4;
        border-radius: 50%;
        }
    .enter {
        color: #fff;
        margin-left: 0.625rem;
    }
    .box {
        display: flex;
        justify-content: center;
        margin: 1.25rem 0.625rem 0 0.625rem;
        border-radius: 0.625rem 0.625rem 0 0;
        background: url(../img/bj1.jpg) repeat-y;
        height: 3.125rem;
        span {
            display: inline-block;
            width: 2.625rem;
            height: 3.125rem;
            line-height: 3.125rem;
            margin-right: 1.5rem;

            color: #eac47b;
            font-size: 0.625rem;
            .i-1 {
                width: 0.75rem;
            }
        }
        i {
            display: inline-block;
            width: 1.875rem;
            font-size: 0.625rem;
            color: #eac47b;
            margin: 0.5625rem 0.5625rem 0 0.3125rem;
            .i-2 {
                width: 1.375rem;
            }
        }
    }
}
.h-noe {
    margin: 0.9375rem 0.625rem 1.875rem 0.625rem;
    .s-noe {
        float: left;
    }
    .s-two {
        float: right;
        padding-right: 1.25rem;
        background: url(../img/jt1.png) no-repeat right;
    }
}
.ul-i {
    height: 9.375rem;
    border-bottom: 0.0625rem solid #e8e8e8;
    margin: 0 0.625rem 0 0.625rem;
    .li-i {
        // padding: 0rem 4.0625rem 1.75rem 1.4375rem;
        // width: 4.6875rem;
        width: 25%;
        float: left;
        text-align: center;
        margin-top:0.9375rem;
        span {
            display: block;
            // width: 4.6875rem;
            font-size: 0.75rem;
            margin-top: 0.3125rem;
        }
    }
}
.h-two {
    margin: 0.9375rem 0.625rem 0.9375rem 0.625rem;
    .s-three {
        float: left;
    }
    .s-four {
        float: right;
        padding-right: 1.25rem;
        background: url(../img/jt1.png) no-repeat right;
    }
}

.point-i {
    font-size: 0.75rem;
    line-height: 2.8125rem;
    border-bottom: 0.0625rem solid #e8e8e8;
    margin: 0 0.625rem 0 0.625rem;
    color: #4b4b4b;
    span {
        font-size: 0.75rem;
        line-height: 2.8125rem;
        color: #4b4b4b;
        float: right;

        img {
            width: 0.5rem;
            height: 0.5rem;
        }
    }
}
</style>
