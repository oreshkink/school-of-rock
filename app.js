'use strict';

require('trace');
require('clarify');

let mongoose = require('mongoose');
let koa = require('koa');
let koa_router = require('koa-router');
let serve = require('koa-static');
let path = require('path');
let fs = require('fs');

// Controllers
let homeController = require('./controllers/home');
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

app.use(serve(__dirname + '/public'));


router
    .get('/', function*() {
        yield homeController.index.bind(this);
    })
    .get('/contacts', function *() {
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

app.use(router.routes());

app.listen(3000);
