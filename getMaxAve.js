var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydb";
var str = "For Date of 2019/03</br>";
const port =3000

app.route('/stuid').get(function(req, res)

    {
        MongoClient.connect(url, function(err, db) {
            var dbo=db.db("mydb");
            var cursor = dbo.collection('students').find();
            var query={examtaken:"2019/06"};
            dbo.collection("students").find(query).toArray(function(err,result){
            if (err) throw err;
            //console.log(result);
            var maxlist=[]
             result.forEach(function(myDoc){
             listofresults=[myDoc.results.math,myDoc.results.english,myDoc.results.bm]
             let tempres= (listofresults.reduce((a,b)=>a+b)/listofresults.length);
             //maxlist.push(tempres)
             maxlist.push({name:myDoc.name,average_mark:tempres})


             str=str+"name: "+myDoc.name+" "+"results: " +listofresults+" "+"average mark: "+tempres+"</br>" ;
            });
            // var max_value= Math.max.apply(Math,maxlist);
            // console.log(max_value)
            
            //console.log(maxlist)
            //get the maximum average mark
            var max=maxlist[0].average_mark;
            for (i=1;i<maxlist.length;i++){
                if (maxlist[i].average_mark>max) max=maxlist[i];
            }
            console.log(max)
            str=str+"Maximum Average Score is by: "+ max.name + "Ave Score:"+max.average_mark+ ""
            //console.log(Object.keys(maxlist).reduce(function(a,b){return maxlist[a]>maxlist[b]?a:b}));

            //noinspection JSDeprecatedSymbols
        })
      
            res.send(str);
            db.close();
        });
    });

var server = app.listen(3000, function() {}); 
// app.listen(port,()=>console.log("ExAMple app lol"))