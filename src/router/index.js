import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from 'com/Home';
import Classfiy from 'com/Classfiy';
import Robot from 'com/Robot';
import Cart from 'com/Cart';
import Mine from 'com/Mine';
import Login from 'com/Login';
    import Em from 'com/login/Em';
    import Mima from 'com/login/Mima';
import Search from 'com/Search';
import Detail from 'com/Detail';
const routes = [
    {path:'/',redirect:{name:'Home'}},
    {name:'Home',path:'/home',component:Home},
    {name:'Classfiy',path:'/classfiy',component:Classfiy},
    {name:'Robot',path:'/robot',component:Robot},
    {
        name:'Cart',
        path:'/cart',
        component:Cart,
        meta:{
            requireAuth:true
        }
    },
    {name:'Mine',path:'/mine',component:Mine},
    {
        // name:'Login',
        path:'/login',
        component:Login,
        children:[
            {
                path:'',// 默认子路由
                redirect:{name:'Em'}
            },{
                path:'em',
                name:'Em',
                component:Em,
            },{
                path:'mima',
                name:'Mima',
                component:Mima,
            }
        ]
    },
    {name:'Search',path:'/search',component:Search},
    {name:'Detail',path:'/detail',component:Detail},
]
let router = new VueRouter({
    routes
})
// 全局路由守卫
// 在进入某个路由前执行的代码
router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
        // 判断是否登录
        if(sessionStorage.getItem('token')){
            next()
        }else{
            next({
                path:'/login'
            })
        }
    }else{
        // 要进入to路由,必须调用next()方法
        next();   
    }
});
export default router;