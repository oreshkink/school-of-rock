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

//mongoose.set('debug', true);
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
        let instruments =
            yield Instrument.model
                .aggregate([
                    {
                        $lookup: {
                            from: 'instrumentteachers',
                            localField: 'slug',
                            foreignField: 'instrumentSlug',
                            as: 'instrumentTeachers'
                        }
                    }
                ])
                .exec();

        let teachersSlugs = [];

        // Получаем список всех преподавателей для одного запроса
        instruments.forEach(instrument => {
            if (!instrument.instrumentTeachers) {
                return;
            }

            teachersSlugs = teachersSlugs.concat(
                instrument.instrumentTeachers.map(
                    instrumentTeacher =>  {
                        return instrumentTeacher.teacherSlug;
                    }
                )
            );
        });

        // Запрос на получение описания инструментов
        const teachers =
            yield Teacher.model.find(
                {
                    slug: { $in: teachersSlugs }
                }
            )
            .exec();

        // Добавляем преподавателей к каждому инструменту
        instruments.forEach((instrument, i) => {
            let teachersSlugs = instrument.instrumentTeachers.map(
                instrumentTeacher => {
                    return instrumentTeacher.teacherSlug;
                }
            );

            instruments[i].formattedTeachers = teachers.filter(
                teacher => {
                    return ~teachersSlugs.indexOf(teacher.slug);
                }
            );
        });

        this.body = jade.renderFile(
            'templates/instruments/index.jade',
            {
                instruments
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

        // Получаем список всех инструментов для одного запроса
        teachers.forEach(teacher => {
            if (teacher.teacherInstruments) {
                return;
            }

            instrumentsSlugs = instrumentsSlugs.concat(
                teacher.teacherInstruments.map(
                    teacherInstrument => {
                        return teacherInstrument.instrumentSlug;
                    }
                )
            );
        });

        // Запрос на получение описания инструментов
        const instruments =
            yield Instrument.model.find(
                {
                    slug: { $in: instrumentsSlugs }
                }
            )
            .exec();

        // Добавляем инструменты к каждому преподавателю
        teachers.forEach((teacher, i) => {
            let instrumentsSlugs = teacher.teacherInstruments.map(
                teacherInstrument => {
                    return teacherInstrument.instrumentSlug;
                }
            );

            teachers[i].formattedInstruments = instruments.filter(
                instrument => {
                    return ~instrumentsSlugs.indexOf(instrument.slug);
                }
            );
        });

        this.body = jade.renderFile(
            'templates/teachers/index.jade',
            {
                teachers
            }
        );
    })
    .get('/teachers/:slug', function *(next) {
        const teachers = yield Teacher.model.aggregate(
            [
                {
                    $match: { slug: this.params.slug }
                },
                {
                    $lookup: {
                        from: 'instrumentteachers',
                        localField: 'slug',
                        foreignField: 'teacherSlug',
                        as: 'teacherInstruments'
                    }
                }
            ]
        ).exec();

        !teachers.length && this.throw(404);

        const teacher = teachers.shift();

        let instrumentsSlugs = [];
        let instruments = [];

        if (teacher.teacherInstruments) {
            instrumentsSlugs = teacher.teacherInstruments.map(
                teacherInstrument => {
                    return teacherInstrument.instrumentSlug;
                }
            );

            instruments = yield Instrument.model.find(
                {
                    slug: { $in: instrumentsSlugs }
                }
            ).exec();
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
    .use(router.routes());

app.listen(3000);
