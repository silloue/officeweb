// 获取express 
const route = require('../expressConfig/expressconfig')  //路由配置文件
const mongod = require("../mongod/mongod.js")
const add = require("./add.js")  //增加数据文件
const getform = require("./getform.js") //获取数据路由

module.exports = function () {
    add(route,mongod);
    getform(route,mongod);
    route.listen(8000,()=>{
        // 监听端口8000启动
        console.log(`Example app listening on port 8000!`);
    })
}