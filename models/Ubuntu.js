<<<<<<< HEAD
var express =require('express');
var router=express.Router();
var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/dashboard');

var Schema =mongoose.Schema;
var ubuntuSchema = new Schema({
maincategory:{
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
=======
var mongoose = require('mongoose');
>>>>>>> 99f810e4ed464b6c8bc80bd85d01ac943ad697ba

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


var ubuntuSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    maincategory: {
        type: String
    },
    subcategories: {

        type: String,
        name: String,
        version: Number,
        description: String
    },
});


module.exports = mongoose.model('Ubuntu', ubuntuSchema);