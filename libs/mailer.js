'use strict';

let nodemailer = require('nodemailer');

class NodeMailer {
    constructor() {
        this.init();
    }

    init() {
        var smtpConfig = {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: 'schoolofrock.moscow@gmail.com',
                pass: '4MaQmn+4MaQmn+'
            }
        };

        this.transporter = nodemailer.createTransport(smtpConfig);

        this.transporter.verify(function(error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log('Server is ready to take our messages');
            }
        });
    }

    sendMail() {
        let data = {
            from: 'schoolofrock.moscow@gmail.com',
            to: 'oreshkin.konstantin@gmail.com',
            subject: 'Message title',
            text: 'Plaintext version of the message',
            html: 'HTML version of the message'
        };

        return new Promise(
            (resolve, reject) => {
                this.transporter.sendMail(
                    data,
                    function(err) {
                        if (err) {
                            reject();
                        }

                        resolve();
                    }
                );
            }
        );
    }
}

module.exports = new NodeMailer();