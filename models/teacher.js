'use strict';

let mongoose = require('mongoose');

let teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: '��� ������� �����������'
    } ,
    description: {
        type: String,
        required: '�������� ������� �����������'
    }
});

let Teacher = mongoose.model('Class', teacherSchema);

module.exports = Teacher;