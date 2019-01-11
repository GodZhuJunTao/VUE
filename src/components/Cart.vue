<template>
    <div>
        <footer>药品清单
            <span>编辑</span>
        </footer>
        <div id="cen">
            我是有底线的
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    //内容区域
    #cen{
        height: 900px;
        margin-top:50px;
    }
    // 顶部
    footer{
        position: fixed;
        background: #fff;
        top:0;
        left:0;
        width: 100%;
        height: 50px;
        font-size: 18px;
        line-height: 50px;
        text-align: center;
        border-bottom:1px solid #d7d7d7;
        // position: relative;
        span{
            float: right;
            font-size: 14px;
            position: absolute;
            right:20px;
        }
    }
</style>

