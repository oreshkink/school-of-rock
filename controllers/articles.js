'use strict';

let jade = require('jade');

// Models
let Article = require('../models/article');
let MarkdownIt = require('markdown-it');
let md = new MarkdownIt();

module.exports = {
    index: function* (router) {
        const articles = yield Article.model.find().exec();

        this.body = jade.renderFile(
            'templates/articles/index.jade',
            {
                articles,
                router
            }
        );
    },

    show: function* (router) {
        const slug = this.params.slug;

        const article = yield Article.model.findOne({ slug }).exec();

        console.log(article);

        this.body = jade.renderFile(
            'templates/articles/show.jade',
            {
                article,
                router
            }
        );
    }
};