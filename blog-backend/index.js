const express =require('express');
const Blogdata = require('./src/model/BlogData')
const cors = require("cors");
const app=new express();
app.use(cors());
app.use(express.json());

app.get('/contents',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    Blogdata.find()
    .then(function(blogContents){
       // console.log(blogContents);
        res.send(blogContents);
    })
})

app.put('/likes',  (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    
    like = req.body.likes
   
    Blogdata.updateOne({"likes":like+1})
    .then(function(){
        res.send();
    })
  })

  app.put('/follow',  (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    
    follow = req.body.follow
   console.log(follow);
    Blogdata.updateOne({"follow":follow+1})
    .then(function(){
        res.send();
    })
  })



app.listen(3000,()=>{
    console.log("server listening port 3000");
})