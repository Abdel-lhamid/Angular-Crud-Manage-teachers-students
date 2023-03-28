const mongoose = require('mongoose');

const teacherSchcema = mongoose.Schema({
    name : { type: String, required: true},
    email : { type: String, required: true},
    salaire : {type : Number, required: true},

});
module.exports = mongoose.model('teacher',teacherSchcema);