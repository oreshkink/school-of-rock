'use strict';

require('trace');
require('clarify');

let mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/test', {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    },
    poolSize: 5
});

let classSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        validate: [
            {
                validator: function check() {
                    console.log('ff');
                    return false;
                },
                message: 'Ошибка валидации'
            }
        ]
    } ,
    description: {
        type: String
    }
});

let Class = mongoose.model('Class', classSchema);

let piano = new Class({
    title: 'bar',
    description: 'piano description'
});

piano.save(function() {
    mongoose.disconnect();
});