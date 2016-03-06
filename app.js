'use strict';

require('trace');
require('clarify');

//
let koa = require('koa');
let koa_router = require('koa-router');
let mongoose = require('mongoose');
let jade = require('jade');
let path = require('path');
let fs = require('fs');

// Models
let Teacher = require('./models/teacher');
let Instrument = require('./models/instrument');

let app = koa();
let router = koa_router();
let middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middlewares.forEach(function (middleware) {
    app.use(require('./middlewares/' + middleware));
});

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/test', {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    },
    poolSize: 5
});

router
    .get('/', function *(next) {
        this.body = jade.renderFile('templates/home.jade');
    })
    .get('/contacts', function *(next) {
        this.body = jade.renderFile('templates/contacts.jade');
    })
    .get('/instruments', function *(next) {
        let instruments = yield Instrument.find().exec();

        this.body = jade.renderFile(
            'templates/instruments/index.jade',
            {
                instruments: instruments
            }
        );
    })
    .get('/instruments/:id', function *(next) {
        this.body = jade.renderFile('templates/instruments/show.jade');
    })
    .get('/teachers', function *(next) {
        this.body = jade.renderFile('templates/teachers/index.jade');
    })
    .get('/teachers/:id', function *(next) {
        this.body = jade.renderFile('templates/teachers/index.jade');
    });

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
