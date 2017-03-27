'use strict';

let mongoose = require('mongoose');

let instrumentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Ќазвание направлени€ об€зательно'
    } ,
    description: {
        type: String,
        required: 'ќписание направлени€ об€зательно'
    },
    previewDescription: {
        type: String,
        required: 'ќписание направлени€ об€зательно'
    },
    extendedDescription: {
        type: String,
        required: 'ќписание направлени€ об€зательно'
    },
    slug: {
        type: String,
        required: 'Slug об€зателен'
    },
    videoReviews: [String]
});

module.exports.schema = instrumentSchema;
module.exports.model = mongoose.model('Instrument', instrumentSchema);
