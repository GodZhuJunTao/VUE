<template>
    <div>
        <footer>
            <a href="javascript:;" class="iconfont icon-left-circle"></a>
            <div>
                <i class="iconfont icon-sousuo"></i>
                <input type="search" placeholder="药品/症状/品牌"/> 
            </div>
            <a href="javascript:;">搜索</a>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    footer{
        width: 320px;
        height: 45px;
        a{
            width: 45px;
            height: 45px;
            text-align: center;
            line-height: 45px;
            font-size: 25px;
            color:black;
            float: left;
        }
        a:nth-child(3){
            font-size: 16px;
            color:#58bc58;
        }
        div{
            border: 1px solid #dadada;
            height: 32px;
            margin-top:6px;
            background: #efefef;
            border-radius: 50px;
            float: left;
            position: relative;
            width: 230px;
            line-height: 32px;
            i{
                position: absolute;
                top:0;
                left:20px;
                color:#58bc58;
                font-size: 16px;
            }
            input{
                // position: absolute;
                height: 16px;
                background: #efefef;
                margin-left:40px;
                caret-color:#58bc58; 
                width: 180px;
                // font-weight: 600;
            }
        }
    }
</style>
