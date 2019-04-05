"use strict";

// Find all 'js-insert' tags and insert their markdown
$(document).ready(function () {
    $('.js-insert').each(function (index, element) {
        var url = element.getAttribute('insert-url');
        if (url) {
            insert_html(element, url);
        }
    });
});

function insert_html(element, url) {
    $.get(url, function (data) {
        if (url.endsWith('.md')) {
            $(element).html(marked(data));
        }
        if (url.endsWith('.html')) {
            $(element).html(data);
        }
        element.removeAttribute('insert-url');
    }, 'text').fail(function (err) {
        console.error(err.status + ' ' + err.statusText)
        $(element).html('Sorry, there was a problem downloading the content.');
    }).done(function () {
        $('img').each(function (i, element) {
            element.addEventListener('load', function () {
                format_gallery(element)
            });
        });
    });
}

function format_gallery(image) {
    var gallery = $(image).parents('.gallery');
    var all_complete = gallery.find('img').toArray().every(function (img) {
        return img.complete
    });
    if (all_complete) {
        gallery.children().each(function (index, element) {
            var ratio = element.offsetWidth / element.offsetHeight;
            $(element).css('flex', String(ratio))
        });
    }
}

function switch_loaded(url) {
    $('.js-insert').html('');
    $('#viewer').html('');
    if (url)
        insert_html(document.getElementById('viewer'), url);
}

// Watch for scroll to bottom
// $(window).scroll(function () {
//     if ($(window).scrollTop() + $(window).height() == $(document).height()) {
//         console.log('Scrolled to bottom')
//     }
// });
