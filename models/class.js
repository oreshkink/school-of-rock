'use strict';

let mongoose = require('mongoose');

let Class = new mongoose.Schema({
    title: {
        type: String,
        required: '�������� ����������� �����������'
    } ,
    description: {
        type: String,
        required: '�������� ����������� �����������'
    }
});

module.exports = Class;