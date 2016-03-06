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
    }
});

let Teacher = mongoose.model('Class', teacherSchema);

module.exports = Teacher;