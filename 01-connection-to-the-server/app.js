var http = require('http');

var server = http.createServer();
var PORT = process.env.PORT || 3000;            // Set default port to 3000 if port is not defined
 
server.on('request', function (req, res) {
    res.end("Success, i'm listening from port:" + PORT);
});
 
server.listen(3000, function () {
    console.log('Listening on PORT: ' + PORT);
});

