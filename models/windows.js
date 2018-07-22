var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


var windowsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    maincategory: {
        type: String,
        required:true
    },
    subcategories: {
        type: String,
        required: true
        },
     version:{
         type:Number,
         required: true 
     },
     imagePath:{
         type:String, 
         required:true
        },
        likes: {
            type: Number, 
            default: 0
        },
        comments: {
            type:String

        },
        createdBy: {
            type: String
        }
           

});


module.exports = mongoose.model('Windows', windowsSchema);