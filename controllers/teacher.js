'use strict';

let jade = require('jade');

// Models
let Teacher = require('../models/teacher');
let Instrument = require('../models/instrument');
let InstrumentTeacher = require('../models/instrument_teacher');
let MarkdownIt = require('markdown-it');
let md = new MarkdownIt();

module.exports = {
    index: function *(router) {
        // Список преподавателей
        let teachers = yield Teacher.model.aggregate([
            {
                $lookup: {
                    from: 'instrumentteachers',
                    localField: 'slug',
                    foreignField: 'teacherSlug',
                    as: 'teacherInstruments'
                }
            }
        ]).exec();

        let instrumentsSlugs = [];

        // Получаем список всех инструментов для одного запроса
        teachers.forEach(teacher => {
            instrumentsSlugs = instrumentsSlugs.concat(
                teacher.teacherInstruments.map(
                    teacherInstrument => {
                        return teacherInstrument.instrumentSlug;
                    }
                )
            );
        });

        // Запрос на получение описания инструментов
        const instruments = yield Instrument.model.find(
            {
                slug: { $in: instrumentsSlugs }
            }
        ).exec();

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
                teachers,
                router
            }
        );
    },

    show: function *(router) {
        // Учитель
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

        let teacher = teachers.shift();
        let instrumentsSlugs = [],
            teacherInstruments = [],
            otherInstruments = [];

        teacher.description = md.render(teacher.description);

        // Преподаваемые инструменты
        if (teacher.teacherInstruments) {
            instrumentsSlugs = teacher.teacherInstruments.map(
                teacherInstrument => {
                    return teacherInstrument.instrumentSlug;
                }
            );

            teacherInstruments = yield Instrument.model
                .find(
                {
                    slug: { $in: instrumentsSlugs }
                }
            );

            otherInstruments = yield Instrument.model
                .find(
                {
                    slug: { $nin: instrumentsSlugs }
                }
            );
        }

        this.body = jade.renderFile(
            'templates/teachers/show.jade',
            {
                teacher,
                teacherInstruments,
                otherInstruments,
                router
            }
        );
    }
};