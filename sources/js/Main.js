/* global $, alert, console */

$(function () {

    'use strict';
    // Scroll Nice
    $("html").niceScroll();


    // Window Height
    $('.header').height($(window).height());

    // Resize Window
    $(window).resize(function(){
        $('.header').height($(window).height())
    });

    // Scroll To Features
    $('.header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 2000);
    });
    //
});