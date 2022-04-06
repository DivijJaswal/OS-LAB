var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    regno:{type:String},
    //name:{type:String},
});

module.exports = mongoose.model('data',dataSchema);