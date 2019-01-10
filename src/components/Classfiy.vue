<template>
    <div>
        <header class="header">
            <div class="header_input">
                <input class="search-input" id="subcategory_search_input" name="keyword" type="search" maxlength="30" placeholder="药品、品牌或症状"/>
                <span id="search-btn" class="_new_magnifier"></span>
            </div>
        </header>
        <div id="con">
            <cube-scroll-nav>
                <cube-scroll-nav-panel v-for="item in list" :key="item.pid" :label="item.name">
                    <ul>
                    <li v-for="small in item.plist" :key="small.pid">
                        <div>
                            <!-- <img :src="food.icon"> -->
                            <p>{{small.pid}}</p>
                        </div>
                    </li>
                    </ul>
                </cube-scroll-nav-panel>
            </cube-scroll-nav>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.$axios.get('ygapi?method=getnewplatformproductcategoryuriservice&platForm=wap&timestamp=1547042740317&sign=f548b0f73eff9cff2228c8040e1af542').then(res=>{
            this.list = res.data.list;
            console.log(this.list);
        })
    }
}
</script>

<style lang="scss" scoped>
    // 内容区域
    #con{
        margin-top:2.75rem;
    }
    // 头部
    .header{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        width: 100%;
        height: 44px;
        z-index: 99;
        background: #fff;
        .header_input{
            height: 30px;
            position: absolute;
            left: 44px;
            right: 44px;
            top: 7px;
            background: #efefef;
            border-radius: 20px;
            -webkit-border-radius: 20px;
            padding: 0 14px 0 34px;
            input{
                height: 18px;
                line-height: 18px;
                font-size: 15px;
                width: 100%;
                float: left;
                margin: 6px 0;
                color: #222;
                overflow: hidden;
                word-break: keep-all;
                white-space: nowrap;
                text-overflow: ellipsis;
                background: #efefef;
            }
            span{
                width: 34px;
                height: 30px;
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                background: url(../assets/ss.png) no-repeat 14px center;
                background-size: 14px;
            }
        }
    }
</style>
