"use strict";

// Find all 'js-insert' tags and insert their markdown
(function () {
    $(document).ready(function () {
        $('.js-insert').each(function (index, element) {
            var url = element.getAttribute('insert-url');
            if (url) {
                console.log(url)
                try {
                    $.get(url, function (data) {
                        if (url.endsWith('.md')) {
                            element.innerHTML = marked(data, { 'sanitize': true });
                        }
                        if (url.endsWith('.html')) {
                            element.innerHTML = data;
                        }
                        element.removeAttribute('insert-url');
                    }, 'text').fail(function (err) {
                        console.error(err.status + ' ' + err.statusText)
                        element.innerHTML = 'Sorry, there was a problem downloading the content.';
                    });
                } catch{ }
            }
        });
    });
})();