var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/userData';

MongoClient.connect(url,function(err,db) {
    if(err){
        console.log(err);
    }else{
        console.log('Connected to',url);

        var collection = db.collection('users');
        var doc1 = {
            "username" : "dheeraj",
            "password" : "abcd1234",
            "name" : "Dheeraj",
            "sex" : "male",
            "age" : 21,
            "address" : "Bangalore",
            "active" : true
        };
        var doc2 = {
            "username" : "karan",
            "password" : "abcd1234",
            "name" : "Karan",
            "sex" : "male",
            "age" : 22,
            "address" : "Bangalore",
            "active" : true
        };

        collection.find().toArray(function(err,res){
            if(err){
                console.log(err);
            }else if(res.length){
                var docs=res;
                console.log(docs);
            }else{
                console.log('No matches found');
            }
            db.close();

    });
}
});