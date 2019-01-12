<template>
  <div style="padding-bottom:50px;">
    <div class="top">
      <img src="../img/sz.png" alt style="float:right;padding-right:10px;">
      <span class="head">
        <i class="head-i">
          <img src="../img/tx.png" alt>
        </i>
      </span>
      <span class="enter">登录/注册</span>
      <p class="box">
        <span>
          <img src="../img/vip.png" alt class="i-1">会员卡
        </span>
        <i>
          <img src="../img/kq.png" alt class="i-2">卡券
        </i>
        <i>
          <img src="../img/tk.png" alt class="i-2">关注
        </i>
        <i>
          <img src="../img/gz.png" alt class="i-2">积分
        </i>
        <i>
          <img src="../img/tm.png" alt class="i-2">条码
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
    <div style="height: 30px;">
      <h2 class="h-two">
      <span class="s-three">健康档案</span>
      <span class="s-four">全部</span>
    </h2>
    </div>
    
    <div>
          <cube-scroll ref="scroll" direction="horizontal" class="horizontal-scroll-list-wrap">
      <ul class="list-wrapper">
        <li class="list-item" v-for="(item,i) in stamina" :key="i">
          <i><img :src="item.img"/></i>
          <span>{{item.corporeity}}</span><br/>
          <span>{{item.facility}}</span><br/>
           <span>{{item.tiem}}</span><br/>
        </li>
      </ul>
    </cube-scroll>
    </div>
    <div>
      <ul>
        <li class="point-i" v-for="(item,i) in point" :key="i">{{item.gps}}<span>{{item.phone}}&nbsp;&nbsp;<img :src="item.img" alt=""></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import datall from "../assets/lid/data";
import myhealth from "../assets/lid/health";
export default {
  data() {

    return {
      draw: [],
      stamina: [],
      point:[{"gps":"收货地址","img":"../img/jt.jpg"},{"gps":"积分商城","img":"../img/jt.jpg"},{"gps":"在线客服","img":"../img/jt.jpg"},{"gps":"健康管家","phone":"400606311","img":"../img/jt.jpg"},{"gps":"意见反馈","img":"../img/jt.jpg"}]
    };
  },
  created() {
    this.draw = datall;
    this.stamina = myhealth;
    this.point=mypoint;
  }
};
</script>

<style lang="scss" scoped>
.top {
  background: url(../img/bj.jpg) repeat-y;
  height: 150px;
  .head {
    
    margin-top: 30px;
    margin-left: 10px;
    display: inline-block;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    padding-top: 5px;
  }
  .head-i {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #eeeff4;
    border-radius: 50%;
  }
  .enter {
    color: #fff;
    margin-left: 10px;
  }
  .box {
    display: flex;
    justify-content: center;
    margin: 20px 10px 0 10px;
    border-radius: 10px 10px 0 0;
    background: url(../img/bj1.jpg) repeat-y;
    height: 50px;
    span {
      display: inline-block;
      width: 42px;
      height: 50px;
      line-height: 50px;
      margin-right: 24px;

      color: #eac47b;
      font-size: 10px;
      .i-1 {
        width: 12px;
      }
    }
    i {
      display: inline-block;
      width: 30px;
      font-size: 10px;
      color: #eac47b;
      margin: 9px 9px 0 5px;
      .i-2 {
        width: 22px;
      }
    }
  }
}
.h-noe {
  margin: 15px 10px 30px 10px;
  .s-noe {
    float: left;
  }
  .s-two {
    float: right;
    padding-right: 20px;
    background: url(../img/jt1.png) no-repeat right;
  }
}
.ul-i {
  height: 150px;
  border-bottom: 1px solid #e8e8e8;
  margin: 0 10px 0 10px;
  .li-i {
    padding:0px 65px 28px 23px;
    width: 75px;
    float: left;
    span {
      display: block;
      width: 75px;
      font-size: 12px;
      margin-top: 5px;
    }
  }
}
.h-two {
  margin: 15px 10px 15px 10px;
  .s-three {
    float: left;
  }
  .s-four {
    float: right;
    padding-right: 20px;
    background: url(../img/jt1.png) no-repeat right;
  }
}
.horizontal-scroll-list-wrap {
  height: 150px;
  border-bottom: 1px solid #e8e8e8;
  margin: 0 10px 0 10px;
  .cube-scroll-content{
    display: inline-block;
    }
  .list-wrapper{
    white-space: nowrap
    }
  .list-item{
    display: inline-block;
    height: 130px;
    width: 120px;
    margin: 3px 5px 0 5px;
    border-radius: 10px;
    background:#ECEBF0;
      img{
        display: block;
        width: 20px;
        height: 20px;
      }
        i{
          display:block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #959CF7;
          margin: 10px 0 10px 10px ;
          padding: 5px 0 0 5px;
        }
        span{
          display:block;
          font-size:12px;
          padding-left: 10px;
        }
    }
}
.point-i{
  font-size:12px;
  line-height: 45px;
  border-bottom:1px solid #E8E8E8;
  margin: 0 10px 0 10px; 
  color: #4B4B4B;
  span{
    font-size:12px;
  line-height: 45px;
  color: #4B4B4B;
  float:right;
  
    img{
      width: 8px;
      height: 8px;
    }
  }
  
}
</style>
