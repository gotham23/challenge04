const http = require('http');
const fs = require('fs');

const port = 8000;

function onRequest(req, res) {
  switch (req.url) {
    case '/':
      res.writeHead(200);
      req.url = 'index.example.html';
      break;
    case '/search':
      res.writeHead(200);
      req.url = 'index.html';
      break;
  }

  let path = 'public/' + req.url;
  fs.readFile(path, (err, data) => {
    res.writeHead(200);
    res.end(data);
  });
}
const server = http.createServer(onRequest);

server.listen(port, 'localhost', () => {
  console.log('Server Sudah Berjalan pada localhost:8000');
});
