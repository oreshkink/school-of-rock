'use strict';

let nodeMailer = require('../libs/mailer');


module.exports = {
    feedback: function* (response) {
        let self = this;

        yield nodeMailer.sendMail()
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