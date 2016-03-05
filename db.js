let mongoose = require('mongoose');
let jade = require('jade');

let app = koa();
let router = koa_router();

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
        type: String
    } ,
    description: {
        type: String
    }
});

let Class = mongoose.model('Class', classSchema);

let piano = new Class({
    title: 'piano',
    description: 'piano description'
});

piano.save(function() {
    mongoose.disconnect();
});