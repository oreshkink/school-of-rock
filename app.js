'use strict';

require('trace');
require('clarify');

let koa = require('koa');
let mongoose = require('mongoose');
let jade = require('jade');

let app = koa();

app.use(function*() {
});

app.listen(3000);
