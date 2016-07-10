'use strict';

let jade = require('jade');

// Models
let Teacher = require('../models/teacher');
let Instrument = require('../models/instrument');
let InstrumentTeacher = require('../models/instrument_teacher');

module.exports = {
    index: function *(router) {
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


        // ѕолучаем список всех инструментов дл€ одного запроса
        teachers.forEach(teacher => {
            instrumentsSlugs = instrumentsSlugs.concat(
                teacher.teacherInstruments.map(
                    teacherInstrument => {
                        return teacherInstrument.instrumentSlug;
                    }
                )
            );
        });

        // «апрос на получение описани€ инструментов
        const instruments =
            yield Instrument.model.find(
                {
                    slug: { $in: instrumentsSlugs }
                }
            )
            .exec();

        // ƒобавл€ем инструменты к каждому преподавателю
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
                teacher,
                instruments,
                router
            }
        );
    }
};