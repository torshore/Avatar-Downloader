var https = require('https');
var buffer = "";

function getAndPrintHTML (options, callback) {
  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      return buffer += data;
      callback(buffer, '\n');
    });

    response.on('end', function() {
      console.log('Response stream complete.')
      console.log(buffer.toString());
    });
});
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getAndPrintHTML(requestOptions, printHTML);