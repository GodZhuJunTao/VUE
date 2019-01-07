<template>
    <div>
        <div class="header">
            <div class="header-box">
                <h2>送至 <span>广州市天河区慧通产业园</span></h2>
            </div>
            <div class="header-search">
                <input type="search" name="searchinput" placeholder="药品/症状/品牌" autocomplete="off" readonly="readonly" class="search-input">
            </div>
        </div>
        <div class="carousel">
            <mt-swipe :show-indicators="false" :auto="2000">
                <mt-swipe-item v-for="item in cflist" :key="item.name">
                    <img :src="item.imgUrl">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- <div>
            asdwasd
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            cflist:[]
        }
    },
    created(){
        this.$axios.get('ygapi?method=GetHomeNewInfoService-V10&client_type=wap').then(res=>{
            let data = res.data.hp.cfList;
            console.log(data);
            this.cflist = data;
        })
    }
}
</script>

<style lang="scss">
    .mint-swipe img{
        height: 98px;
        width: 100%;
        border-radius: 5px;
    }
    .carousel{
        margin-top: 85px;
        padding: 0 10px;
        height: 98px;
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
        margin: 0 auto;
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
</style>
