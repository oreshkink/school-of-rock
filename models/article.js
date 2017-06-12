'use strict';

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    name: {
        type: String
    },
    previewDescription: {
        type: String
    },
    description: {
        type: String
    },
    slug: {
        type: String
    }
});

module.exports.schema = articleSchema;
module.exports.model = mongoose.model('Article', articleSchema);
