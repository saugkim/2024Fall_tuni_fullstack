const http = require('http');

http.createServer(function(request, response) {

    let x = JSON.stringify(request.headers);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(x);
    response.end();

}).listen(3000);