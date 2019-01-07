import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from 'com/Home';
import Classfiy from 'com/Classfiy';
import Robot from 'com/Robot';
import Cart from 'com/Cart';
import Mine from 'com/Mine';
import Login from 'com/Login';
import Search from 'com/Search';
const routes = [
    {path:'/',redirect:{name:'Home'}},
    {name:'Home',path:'/home',component:Home},
    {name:'Classfiy',path:'/classfiy',component:Classfiy},
    {name:'Robot',path:'/robot',component:Robot},
    {name:'Cart',path:'/cart',component:Cart},
    {name:'Mine',path:'/mine',component:Mine},
    {name:'Login',path:'/login',component:Login},
    {name:'Search',path:'/search',component:Search},
]
let router = new VueRouter({
    routes
})
export default router;