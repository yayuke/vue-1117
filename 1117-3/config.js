// 引入路径所需模块
const  path=require('path')
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        publicPath:"dist/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|bmp)$/,
                use: [{
                    loader:"url-loader",
                    options:{
                        //限定图片大小
                        limit:65536,
                        name:"img/[name].[hash:8].[ext]"
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
}