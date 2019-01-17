<template>
    <div class="bigbox">
        <div class="header">
            <a data-v-7cb41050="" href="javascript:;" class="iconfont icon-xiazai6" @click="back"></a>
            <div class="header_input">
                <input class="search-input" id="subcategory_search_input" name="keyword" readonly="readonly" type="search" maxlength="30" placeholder="药品、品牌或症状" @click="goto('Search')"/>
                <span id="search-btn" class="_new_magnifier"></span>
            </div>
        </div>
        <div class="bigcenter">
            <cube-scroll-nav
            :data="datalist"
            :current="current"
            id="datalist">
            <cube-scroll-nav-panel
                v-for="item in datalist"
                :key="item.category_name"
                :label="item.category_name"
                :title="item.category_name"
            >
                <img :src="'//img.zdfei.com/'+item.category_image_url">
                <ul>
                    <li v-for="items in item.goods" :key="items.goodsno" @click="goto('Detail',items.pid)">
                        <img :src="'//img.zdfei.com'+items.image">
                        <p><span class="otc"></span><span>{{items.name}}</span></p>
                        <p>{{items.indication}}</p>
                        <p>{{items.spec}}</p>
                        <p><span>￥</span>{{items.price}}</p>
                        <span>一日后到家</span>
                        <span></span>
                    </li>
                </ul>
            </cube-scroll-nav-panel>
            </cube-scroll-nav>
        </div>
    </div>
</template>

<script>
// import '../sass/Datalist.scss';
export default {
  data() {
    return {
      datalist: [],
      current: ""
    };
  },
    methods: {
        goto(name,id){
                // 编程式导航:获取router实例
                let obj = {name};
                if(id){
                    obj.params = {id};
                }
                this.$router.push(obj);
        },
        back(){
            this.$router.back();
        }
    },
  created() {
    let id = this.$route.params.id;
    console.log(this.$route.params.id);
    this.$axios
      .get(
        'ygapi?method=getProductSecondCategoryAndGoodsData&platformType=wap&pid='+id+'&storeid='
      ).then(res => {
        console.log(res.data.categorys);
        this.datalist = res.data.categorys;
        this.current = res.data.categorys[0].category_name;
      });
  }
};
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 3.125rem;
    background: -webkit-linear-gradient(left,#5fe8ce 2%,#4da5ed);
    z-index: 99;
    background: #fff;
    border-bottom:1px solid #efefef;
    a{
        width: 2.75rem;
        height: 2.75rem;
        text-align: center;
        line-height: 2.75rem;
        font-size: 1.5625rem;
        color: black;
        float: left;
    }
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
.cube-scroll-nav-panel{
    h2 {
        font-size: 1.625rem;
        color: #58bc58;
        text-align: center;
        display: none;
    }
    >img{
        // margin-top:2.5rem;
        width: 100%;
        height: 8.125rem;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        li:nth-child(odd){
            border-right:0.0625rem solid #efefef;
        }
        li:nth-child(even){
            border-left:0.0625rem solid #efefef;
        }
        li{
            width: 50%;
            // float: left;
            padding: 0.9375rem 0.625rem;
            border-bottom:0.125rem solid #efefef;
            height: 18.75rem;
            position: relative;
            img {
                width: 8.5rem;
                height: 8.5rem;
            }
            p:nth-child(2){
                font-size: 0.875rem;
                height: 1.25rem;
                width: 9.375rem;
                vertical-align: middle;
                .otc{
                    width: 1.625rem;
                    height: 0.875rem;
                    background: url(http://img.zdfei.com/static/image/temp/20180411/6a71eb885891225ace44258f31843d3e.png) no-repeat center center;
                    background-size: 1.5rem 0.875rem;
                    line-height: 0.875rem;
                    float:left;
                }
                span:nth-child(2){
                    float:right;
                    width: 7.5rem;
                    height: 1rem;
                    line-height: 1rem;
                    overflow: hidden;
                    word-break: keep-all;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            p:nth-child(3){
                font-size: 0.875rem;
                height: 1.25rem;
                line-height: 1.25rem;
                width: 8.4375rem;
                overflow: hidden;
                word-break: keep-all;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-top: 0.3125rem;
                color:#999;
            }
            p:nth-child(4){
                color:#999;
                font-size: 0.75rem;
                margin-top: 0.3125rem;
            }
            p:nth-child(5){
                color:#fe4310;
                font-size: 1.125rem;
                font-weight: 600;
                margin-top:1.875rem;
                span{
                    font-size: 0.875rem;
                }
            }
            span:nth-child(6){
                display: block;
                margin-top:0.3125rem;
                color:#fe4310;
                border:0.0625rem solid #fe4310;
                border-radius: 0.1875rem;
                width: 4.375rem;
                height: 0.9375rem;
                font-size: 0.625rem;
                text-align: center;
                line-height: 0.9375rem
            }
            span:nth-child(7){
                width: 1.3125rem;
                height: 1.3125rem;
                background: url(http://img.zdfei.com/static/image/temp/20180620/bc753c2e62386e1e3f359aef8bea998a.png) no-repeat center center;
                background-size: 1.3125rem;
                position: absolute;
                right: 0.625rem;
                bottom: 2.25rem;
                z-index: 9;
            }
        } 
    }
}


#cen{
    height: 100%;
}
</style>
