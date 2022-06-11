const mongoose =require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog");
const Schema = mongoose.Schema;
var BlogSchema = new Schema({
    title:String,
    date:Date,
    content:String,
    comment:String,
    name:String,
    follow:Number,
    likes:Number,
    author:String
});
var BlogData = mongoose.model('contents',BlogSchema);
module.exports =BlogData;
/*

var BlogSchema1 = new Schema({
     name:String,
     comment:String
});
var BlogComments = mongoose.model('comments',BlogSchema1);
module.exports =BlogComments;
//var Model = mongoose.model("file", fileSchema);*/