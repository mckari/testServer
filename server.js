const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {  
  res.end('hello world!');
  console.log(req.url);
  console.log(1+1);
  console.log(22)
}).listen(3000);