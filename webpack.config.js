const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin") // 导入 在内存中自动生成html文件 的插件

// 创建一个插件的实例对象
const htmlPlugin = new htmlWebpackPlugin({
    template: path.join(__dirname, "./src/index.html"), // 源文件
    filename: "index.html" // 生成的 内存中首页的 名称
})

// 向外暴露一个打包的实例对象，因为webpack是基于Node构建的，所以webpack支持所有Node API和语法
// webpack 默认只能打包处理.js后缀名类型的文件，向.vue .png无法主动处理，所以要配置第三方的loader
module.exports = {
    mode: 'development', // development 或 production
    plugins: [
        htmlPlugin
    ],
    module: { // 所有第三方模块的配置规则
        rules: [ // 第三方匹配规则
            {
                test: /\.js|jsx$/,
                use: "babel-loader",
                exclude: /node_modules/ // exclude千万别忘记
            }
        ]
    }
}