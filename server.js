var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe1.txt','utf-8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe1.txt','utf-8');

myReadStream.on('data', function(chunk){
  console.log('new chunk recieved');
  myWriteStream.write(chunk);
});






/*
var server = http.createServer(function(req,res){
  console.log('request was made: '+req.url);
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('Hey guys');
});

server.listen(3000, '127.0.0.1');
console.log('listening to pport 3000');
*/