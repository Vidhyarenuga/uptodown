var express =require('express');
var router=express.Router();
var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/dashboard');

var Schema =mongoose.Schema;
var androidSchema = new Schema({
name: String
});



var android =mongoose.model('android',androidSchema);

var androidtab=
    new android({
        name:'Android',

    });
    androidtab.save(function(error){
        console.log('saved');
    if(error){
        console.log(error);
    }
    });
    module.exports=router;