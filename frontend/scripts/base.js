require('./reset.styl');

require('./patterns/layout.styl');
require('./patterns/buttons.styl');
require('./patterns/toolbar.styl');
require('./patterns/fonts.styl');
require('./patterns/markdown.styl');

// Главная страница сайта
require('./routes/index.styl');

// Контакты
require('./routes/contacts.styl');

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

// Цены
require('./routes/price.styl');

// Цены
require('./routes/videos.styl');


require('./libs/alert.css');
require('./libs/alert.js');

require('./libs/modal.css');
require('./libs/modal.js');

$(function() {
    var $teachersList = $('.teachers-list');
    var $backCallSuccessAlert = $('.mail-alert.alert-success');
    var $backCallDangerAlert = $('.mail-alert.alert-danger');

    var $backCallWindow = $('.back-call-window');
    var $backCallForm = $backCallWindow.find('form');

    $teachersList.owlCarousel({
        items: 6,
        margin: 10
    });

    $backCallForm.submit(
        function(e) {
            e.preventDefault();

            $.post('/send-mail',$backCallForm.serialize())
            .done(
                function(response) {
                    $backCallWindow.modal('hide');
                    $backCallSuccessAlert.show();
                }
            ).fail(
                function(response) {
                    $backCallWindow.modal('hide');
                    $backCallDangerAlert.show();
                }
            );
        }
    );

    $('.free-lesson').click(
        function(e){
            e.preventDefault();
            $backCallWindow.modal('show');
        }
    );

    $('.phone-me').click(
        function(e) {
            e.preventDefault();
            $backCallWindow.modal('show');
        }
    );
});