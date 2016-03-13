'use strict';

let jade = require('jade');

// Models
let Teacher = require('../models/teacher');
let Instrument = require('../models/instrument');
let InstrumentTeacher = require('../models/instrument_teacher');

module.exports = {
    index: function* (router) {
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

        // �������� ������ ���� �������������� ��� ������ �������
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

        // ������ �� ��������� �������� ������������
        const teachers =
            yield Teacher.model.find(
                {
                    slug: { $in: teachersSlugs }
                }
            )
            .exec();

        // ��������� �������������� � ������� �����������
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
                instruments,
                router
            }
        );
    },

    show: function* (router) {
        const instrumentSlug = this.params.slug;

        let instruments = yield Instrument.model
            .aggregate([
                {
                    $match: {
                        slug: instrumentSlug
                    }
                },
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

        !instruments.length && this.throw(404);

        const instrument = instruments.shift();

        instruments = yield Instrument.model
            .find(
                {
                    slug: {
                        $ne: instrumentSlug
                    }
                }
            );

        this.body = jade.renderFile(
            'templates/instruments/show.jade',
            {
                instrument,
                instruments,
                router
            }
        );
    }
};