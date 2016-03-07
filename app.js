'use strict';

require('trace');
require('clarify');

//
let koa = require('koa');
let koa_router = require('koa-router');
let mongoose = require('mongoose');
let jade = require('jade');
let path = require('path');
let fs = require('fs');

// Models
let Teacher = require('./models/teacher');
let Instrument = require('./models/instrument');
let InstrumentTeacher = require('./models/instrument_teacher');

let app = koa();
let router = koa_router();
let middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middlewares.forEach(function (middleware) {
    app.use(require('./middlewares/' + middleware));
});

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/test', {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    },
    poolSize: 5
});

router
    .get('/', function *(next) {
        this.body = jade.renderFile('templates/home.jade');
    })
    .get('/contacts', function *(next) {
        this.body = jade.renderFile('templates/contacts.jade');
    })
    .get('/instruments', function *(next) {
        let instruments = yield Instrument.model.find().exec();

        this.body = jade.renderFile(
            'templates/instruments/index.jade',
            {
                instruments: instruments
            }
        );
    })
    .get('/instruments/:id', function *(next) {
        this.body = jade.renderFile('templates/instruments/show.jade');
    })
    .get('/teachers', function *(next) {
        let teachers =
            yield Teacher.model
                .aggregate([
                    {
                        $lookup: {
                            from: 'instrumentteachers',
                            localField: 'slug',
                            foreignField: 'teacherSlug',
                            as: 'teacherInstruments'
                        }
                    }
                ])
                .exec();

        let instrumentsSlugs = [];
        let teacher;

        teachers.forEach(function(teacher) {
            console.log(teacher.teacherInstruments);
            if (teacher.teacherInstruments) {
                instrumentsSlugs = instrumentsSlugs.concat(teacher.teacherInstruments.map(
                    function(teacherInstrument) {
                        return teacherInstrument.instrumentSlug;
                    }
                ));
            }
        });

        const instruments =
            yield Instrument.model.find(
                {
                    slug: { $in: instrumentsSlugs }
                }
            )
            .exec();

        teachers.forEach(function(teacher, i) {
            let instrumentsSlugs = teacher.teacherInstruments.map(
                function(teacherInstrument) {
                    return teacherInstrument.instrumentSlug;
                }
            );

            teachers.formattedInstrument = instruments.filter(function(instrument) {
                return ~instrumentsSlugs.indexOf(instrument.slug);
            });
        });

        this.body = jade.renderFile('templates/teachers/index.jade');
    })
    .get('/teachers/:slug', function *(next) {
        const teacher = yield Teacher.model.findOne(
            {
                slug: this.params.slug
            }
        ).exec();

        !teacher && this.throw(404);

        let instruments = [];

        if (teacher && teacher.instruments.length) {
            instruments = yield Instrument.model.find({
                slug: { $in: teacher.instruments }
            }).exec();
        }

        this.body = jade.renderFile(
            'templates/teachers/show.jade',
            {
                teacher: teacher,
                instruments: instruments
            }
        );
    });

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
