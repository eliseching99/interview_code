const{MongoClient}=require('mongodb');
var url="mongodb://localhost:27017/mydb";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("mydb");
    dbo.collection("students").drop(function(err,delOK){
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close()
    });
});