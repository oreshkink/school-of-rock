'use strict';

require('trace');
require('clarify');

let mongoose = require('mongoose');
let koa = require('koa');
let koa_router = require('koa-router');
let path = require('path');
let fs = require('fs');

// Controllers
let teacherController = require('./controllers/teacher');
let instrumentController = require('./controllers/instrument');

let app = koa();
let router = koa_router();
let middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middlewares.forEach(function (middleware) {
    app.use(require('./middlewares/' + middleware));
});

//mongoose.set('debug', true);
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
    .get('instruments', '/instruments', function* () {
        yield instrumentController.index.bind(this, router);
    })
    .get('instrument', '/instruments/:slug', function* () {
        yield instrumentController.show.bind(this, router);
    })
    .get('teachers', '/teachers', function* () {
        yield teacherController.index.bind(this, router);
    })
    .get('teacher', '/teachers/:slug', function* () {
        yield teacherController.show.bind(this, router);
    });

app
    .use(router.routes());

app.listen(3000);
