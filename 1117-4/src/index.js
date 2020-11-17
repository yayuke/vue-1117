//使用CommonJS的方式将模块内容导入
const {add,sub}=require("./js/mathUtils")
console.log(add(1,2))
console.log(sub(7,2))
//使用ES6规范导入
import {name,age,sex} from "./js/info"
console.log(name,sex,age)
//添加加载文件
require("./css/normal.css")
import Vue from "vue"
const vm=new Vue({
    el:'#app',
    data:{
        msg:"Hello World"
    }
})

