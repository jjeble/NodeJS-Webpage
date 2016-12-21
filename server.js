var http = require('http');
var fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname + '/readMe1.txt','utf-8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe1.txt','utf-8');


//myReadStream.pipe(myWriteStream);
var server = http.createServer(function(req,res){
  console.log('request was made: '+req.url);
  if(req.url === '/home'||req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html').pipe(res);

  }
  else if(req.url === '/contact') {

        res.writeHead(200,{'Content-Type': 'html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);


  }
  else if(req.url==='/api/ninjas'){
    var ninjas  = [{name:'ryu', age:29},{name:'yoshi',age:32}];
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(ninjas));
  }
  else {

      res.writeHead(200,{'Content-Type': 'html'});
      fs.createReadStream(__dirname+'/404.html').pipe(res);

  }
  //res.writeHead(200,{'Content-Type': 'application/json'});
  //var myObj = {name: 'Ryu',
              //job: 'Ninja',
            //age: 29};



  //var myReadStream = fs.createReadStream(__dirname + '/index.html','utf-8');
  //myReadStream.pipe(res);
  //res.end('Hey guys');
});

server.listen(3000, '127.0.0.1');
console.log('listening to pport 3000');
