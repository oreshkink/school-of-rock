'use strict';

let mongoose = require('mongoose');

let instrumentTeacherSchema = new mongoose.Schema({
    instrumentSlug: {
        type: String,
        required: true
    } ,
    teacherSlug: {
        type: String,
        required: true
    }
});

module.exports.schema = instrumentTeacherSchema;
module.exports.model = mongoose.model('InstrumentTeacher', instrumentTeacherSchema);
