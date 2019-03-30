console.log('Testz script starting');
var watch = require('node-watch');

if (process.argv[2] && process.argv[3]) {
    console.log('Here are your two args: ' + process.argv[2] + ' ' + process.argv[3]);
}


watch('./', { recursive: true, filter: /\.(html|css)$/ }, function (evt, name) {
    console.log('%s changed.', name);
    if (/\.html$/.test(name)) {
        console.log('It was an html file');
    }
});

console.log('Testz script running...');