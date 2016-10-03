'use strict';

let nodeMailer = require('../libs/mailer');


module.exports = {
    feedback: function* (request, response) {
        let self = this;

        yield nodeMailer.sendMail(request.body)
                        .then(
            () => {
                response.status = 200;
            },
            () => {
                response.status = 500;
            }
        );
    }
};