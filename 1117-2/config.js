// 引入路径所需模块
const  path=require('path')
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
    }
}