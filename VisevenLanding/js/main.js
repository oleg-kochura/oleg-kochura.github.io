$(document).ready(function() {

    var openBtn = $('.open-pop-up'),
        closeModal = $('.close'),
        submit = $('#pop-up-submit'),
        openMenu = $('.hamburger'),
        modal = $('.pop-up-window'),
        menu = $('.navigation'),
        transition;


    openMenu.on('click', function () {
        menu.toggleClass('open-drop-menu');
        $(this).toggleClass('open');
    });


    openBtn.on('click', function () {
        modal[0].showModal();
        transition = window.setTimeout(function () {
            modal.addClass('dialog-scale');
        }, 0.5);
    });


    closeModal.on('click', function () {
        modal[0].close();
        modal.removeClass('dialog-scale');
        clearTimeout(transition);
    });


    submit.on('click', function () {
        modal[0].close();
        modal.removeClass('dialog-scale');
    });

});

