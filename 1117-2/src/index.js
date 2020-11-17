//使用CommonJS的方式将模块内容导入
const {add,sub}=require("./mathUtils")
console.log(add(1,2))
console.log(sub(7,2))
//使用ES6规范导入
import {name,age,sex} from"./info"
console.log(name,sex,age)