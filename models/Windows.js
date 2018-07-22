var express =require('express');
var router=express.Router();
var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/dashboard');

var Schema =mongoose.Schema;
var windowSchema = new Schema({
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
var windows =mongoose.model('windows',windowSchema);
// var windowtab=
//     new windows({
//         name:'Windows',

//     });
//     windowtab.save(function(error){
//         console.log('saved');
//     if(error){
//         console.log(error);
//     }
//     });
    module.exports=router;
