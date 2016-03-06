'use strict';

let mongoose = require('mongoose');

let Teacher = new mongoose.Schema({
    name: {
        type: String,
        required: 'Имя учителя обязательно'
    } ,
    description: {
        type: String,
        required: 'Описание учителя обязательно'
    }
});

module.exports = Teacher;