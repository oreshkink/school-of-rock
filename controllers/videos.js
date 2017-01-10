'use strict';

let jade = require('jade');

module.exports = {
    index: function* (router) {
        this.body = jade.renderFile(
            'templates/videos/index.jade',
            {
                router
            }
        );
    }
};