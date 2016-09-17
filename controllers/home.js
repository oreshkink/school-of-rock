'use strict';

let jade = require('jade');
let MarkdownIt = require('markdown-it');
let md = new MarkdownIt();

module.exports = {
    index: function* (router) {
        this.body = jade.renderFile(
            'templates/home/index.jade',
            { router }
        );
    }
};