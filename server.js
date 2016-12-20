var http = require('http');
var fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname + '/readMe1.txt','utf-8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe1.txt','utf-8');


//myReadStream.pipe(myWriteStream);
var server = http.createServer(function(req,res){
  console.log('request was made: '+req.url);
  res.writeHead(200,{'Content-Type': 'html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html','utf-8');
  myReadStream.pipe(res);
  //res.end('Hey guys');
});

server.listen(3000, '127.0.0.1');
console.log('listening to pport 3000');
