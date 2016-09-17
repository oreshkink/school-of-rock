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
    },
    photo_src: {
        type: String
    },
    profile_photo_src: {
        type: String
    },
    profile_photo_src_hover: {
        type: String
    }
});

module.exports.schema = teacherSchema;
module.exports.model = mongoose.model('Teacher', teacherSchema);
