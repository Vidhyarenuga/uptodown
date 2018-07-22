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
        type: String
    },
    subcategories: {
        type: String,
        name: String,
        version: Number,
        description: String
    },
});


module.exports = mongoose.model('Windows', windowsSchema);