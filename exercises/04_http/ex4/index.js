const http = require('http');

http.createServer(function(request, response) {
    
    let body = [];
    request
      .on('data', chunk => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write(body.split("").reverse().join(""));
        response.end();
      });


}).listen(3000);