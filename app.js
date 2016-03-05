'use strict';

require('trace');
require('clarify');

let koa = require('koa');
let koa_router = require('koa-router');
let jade = require('jade');

let app = koa();
let router = koa_router();

router
    // Главная страница
    .get('/', function *(next) {
        this.body = 'Hello World!';
    })
    // Направления обучения
    .get('/classes', function *(next) {
        this.body = jade.renderFile('templates/hello.jade');
    })
    .get('/classes/:id', function *(next) {
        this.body = 'Classes/1';
    })
    // Преподаватели
    .get('/teachers', function *(next) {
        this.body = 'Teachers';
    })
    .get('/teachers/:id', function *(next) {
        this.body = 'Teachers';
    });

app
    .use(router.routes())
    .use(router.allowedMethods());


app.use(function *(next) {
    try {
        yield next;
    } catch (err) {
        this.status = 500;
        this.body = err.message;
    }
});

// error thrower
app.use(function *(next) {
    if (this.url === "/_err") {
        throw new Error("Send Error");
    }

    yield next;
});


app.on('error', function(err){
    console.error(err.stack);
});

app.listen(3000);
