var getHTML = require('../https.-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function back(str) {
  var split = str.split('');
  var reverse = split.reverse();
  var join = reverse.join('');
  console.log(join);
}

getHTML(requestOptions, back);