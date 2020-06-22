

const{MongoClient}=require('mongodb');

var url="mongodb://localhost:27017/mydb";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("mydb");
    var query={examtaken:"2019/03"};
    dbo.collection("students").find(query).toArray(function(err,result){
    if (err) throw err;
    console.log(result);
    result.forEach(function(myDoc){
    listofresults=[myDoc.results.math,myDoc.results.english,myDoc.results.bm]
    //console.log(listofresults.reduce((a,b)=>a+b)/listofresults.length);
    let tempres= (listofresults.reduce((a,b)=>a+b)/listofresults.length+ myDoc.name);
    console.log(tempres)
    console.log("Math: "+myDoc.results.math +"English: "+myDoc.results.english +"BM "+myDoc.results.bm)

});
    db.close();

    });
});