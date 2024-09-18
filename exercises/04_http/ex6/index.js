const http = require('http');
const fs = require('fs');
const path = require('path');
const fileContentType = 'text/html'

http.createServer(function (request, response) {
    if (request.url === '/classical') {
        readFileSendResponse('./homer.html', response);
    } else if (request.url === '/dystopy') {
        readFileSendResponse('./bradbury.html', response);
    } else if (request.url === '/') {
        readFileSendResponse('./index.html', response);
    } else {
        response.statusCode = 404;
        response.statusMessage = 'Requested content not found';
        response.end();
    }
}).listen(3000);

/* 
  * @param {string} fileName - name of the file to be read
  * @param {object} response - response object
  */
const readFileSendResponse = (fileName, response) => {
    fs.readFile(path.resolve(fileName), function (error, file) {
      if (error) {
        response.writeHead(404);
        response.write('An error occured: ', error);
        response.end();
      } else {
        response.writeHead(200, { 'Content-Type': fileContentType });
        response.write(file);
        response.end();
      }
    })
  }
