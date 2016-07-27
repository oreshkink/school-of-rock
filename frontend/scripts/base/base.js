require('./reset.styl');

require('./patterns/layout.styl');
require('./patterns/buttons.styl');
require('./patterns/toolbar.styl');
require('./patterns/fonts.styl');
require('./patterns/markdown.styl');

// Главная страница сайта
require('./routes/index.styl');

// О школе
require('./routes/about.styl');

// Список направлений
require('./routes/instruments.styl');

// Детальная страница направления
require('./routes/instrument.styl');

// Список преподавателей
require('./routes/teachers.styl');

// Список преподавателей
require('./routes/teacher.styl');

$(function() {
    $('.teachers-list').owlCarousel({
        items: 6,
        margin: 10
    });
});