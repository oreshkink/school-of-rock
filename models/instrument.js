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
    previewDescription: {
        type: String,
        required: '�������� ����������� �����������'
    },
    extendedDescription: {
        type: String,
        required: '�������� ����������� �����������'
    },
    slug: {
        type: String,
        required: 'Slug ����������'
    },
    videoReviews: [String]
});

module.exports.schema = instrumentSchema;
module.exports.model = mongoose.model('Instrument', instrumentSchema);
