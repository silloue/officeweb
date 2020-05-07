// 添加数据


module.exports = function (e,db) {
    let client = db.client;
    let url = db.url

    e.get("/s",(req,res) => {
        res.header("Access-Control-Allow-Origin","*");
        //允许的header类型
        res.header("Access-Control-Allow-Headers","content-type");
        //跨域允许的请求方式 
        res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
            // client.connect(url, {useNewUrlParser : true}, (err,db) =>{
        //     if(err) throw err;
        //     console.log("数据库连接成功");
        //     let dbo = db.db("baseinfo");
        //     let myobj = [
        //         {
        //             title:'小程序已成为微信生态内的红利聚集地',
        //             describle:'无论您是需要单个IT专业人士或专业团队，琤峰科技的人力资源配置服务满足您在人员调配上的灵活需求。',
        //             imgSrc:'http://www.coraise.cn/_nuxt/img/tab-img1.4167d6f.png'
        //         },
        //         {
        //             title:'小程序已成为微信生态内的红利聚集地',
        //             describle:'无论您是需要单个IT专业人士或专业团队，琤峰科技的人力资源配置服务满足您在人员调配上的灵活需求。',
        //             imgSrc:'http://www.coraise.cn/_nuxt/img/tab-img2.bcea217.png'
        //         },
        //         {
        //             title:'小程序已成为微信生态内的红利聚集地',
        //             describle:'无论您是需要单个IT专业人士或专业团队，琤峰科技的人力资源配置服务满足您在人员调配上的灵活需求。',
        //             imgSrc:'http://www.coraise.cn/_nuxt/img/tab-img3.cf7a20c.png'
        //         },
        //         {
        //             title:'小程序已成为微信生态内的红利聚集地',
        //             describle:'无论您是需要单个IT专业人士或专业团队，琤峰科技的人力资源配置服务满足您在人员调配上的灵活需求。',
        //             imgSrc:'http://www.coraise.cn/_nuxt/img/tab-img4.79d2b30.png'
        //         }
        //     ]
        //     dbo.collection('homepage').insertMany(myobj,function (err,res) {
        //         if(err) throw err;
        //         console.log("插入成功" + res.insertedCount);
        //         console.log("断开数据库")
        //         db.close();
        //     })
        // })

        res.send({name:'h'})
    })
}