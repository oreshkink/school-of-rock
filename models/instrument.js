'use strict';

let mongoose = require('mongoose');

let instrumentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Название направления обязательно'
    } ,
    description: {
        type: String,
        required: 'Описание направления обязательно'
    }
});

module.exports = mongoose.model('Instrument', instrumentSchema);