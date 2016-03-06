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
    }
});

module.exports = mongoose.model('Instrument', instrumentSchema);