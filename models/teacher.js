'use strict';

let mongoose = require('mongoose');

let Teacher = new mongoose.Schema({
    name: {
        type: String,
        required: '��� ������� �����������'
    } ,
    description: {
        type: String,
        required: '�������� ������� �����������'
    }
});

module.exports = Teacher;