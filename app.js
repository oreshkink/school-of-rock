'use strict';

require('trace');
require('clarify');

let koa = require('koa');
let koa_router = require('koa-router');
let mongoose = require('mongoose');
let jade = require('jade');
let path = require('path');
let fs = require('fs');

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
    .get('/classes', function *(next) {
        this.body = jade.renderFile('templates/classes/index.jade');
    })
    .get('/classes/:id', function *(next) {
        this.body = jade.renderFile('templates/classes/show.jade');
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

mongoose.disconnect();