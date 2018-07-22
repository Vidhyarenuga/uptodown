var express =require('express');
var router=express.Router();
var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/dashboard');

var Schema =mongoose.Schema;
var ubuntuSchema = new Schema({
maincategory:{
    type: String
},
category:{
    type: String
},
subcategories:
{

    type:String,
    name:String,
    version:number,
    description:String
},
});




var ubuntu =mongoose.model('ubuntu',ubuntuSchema);

// var ubuntutab=
//     new ubuntu({
//         name:'Ubuntu',

//     });
//     ubuntutab.save(function(error){
//         console.log('saved');
//     if(error){
//         console.log(error);
//     }
//     });
     module.exports=router;