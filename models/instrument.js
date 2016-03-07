'use strict';

let mongoose = require('mongoose');

let instrumentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: '�������� ����������� �����������'
    } ,
    description: {
        type: String,
        required: '�������� ����������� �����������'
    },
    slug: {
        type: String,
        required: 'Slug ����������'
    }
});

module.exports.schema = instrumentSchema;
module.exports.model = mongoose.model('Instrument', instrumentSchema);
