const mongoose = require("mongoose");

// var Name = mongoose.model('Name',{scheema},'collectionname')
var Employee = mongoose.model('Employee',{
    name        :   { type : String },
    position    :   { type : String },
    office      :   { type : String },
    salary      :   { type: Number }
},'Employee');

module.exports = { Employee };