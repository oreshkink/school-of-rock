require('./reset.styl');

require('./patterns/layout.styl');
require('./patterns/buttons.styl');
require('./patterns/toolbar.styl');
require('./patterns/fonts.styl');
require('./patterns/markdown.styl');

//require('./routes/about.styl');

// Главная страница сайта
require('./routes/index.styl');

// Список направлений
require('./routes/instruments.styl');

// Детальная страница направления
require('./routes/instrument.styl');

// Список преподавателей
require('./routes/teachers.styl');

$(function() {
    $('.teachers-list').owlCarousel({
        items: 6,
        margin: 10
    });
});