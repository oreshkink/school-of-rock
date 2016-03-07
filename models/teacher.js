'use strict';

let mongoose = require('mongoose');

let teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Имя учителя обязательно'
    } ,
    description: {
        type: String,
        required: 'Описание учителя обязательно'
    },
    slug: {
        type: String,
        required: 'SLUG обязателен'
    }
});

module.exports.schema = teacherSchema;
module.exports.model = mongoose.model('Teacher', teacherSchema);
