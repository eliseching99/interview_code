const{MongoClient}=require('mongodb');
var url="mongodb://localhost:27017/mydb";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("mydb");
    var documents=[
        {examtaken:"2019/03",name:"Alex",age:13, email:"alex@gmail.com", class:"1C",results:{math:58,english:98,bm:29}},
        {examtaken:"2019/03",name:"Charlotte",age:13, email:"Charlotte@gmail.com", class:"1B",results:{math:38,english:89,bm:31}},
        {examtaken:"2019/03",name:"Max",age:13, email:"max@gmail.com", class:"1C",results:{math:59,english:68,bm:12}},
        {examtaken:"2019/03",name:"Steven",age:13, email:"steven@gmail.com", class:"1A",results:{math:82,english:42,bm:51}},
        {examtaken:"2019/03",name:"Angie",age:13, email:"angie@gmail.com", class:"1C",results:{math:98,english:72,bm:30}},
        {examtaken:"2019/03",name:"Chee Kuan",age:13, email:"cheekuan@gmail.com", class:"1C",results:{math:8,english:38,bm:29}},
        {examtaken:"2019/06",name:"Chee Kuan",age:13, email:"cheekuan@gmail.com", class:"1C",results:{math:21,english:45,bm:59}}


    ];
    dbo.collection("students").insertMany(documents,function(err,res){
        if (err) throw err;
        console.log("Number of docs inserted:" + res.insertedCount);
        db.close();

    });
});