var https = require('https');
var buffer = '';

module.exports = function getAndPrintHTML (options, callback) {
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