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
        // ������ ��������������
        let teachers = yield Teacher.model.aggregate([
            {
                $lookup: {
                    from: 'instrumentteachers',
                    localField: 'slug',
                    foreignField: 'teacherSlug',
                    as: 'teacherInstruments'
                }
            },
            {
                $sort : { sort : 1 }
            }
        ]).exec();

        let instrumentsSlugs = [];

        // �������� ������ ���� ������������ ��� ������ �������
        teachers.forEach(teacher => {
            instrumentsSlugs = instrumentsSlugs.concat(
                teacher.teacherInstruments.map(
                    teacherInstrument => {
                        return teacherInstrument.instrumentSlug;
                    }
                )
            );
        });

        // ������ �� ��������� �������� ������������
        const instruments = yield Instrument.model.find(
            {
                slug: { $in: instrumentsSlugs }
            }
        ).exec();

        // ��������� ����������� � ������� �������������
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
        // �������
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

        // ������������� �����������
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