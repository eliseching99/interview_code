const{MongoClient}=require('mongodb');
var url="mongodb://localhost:27017/mydb";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("mydb");
   dbo.createCollection("students",function(err,res){
       if (err) throw err;
       console.log('collection created');
       db.close();
   
    });
});