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
        format_new_html(element);
    }, 'text').fail(function (err) {
        console.error(err.status + ' ' + err.statusText)
        $(element).html('Sorry, there was a problem downloading the content.');
    });
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

function format_new_html(parent_element) {
    // Add dictations to images in the gallery based on their alt text
    $(parent_element).find('.gallery img').each(function (i, elem) {
        console.log(elem)
        //console.log($(elem).attr('alt'))
        $(elem).after('<span>YAY</span>')
    })

}
