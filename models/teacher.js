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
    },
    slug: {
        type: String,
        required: 'SLUG ����������'
    }
});

module.exports.schema = teacherSchema;
module.exports.model = mongoose.model('Teacher', teacherSchema);
