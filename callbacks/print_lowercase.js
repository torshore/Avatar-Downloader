var getHTML = require('../https.-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function toLower(html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions,toLower);