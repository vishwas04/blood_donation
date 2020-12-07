var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require('body-parser');
var cors =require("cors");
var path = require("path");
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.get("/",function(req,res){
        res.send("home");
        });


app.get("/signup",function(req,res){
res.sendfile("/Users/vishwas/Desktop/web_project/signup.html");
});

app.post("/search",function(req,res)
        {
         MongoClient.connect('mongodb://localhost:27017',{
        useUnifiedTopology:true
    }, function(err,client)
    {
        if(err) throw err;
        const db = client.db('user_info'); //use newdb;
                             db.collection('login').find({r:req.body.r , b:req.body.b}).toArray(
        function(err,obj)
        {
        if (obj){
                                                                                                                
                    res.status(200).json(obj);
        }
       else{
            
                return res.status(200).json({errors:[{msg:'Invalid credentials'}]});
            }

        });
    });
});
         


app.get("/login",function(req,res){
res.sendFile(__dirname+'/home.html')
});
app.post("/login",function(req,res)
        {
         MongoClient.connect('mongodb://localhost:27017',{
        useUnifiedTopology:true
    }, function(err,client)
{
        if(err) throw err;
        const db = client.db('user_info'); //use newdb;
                             db.collection('login').find({email:req.body.email , pass1:req.body.pass1}).toArray(
        function(err,obj)
        {
        if (obj.length != 0){
                                                                                                                
                    req._id = obj[0]._id;
                    res.status(200).json(obj[0]);
        }
       else{
            
                return res.status(400).json({errors:[{msg:'Invalid credentials'}]});
            }

        });
    });
         });
         

app.post("/delete",function(req,res)
        {
         MongoClient.connect('mongodb://localhost:27017',{
        useUnifiedTopology:true
        }, function(err,client)
    {
        if(err) throw err;
        const db =  client.db('user_info'); //use newdb;
        db.collection('login').deleteMany({email:req.body.email , pass1:req.body.pass1},
                 
        function(err,result)
        {
                                      console.log(result.deletedCount);
        if (err) throw err;
                                          
        if(result.deletedCount > 0)
        {
                                          res.status(200).json({r:1});
        }
        else
                                          {
                                          res.status(200).json({r:0});
                                          }
        
        });
    });
         })


app.post("/signup1", function(req,res){
    //POST /student message body - {srn:"1234", name:"", dept:"ece"}
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;
    MongoClient.connect('mongodb://localhost:27017',{
        useUnifiedTopology:true
    }, function(err,client){
        if(err)  console.log(err);
        const db = client.db('user_info'); //use newdb;
        db.collection('login').insertOne(req.body,function(err,objs){
                        console.log(err)// find({})
                        res.send(req.body);
//                        res.send("hi");
        });
    });
          });


app.listen(8001, function(){
    console.log("Server listening on 8001...")
});

//           res.sendfile("/Users/vishwas/Desktop/web_project/events.html");
//           res.status(400).send({
//   message: 'This is an error!'
//});
//           res.redirect('/signup');
