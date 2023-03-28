const mongoose = require('mongoose');

const studentSchcema = mongoose.Schema({
    name : { type: String, required: true},
    email : { type: String, required: true},
    fillier : {type : String, required: true},

});
module.exports = mongoose.model('student',studentSchcema);