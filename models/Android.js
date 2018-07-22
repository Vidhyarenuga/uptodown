var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


var androidSchema = new Schema({
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


module.exports = mongoose.model('Android', androidSchema);