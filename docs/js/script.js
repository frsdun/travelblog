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
    });
}

function switch_loaded(url) {
    $('.js-insert').html('');
    $('#viewer').html('');
    if (url)
        insert_html(document.getElementById('viewer'), url);
}