<template>
    <div>
        <footer>
            <a href="javascript:;" class="iconfont icon-left-circle" @click="back"></a>
            <div>
                <i class="iconfont icon-sousuo"></i>
                <input type="search" placeholder="药品/症状/品牌">
            </div>
            <a href="javascript:;">搜索</a>
        </footer>
        <div id="cen">
            <div>
                <h2>热搜</h2>
                <ul>
                    <li v-for="item in datas" :key="item.key">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datas: [
                { hit_counts: 2509, name: "感冒", id: 3 },
                { hit_counts: 1250, name: "阳痿", id: 1 },
                { hit_counts: 1175, name: "壮阳", id: 109 },
                { hit_counts: 893, name: "避孕", id: 2 },
                { hit_counts: 482, name: "肾宝片", id: 4 },
                { hit_counts: 342, name: "清热解毒", id: 5 },
                { hit_counts: 294, name: "拉肚子", id: 38 },
                { hit_counts: 282, name: "复方玄驹胶囊", id: 218 },
                { hit_counts: 280, name: "鼻炎", id: 32 },
                { hit_counts: 241, name: "果维康", id: 6 }
            ]
        };
    },
    methods:{
        back(){
            this.$router.back();
        }
    }
};
</script>

<style lang="scss" scoped>
// 内容区域
#cen {
    border-top: 0.0625rem solid #d7d7d7;
    div {
        width: 95%;
        margin: 0.9375rem auto 0;
        h2 {
            color: #d7d7d7;
            font-family: SimHei;
            font-size: 1rem;
        }
        ul {
            margin-top: 0.625rem;
            li {
                margin: 0.3125rem;
                background: #efefef;
                width: 30%;
                height: 1.875rem;
                line-height: 1.875rem;
                text-align: center;
                float: left;
                opacity: 0.5;
                color: black;
                border-radius: 0.3125rem;
                font-size: 0.75rem;
            }
        }
    }
}
// 顶部
footer {
// width: 20rem;
    height: 2.75rem;
    a {
        width: 2.75rem;
        height: 2.75rem;
        text-align: center;
        line-height: 2.75rem;
        font-size: 1.5625rem;
        color: black;
        float: left;
    }
    a:nth-child(3) {
        font-size: 1rem;
        color: #58bc58;
        float: right;
    }
    div {
        border: 0.0625rem solid #dadada;
        height: 2rem;
        margin-top: 0.375rem;
        background: #efefef;
        border-radius: 3.125rem;
        float: left;
        position: relative;
        width: 72.5%;
        line-height: 2rem;
        i {
            position: absolute;
            top: 0;
            left: 1.25rem;
            color: #58bc58;
            font-size: 1rem;
        }
        input {
            // position: absolute;
            margin-right: 1.875rem;
            height: 1.5625rem;
            background: #efefef;
            margin-left: 2.5rem;
            caret-color: #58bc58;
            width: 11.25rem;
            // font-weight: 600;
        }
    }
}
</style>
