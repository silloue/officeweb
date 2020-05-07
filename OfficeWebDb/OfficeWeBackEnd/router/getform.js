// 获取数据

module.exports = function (e,db){
    let client = db.client;
    let url = db.url;
    function _conect(dataNames,col,info,func){
        // 设置连接函数
        // dataNames第一个参数为数据库名字，col第二个参数为集合名字，info第三个为查询信息,fun回调函数
        client.connect(url,{ useNewUrlParser:true },function (err,db) {
            if(err) throw err;
            let dbo = db.db(dataNames);
            dbo.collection(col).find(info).toArray(function (err,result) {
                if(err) throw err;
                func(result);
                db.close();
            } )
        })
    }

    e.get('/funshow',(req,res) => {
        _conect('baseinfo','homepage',{},function(e){
            res.send(e)
        })
    })

    e.get('/maincover/:id',function (req,res) {
        let oid = req.params.id;
        if(oid == 1){
            let h = {tit:'one'};
            _conect("baseinfo",'maincover',h,function(e){
                res.send(e)
            })
        }else if(oid == 2){
            let h = {tit:'two'};
            _conect("baseinfo",'maincover',h,function(e){
                res.send(e)
            })
        }else if(oid == 3){
            let h = {tit:'three'};
            _conect("baseinfo",'maincover',h,function(e){
                res.send(e)
            })
        }else{
            throw new Error("router is faile");
        }
        
    })
}