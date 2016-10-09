'use strict';

require('trace');
require('clarify');

let mongoose = require('mongoose');
let koa = require('koa');
let koa_router = require('koa-router');
let serve = require('koa-static');
let path = require('path');
let fs = require('fs');
let bodyParser = require('koa-body-parser');

// Controllers
let aboutController = require('./controllers/about');
let homeController = require('./controllers/home');
let contactsController = require('./controllers/contacts');
let teacherController = require('./controllers/teacher');
let instrumentController = require('./controllers/instrument');
let sendEmailController = require('./controllers/send-mail');

let app = koa();
let router = koa_router();
let middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middlewares.forEach(function (middleware) {
    app.use(require('./middlewares/' + middleware));
});

//mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/test', {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    },
    poolSize: 5
});

app.use(serve(__dirname + '/public'));

app.use(bodyParser());
app.use(router.routes());

router
    .post('send-mail', '/send-mail', function* () {
        yield sendEmailController.feedback.bind(this, this.request, this.response);
    })
    .get('/', function*() {
        yield homeController.index.bind(this, router);
    })
    .get('about', '/about', function*() {
        yield aboutController.index.bind(this, router);
    })
    .get('/contacts', function *() {
        yield contactsController.index.bind(this, router);
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

app.listen(80);
