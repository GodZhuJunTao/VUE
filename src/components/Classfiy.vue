<template>
    <div>
        <header class="header">
            <div class="header_input">
                <input class="search-input" id="subcategory_search_input" name="keyword" type="search" maxlength="30" placeholder="药品、品牌或症状"/>
                <span id="search-btn" class="_new_magnifier"></span>
            </div>
        </header>
        <div id="con">
            <div class="c_top">
                <cube-scroll
                ref="scroll"
                direction="horizontal"
                class="horizontal-scroll-list-wrap">
                    <ul class="list-wrapper">
                        <li v-for="item in list" class="list-item" :class="{'active':item.status}" :key="item.gid">{{ item.name }}</li>
                    </ul>
                </cube-scroll>
            </div>
            <div class="c_cen">
                <div v-for="items in lists" :key="items.pid">
                    <img :src="items.imgs">
                    <ul>
                        <li v-for="item in items.plist" :key="item.pid">
                            {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <footer>
            我是有底线的
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[],
            lists:[]
        }
    },
    created(){
        this.$axios.get('../plugins/list.json').then(res=>{
            this.list = res.data.list;
            console.log(this.list);
        })
        this.$axios.get('../plugins/lists.json').then(res=>{
            this.lists = res.data;
            console.log(this.lists);
        })
    }
}
</script>

<style lang="scss" scoped>
    // 内容区域
    #con{
        margin: 3.75rem auto 3.125rem;
        .c_top{
            ul {
                width: 32.5rem;
                height: 3.1875rem;
                border-bottom:0.0625rem solid #efefef;
                .active{
                    border-bottom:0.125rem solid #222;
                    font-weight: 900;
                }
                li{
                    width: 4.625rem;
                    height: 3.125rem;
                    line-height: 3.125rem;
                    float: left;
                    text-align: center;
                    margin-right: 1.25rem;
                    margin-left:0.625rem;
                }
            }
        }
        .c_cen{
            width:17.75rem;
            margin:0.625rem auto 0;
            img{
                width: 17.75rem;
                height: 3.5rem;
                margin-bottom:0.625rem;
            }
            ul{
                li{
                    width: 33.3%;
                    float: left;
                    overflow: hidden;
                    white-space: nowrap;
                    word-break: keep-all;
                    text-overflow: ellipsis;
                    font-size: 0.875rem;
                    color: #222;
                    text-align: center;
                    line-height: 1.25rem;
                    padding: 0.9375rem 0;
                }
            }
        }
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
    footer{
        height: 4.375rem;
    }
</style>
